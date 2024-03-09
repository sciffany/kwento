"use client";

import { Box, Card, Grid, Image, SimpleGrid, Text } from "@mantine/core";
import useBlogs from "../../../hooks/useBlogs";
import BlogDisplay from "../../../components/BlogDisplay";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function () {
  const { data: session, status } = useSession();
  const { blogs } = useBlogs({
    userEmail:
      status === "authenticated" ? (session?.user?.email as string) : undefined,
    userId: undefined,
  });

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <SimpleGrid cols={isMobile ? 1 : 3} spacing='md'>
      {blogs?.map((blog) => (
        <BlogDisplay blog={blog} href={`/admin/stories/${blog.id}`} />
      ))}
    </SimpleGrid>
  );
}
