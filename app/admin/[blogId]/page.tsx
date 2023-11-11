"use client";

import { Button, Grid, TextInput } from "@mantine/core";
import React, { useCallback, useEffect } from "react";
import useBlog from "../../../hooks/useBlog";
import axios from "axios";
import { useParams } from "next/navigation";
import { useForm } from "@mantine/form";
import { Blog, BlogCard } from "@prisma/client";
import { BlogCard as BlogCardUI } from "../../../components/BlogCard";
import _ from "lodash";

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
      blogId: blog?.id,
    });
    mutate();
  }

  async function saveBlogCard(
    blogCardId: string,
    blogCard: Pick<BlogCard, "content" | "englishContent">
  ) {
    await axios.post(`/api/blogCards/${blogCardId}`, blogCard);
  }

  async function saveTitle(
    blogId: string,
    blog: Pick<Blog, "title" | "englishTitle">
  ) {
    await axios.post(`/api/blogs/${blogId}`, blog);
  }

  async function deleteBlogCard(blogCardId: string) {
    await axios.delete(`/api/blogCards/${blogCardId}`);
    mutate();
  }

  const debouncedSaveTitle = useCallback(_.debounce(saveTitle, 1000), []);

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
            onChange={(e) => {
              form.setFieldValue("title", e.currentTarget.value);
              debouncedSaveTitle(params?.blogId as string, {
                title: e.currentTarget.value,
                englishTitle: form.values.englishTitle,
              });
            }}
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
            onChange={(e) => {
              form.setFieldValue("englishTitle", e.currentTarget.value);
              debouncedSaveTitle(params?.blogId as string, {
                title: form.values.title,
                englishTitle: e.currentTarget.value,
              });
            }}
            required
          ></TextInput>
        </Grid.Col>
      </Grid>

      {blog?.blogCards
        ?.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
        .map((blogCard) => (
          <BlogCardUI
            key={blogCard.id}
            blogCardId={blogCard.id}
            saveBlogCard={saveBlogCard}
            deleteBlogCard={deleteBlogCard}
          />
        ))}

      <Button onClick={addBlogCard} color="navy">
        + Text
      </Button>
    </>
  );
}
