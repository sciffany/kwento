"use client";

import { Button, Grid, TextInput } from "@mantine/core";
import React, { useEffect } from "react";
import { BlogCard } from "../../../components/BlogCard";
import useBlog from "../../../hooks/useBlog";
import axios from "axios";
import { useParams } from "next/navigation";
import { useForm } from "@mantine/form";

export default function CreatePage() {
  const params = useParams();
  const { blog, mutate } = useBlog(params?.blogId as string);

  const form = useForm({
    initialValues: {
      title: "",
      englishTitle: "",
    },
  });

  useEffect(() => {
    if (blog) {
      form.setValues({
        title: blog.title,
        englishTitle: blog.englishTitle,
      });
    }
  }, [blog]);

  async function addBlogCard() {
    await axios.post("/api/blogCards", {
      blogId: blog.id,
    });
    mutate();
  }

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            fw="bold"
            fz="xl"
            width="full"
            size="xl"
            variant="unstyled"
            placeholder="Title (in your language)"
            {...form.getInputProps("title")}
            required
          ></TextInput>
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput
            fw="bold"
            fz="xl"
            width="full"
            size="xl"
            variant="unstyled"
            placeholder="Title (in English)"
            {...form.getInputProps("englishTitle")}
            required
          ></TextInput>
        </Grid.Col>
      </Grid>

      {blog?.blogCards?.map((blogCard) => (
        <BlogCard blogCardId={blogCard.id} />
      ))}

      <Button onClick={addBlogCard} color="navy">
        Add Paragraph
      </Button>
    </>
  );
}
