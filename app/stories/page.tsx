"use client";

import { Box, Card, Grid, Image, SimpleGrid, Text } from "@mantine/core";
import GenericHeader from "../../components/HeaderMenu";
import useBlogs from "../../hooks/useBlogs";
import BlogDisplay from "../../components/BlogDisplay";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export default function () {
  const { blogs } = useBlogs({});

  const mobile = useMediaQuery("(max-width: 768px)");

  return (
    <GenericHeader>
      <Box m={20}>
        <SimpleGrid cols={mobile ? 1 : 3} spacing={20}>
          {blogs?.map((blog) => (
            <BlogDisplay blog={blog} href={`/stories/${blog.id}`} />
          ))}
        </SimpleGrid>
      </Box>
    </GenericHeader>
  );
}
