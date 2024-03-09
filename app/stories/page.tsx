"use client";

import { Box, Card, Grid, Image, SimpleGrid, Text } from "@mantine/core";
import GenericHeader from "../../components/HeaderMenu";
import useBlogs from "../../hooks/useBlogs";
import BlogDisplay from "../../components/BlogDisplay";
import { useEffect, useState } from "react";

export default function () {
  const { blogs } = useBlogs({});

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
    <GenericHeader>
      <Box m={20}>
        <SimpleGrid cols={isMobile ? 1 : 3} spacing={20}>
          {blogs?.map((blog) => (
            <BlogDisplay blog={blog} href={`/stories/${blog.id}`} />
          ))}
        </SimpleGrid>
      </Box>
    </GenericHeader>
  );
}
