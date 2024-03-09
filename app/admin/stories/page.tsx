"use client";

import { Box, Card, Grid, Image, SimpleGrid, Text } from "@mantine/core";
import GenericHeader from "../../../components/HeaderMenu";
import useBlogs from "../../../hooks/useBlogs";

export default function () {
  const { blogs } = useBlogs();

  console.log(blogs);

  return (
    <SimpleGrid cols={3} spacing='md'>
      {blogs?.map((blog) => (
        <Card
          key={blog.id}
          withBorder
          padding='xl'
          component='a'
          href={`/admin/stories/${blog.id}`}
        >
          {blog.imageUrl ? (
            <Card.Section>
              <Image src={blog.imageUrl} alt={blog.title} />
            </Card.Section>
          ) : (
            <Card.Section c='blue' w={300} h={160} />
          )}
          <Text fw={500} size='lg' mt='md'>
            {blog?.title}
          </Text>

          <Text mt='xs' c='dimmed' size='sm'>
            {blog.blogCards?.[0]?.content}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
