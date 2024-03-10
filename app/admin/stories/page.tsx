"use client";

import { SimpleGrid } from "@mantine/core";
import useBlogs from "../../../hooks/useBlogs";
import BlogDisplay from "../../../components/BlogDisplay";
import { useSession } from "next-auth/react";
import { useMediaQuery } from "@mantine/hooks";

export default function () {
  const { data: session, status } = useSession();
  const { blogs } = useBlogs({
    userEmail:
      status === "authenticated" ? (session?.user?.email as string) : undefined,
    userId: undefined,
  });

  const mobile = useMediaQuery("(max-width: 768px)");

  return (
    <SimpleGrid cols={mobile ? 1 : 3} spacing='md'>
      {blogs?.map((blog) => (
        <BlogDisplay blog={blog} href={`/admin/stories/${blog.id}`} />
      ))}
    </SimpleGrid>
  );
}
