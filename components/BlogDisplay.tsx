import { Card, Image, Text } from "@mantine/core";
import { Blog, BlogCard } from "@prisma/client";

export default function BlogDisplay({
  blog,
  href,
}: {
  blog: Blog & { blogCards: BlogCard[] };
  href: string;
}) {
  return (
    <Card
      radius={20}
      key={blog.id}
      withBorder
      padding='xl'
      component='a'
      href={href}
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
        {blog.blogCards?.[0]?.content} ({blog.blogCards?.[0]?.englishContent})
      </Text>
    </Card>
  );
}
