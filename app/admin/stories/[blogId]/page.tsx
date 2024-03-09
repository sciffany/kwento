"use client";

import { useEffect, useMemo, useState } from "react";
import { DataSheetGrid, textColumn, keyColumn } from "react-datasheet-grid";
import { ReactMediaRecorder } from "react-media-recorder";
import "react-datasheet-grid/dist/style.css";
import ImageUploader from "../../../../components/ImageUploader";
import { ActionIcon, Button, Flex, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { createId } from "@paralleldrive/cuid2";
import "./page.css";

const Recorder = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null | undefined>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio?.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  }, [audio]);

  return (
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          {status === "recording" ? (
            <ActionIcon
              bg='#000000'
              onClick={() => {
                stopRecording();
              }}
            >
              🟥
            </ActionIcon>
          ) : (
            <ActionIcon bg='#000000' onClick={startRecording}>
              🔴
            </ActionIcon>
          )}
          {isPlaying ? (
            <ActionIcon
              onClick={() => {
                audio?.pause();
                setIsPlaying(false);
              }}
            >
              ⏸️
            </ActionIcon>
          ) : (
            <ActionIcon
              onClick={() => {
                if (!mediaBlobUrl) return;
                const newAudio = new Audio(mediaBlobUrl);
                newAudio?.play();
                setAudio(newAudio);
                setIsPlaying(true);
              }}
            >
              ▶️
            </ActionIcon>
          )}

          <ActionIcon bg='green' w={60} onClick={() => {}}>
            Upload
          </ActionIcon>
        </div>
      )}
    />
  );
};

const Recording = () => {
  return <ActionIcon>▶️</ActionIcon>;
};

const Grid = () => {
  const form = useForm({
    initialValues: {
      title: "",
      englishTitle: "",
    },
  });

  const [data, setData] = useState([
    { id: createId(), text: "Tagalog text", subtext: "English text" },
  ]);
  const [isDirty, setIsDirty] = useState(false);
  const [prevData, setPrevData] = useState(data);

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

  const save = () => {
    const newData = data.filter(({ id }) => !deletedRowIds.has(id));
    setData(newData);
    setPrevData(newData);

    createdRowIds.clear();
    deletedRowIds.clear();
    updatedRowIds.clear();
    setIsDirty(false);
  };

  return (
    <>
      <ImageUploader />
      <TextInput
        fw='bold'
        fz='xl'
        width='full'
        size='xl'
        variant='unstyled'
        placeholder='Title'
        {...form.getInputProps("title")}
        onChange={(e) => {
          form.setFieldValue("title", e.currentTarget.value);
        }}
        required
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

      {isDirty && (
        <Flex direction='row' w='100%' justify='flex-end'>
          <Button onClick={save}>Save</Button>
          <Button onClick={cancel}>Cancel</Button>
        </Flex>
      )}
    </>
  );
};

export default Grid;
