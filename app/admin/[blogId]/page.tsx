// "use client";

// import { Button, Grid, TextInput } from "@mantine/core";
// import React, { useCallback, useEffect } from "react";
// import useBlog from "../../../hooks/useBlog";
// import axios from "axios";
// import { useParams } from "next/navigation";
// import { useForm } from "@mantine/form";
// import { Blog, BlogCard } from "@prisma/client";
// import { BlogCard as BlogCardUI } from "../../../components/BlogCard";
// import _ from "lodash";

// export default function CreatePage() {
//   const params = useParams();
//   const { blog, mutate } = useBlog(params?.blogId as string);

//   const form = useForm({
//     initialValues: {
//       title: "",
//       englishTitle: "",
//     },
//   });

//   useEffect(() => {
//     if (blog) {
//       form.setValues({
//         title: blog.title,
//         englishTitle: blog.englishTitle,
//       });
//     }
//   }, [blog]);

//   async function addBlogCard() {
//     await axios.post("/api/blogCards", {
//       blogId: blog?.id,
//     });
//     mutate();
//   }

//   async function saveBlogCard(
//     blogCardId: string,
//     blogCard: Pick<BlogCard, "content" | "englishContent">
//   ) {
//     await axios.post(`/api/blogCards/${blogCardId}`, blogCard);
//   }

//   async function saveTitle(
//     blogId: string,
//     blog: Pick<Blog, "title" | "englishTitle">
//   ) {
//     await axios.post(`/api/blogs/${blogId}`, blog);
//   }

//   async function deleteBlogCard(blogCardId: string) {
//     await axios.delete(`/api/blogCards/${blogCardId}`);
//     mutate();
//   }

//   const debouncedSaveTitle = useCallback(_.debounce(saveTitle, 1000), []);

//   return (
//     <>
//       <Grid>
//         <Grid.Col span={6}>
//           <TextInput
//             fw="bold"
//             fz="xl"
//             width="full"
//             size="xl"
//             variant="unstyled"
//             placeholder="Title (in your language)"
//             {...form.getInputProps("title")}
//             onChange={(e) => {
//               form.setFieldValue("title", e.currentTarget.value);
//               debouncedSaveTitle(params?.blogId as string, {
//                 title: e.currentTarget.value,
//                 englishTitle: form.values.englishTitle,
//               });
//             }}
//             required
//           ></TextInput>
//         </Grid.Col>

//         <Grid.Col span={6}>
//           <TextInput
//             fw="bold"
//             fz="xl"
//             width="full"
//             size="xl"
//             variant="unstyled"
//             placeholder="Title (in English)"
//             {...form.getInputProps("englishTitle")}
//             onChange={(e) => {
//               form.setFieldValue("englishTitle", e.currentTarget.value);
//               debouncedSaveTitle(params?.blogId as string, {
//                 title: form.values.title,
//                 englishTitle: e.currentTarget.value,
//               });
//             }}
//             required
//           ></TextInput>
//         </Grid.Col>
//       </Grid>

//       {blog?.blogCards
//         ?.sort(
//           (a, b) =>
//             new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//         )
//         .map((blogCard) => (
//           <BlogCardUI
//             key={blogCard.id}
//             blogCardId={blogCard.id}
//             saveBlogCard={saveBlogCard}
//             deleteBlogCard={deleteBlogCard}
//           />
//         ))}

//       <Button onClick={addBlogCard} color="navy">
//         + Text
//       </Button>
//     </>
//   );
// }
"use client";

import { useState } from "react";
import { DataSheetGrid, textColumn, keyColumn } from "react-datasheet-grid";
import { ReactMediaRecorder } from "react-media-recorder";
import "react-datasheet-grid/dist/style.css";
import ImageUploader from "../../../components/ImageUploader";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const Recorder = () => {
  return (
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <button onClick={startRecording}>🔴</button>
          <button onClick={stopRecording}>🟥</button>
          <button
            onClick={() => {
              if (!mediaBlobUrl) return;
              const audio = new Audio(mediaBlobUrl);
              audio.play();
            }}
          >
            ▶️
          </button>
        </div>
      )}
    />
  );
};

const Grid = () => {
  const form = useForm({
    initialValues: {
      title: "",
      englishTitle: "",
    },
  });
  const [title, setTitle] = useState("Title in Tagalog" as string);
  const [englishTitle, setEnglishTitle] = useState(
    "Title in English" as string
  );
  const [data, setData] = useState([
    { text: "Elon", subtext: "Musk" },
    { text: "Jeff", subtext: "Bezos" },
  ]);

  const columns = [
    {
      ...keyColumn("text", textColumn),
      title: "Tagalog",
      grow: 3,
    },
    {
      ...keyColumn("subtext", textColumn),
      title: "English",
      grow: 3,
    },
    {
      component: Recorder,
      title: "Recording",
      grow: 1,
    },
    {
      ...keyColumn("explanation", textColumn),
      title: "Explanation",
      grow: 3,
    },
  ];

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

      <DataSheetGrid value={data} onChange={setData as any} columns={columns} />
    </>
  );
};

export default Grid;
