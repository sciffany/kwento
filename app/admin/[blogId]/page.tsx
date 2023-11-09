"use client";

import { Button, Grid, TextInput } from "@mantine/core";
import React from "react";
import { BlogCard } from "../../../components/BlogCard";
import useBlog from "../../../hooks/useBlog";
import axios from "axios";

export default function CreatePage({ blogId }: { blogId: string }) {
  const { blog, mutate } = useBlog(blogId);

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
            required
          ></TextInput>
        </Grid.Col>
      </Grid>

      <Grid>
        {blog.blogCardIds.map((blogCardId) => (
          <BlogCard blogCardId={blogCardId} />
        ))}
      </Grid>

      <Button onClick={addBlogCard} color="navy">
        Add Paragraph
      </Button>
    </>
  );
}
