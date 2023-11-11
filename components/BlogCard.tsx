import useSWR from "swr";
import useBlogCard from "../hooks/useBlogCard";
import { Grid, TextInput, Textarea } from "@mantine/core";

export function BlogCard({ blogCardId }: { blogCardId: string }) {
  const { blogCard } = useBlogCard(blogCardId);

  return (
    <Grid mb={6}>
      <Grid.Col span={6}>
        <Textarea
          multiline={true}
          fw="bold"
          size="md"
          placeholder="Content (in your language)"
          required
        ></Textarea>
      </Grid.Col>
      <Grid.Col span={6}>
        <Textarea
          fw="bold"
          size="md"
          placeholder="Content (in English)"
          required
        ></Textarea>
      </Grid.Col>
    </Grid>
  );
}
