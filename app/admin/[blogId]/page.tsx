"use client";

import { Button, Grid, TextInput } from "@mantine/core";
import React, { useEffect } from "react";
import useBlog from "../../../hooks/useBlog";
import axios from "axios";
import { useParams } from "next/navigation";
import { useForm } from "@mantine/form";
import { BlogCard } from "@prisma/client";
import { BlogCard as BlogCardUI } from "../../../components/BlogCard";

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

  async function saveBlogCard(
    blogCardId: string,
    blogCard: Pick<BlogCard, "content" | "englishContent">
  ) {
    await axios.post(`/api/blogCards/${blogCardId}`, blogCard);
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
        <BlogCardUI
          key={blogCard.id}
          blogCardId={blogCard.id}
          saveBlogCard={saveBlogCard}
        />
      ))}

      <Button onClick={addBlogCard} color="navy">
        + Text
      </Button>
    </>
  );
}
