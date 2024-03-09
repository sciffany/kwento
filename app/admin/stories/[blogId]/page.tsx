"use client";

import { useEffect, useMemo, useState } from "react";
import { DataSheetGrid, textColumn, keyColumn } from "react-datasheet-grid";
import "react-datasheet-grid/dist/style.css";
import ImageUploader from "../../../../components/ImageUploader";
import { ActionIcon, Button, Flex, TextInput } from "@mantine/core";
import { createId } from "@paralleldrive/cuid2";
import "./page.css";
import { Recorder } from "../../../../components/Recorder";
import { useParams } from "next/navigation";
import { uploadMediaToGCS } from "../../../../lib/upload";
import useBlog from "../../../../hooks/useBlog";

const Recording = () => {
  return <ActionIcon>▶️</ActionIcon>;
};

const CreateEditPage = () => {
  const params = useParams();

  const [title, setTitle] = useState("Lesson Title");
  const [data, setData] = useState([
    { id: createId(), text: "Tagalog text", subtext: "English text" },
  ]);
  const [isDirty, setIsDirty] = useState(false);
  const [prevData, setPrevData] = useState(data);
  const [imageUrl, setImageUrl] = useState<string | null>();

  const { blog } = useBlog((params.blogId as string) ?? "");

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      const transformedData = blog.blogCards.map((card) => ({
        id: card.id,
        text: card.content,
        subtext: card.englishContent,
      }));
      setData(transformedData);
      setPrevData(transformedData);
      setImageUrl(blog?.imageUrl);
    }
  }, [blog]);

  const columns = [
    {
      ...keyColumn("text", textColumn),
      title: "Tagalog",
      grow: 2,
    },
    {
      ...keyColumn("subtext", textColumn),
      title: "English",
      grow: 2,
    },
    {
      component: Recording,
      title: "Preview",
      grow: 0.2,
    },
    {
      ...keyColumn("explanation", textColumn),
      title: "Explanation",
      grow: 2,
    },
    {
      component: Recorder,
      title: "Studio",
      grow: 1,
    },
  ];

  const createdRowIds = useMemo(() => new Set(), []);
  const deletedRowIds = useMemo(() => new Set(), []);
  const updatedRowIds = useMemo(() => new Set(), []);

  const cancel = () => {
    setData(prevData);
    createdRowIds.clear();
    deletedRowIds.clear();
    updatedRowIds.clear();
    setIsDirty(false);
  };

  const save = async () => {
    const newData = data.filter(({ id }) => !deletedRowIds.has(id));

    let imageUrl;
    if (droppedImage) {
      imageUrl = await uploadMediaToGCS(droppedImage);
    }

    if (params.blogId === "new") {
      await fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify({ title: title, data: newData, imageUrl }),
      });
    } else {
      const updatedRows = data.filter(({ id }) => updatedRowIds.has(id));
      const createdRows = data.filter(({ id }) => createdRowIds.has(id));
      const deletedRows = data.filter(({ id }) => deletedRowIds.has(id));
      await fetch(`/api/blogs/${params.blogId}`, {
        method: "PUT",
        body: JSON.stringify({
          title: title,
          createdRows: createdRows,
          updatedRows: updatedRows,
          deletedRows: deletedRows,
          imageUrl,
        }),
      });
    }

    setData(newData);
    setPrevData(newData);
    setDroppedImage(null);
    createdRowIds.clear();
    deletedRowIds.clear();
    updatedRowIds.clear();
    setIsDirty(false);
  };
  const [droppedImage, setDroppedImage] = useState<File | null>(null);

  return (
    <>
      <ImageUploader
        originalImageUrl={imageUrl}
        image={droppedImage}
        onDrop={(files: File[]) => {
          setDroppedImage(files[0]);
        }}
      />
      <TextInput
        fw='bold'
        fz='xl'
        width='full'
        size='xl'
        variant='unstyled'
        required
        value={title}
        onChange={(event) => {
          setTitle(event.currentTarget.value);
          setIsDirty(true);
        }}
      ></TextInput>

      <DataSheetGrid
        columns={columns}
        value={data}
        createRow={() => ({ id: createId() })}
        duplicateRow={({ rowData }) => ({ ...rowData, id: createId() })}
        rowClassName={({ rowData }) => {
          if (deletedRowIds.has(rowData.id)) {
            return "row-deleted";
          }
          if (createdRowIds.has(rowData.id)) {
            return "row-created";
          }
          if (updatedRowIds.has(rowData.id)) {
            return "row-updated";
          }
        }}
        onChange={(newValue, operations) => {
          for (const operation of operations) {
            setIsDirty(true);
            if (operation.type === "CREATE") {
              newValue
                .slice(operation.fromRowIndex, operation.toRowIndex)
                .forEach(({ id }) => createdRowIds.add(id));
            }

            if (operation.type === "UPDATE") {
              newValue
                .slice(operation.fromRowIndex, operation.toRowIndex)
                .forEach(({ id }) => {
                  if (!createdRowIds.has(id) && !deletedRowIds.has(id)) {
                    updatedRowIds.add(id);
                  }
                });
            }

            if (operation.type === "DELETE") {
              let keptRows = 0;

              data
                .slice(operation.fromRowIndex, operation.toRowIndex)
                .forEach(({ id }, i) => {
                  updatedRowIds.delete(id);

                  if (createdRowIds.has(id)) {
                    createdRowIds.delete(id);
                  } else {
                    deletedRowIds.add(id);
                    newValue.splice(
                      operation.fromRowIndex + keptRows++,
                      0,
                      data[operation.fromRowIndex + i]
                    );
                  }
                });
            }
          }

          setData(newValue as any);
        }}
      />

      {(isDirty || droppedImage) && (
        <Flex direction='row' w='100%' justify='flex-end'>
          <Button onClick={save}>Save</Button>
          <Button onClick={cancel}>Cancel</Button>
        </Flex>
      )}
    </>
  );
};

export default CreateEditPage;
