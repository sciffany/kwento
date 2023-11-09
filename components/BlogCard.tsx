import useSWR from "swr";
import useBlogCard from "../hooks/useBlogCard";
import { Grid, TextInput } from "@mantine/core";

export function BlogCard({ blogCardId }: { blogCardId: string }) {
  const { blogCard } = useBlogCard(blogCardId);

  return (
    <Grid.Col span={6}>
      <TextInput
        fw="bold"
        fz="xl"
        width="full"
        size="xl"
        variant="unstyled"
        placeholder="content (in your language)"
        required
      ></TextInput>
    </Grid.Col>
  );
}
