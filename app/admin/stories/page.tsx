"use client";

import { Box, Card, Grid, Image, SimpleGrid, Text } from "@mantine/core";
import useBlogs from "../../../hooks/useBlogs";
import BlogDisplay from "../../../components/BlogDisplay";
import { useSession } from "next-auth/react";

export default function () {
  const { data: session, status } = useSession();
  const { blogs } = useBlogs({
    userEmail:
      status === "authenticated" ? (session?.user?.email as string) : undefined,
    userId: undefined,
  });

  return (
    <SimpleGrid cols={3} spacing='md'>
      {blogs?.map((blog) => (
        <BlogDisplay blog={blog} href={`/admin/stories/${blog.id}`} />
      ))}
    </SimpleGrid>
  );
}
