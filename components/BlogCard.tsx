import { useForm } from "@mantine/form";
import useBlogCard from "../hooks/useBlogCard";
import { Grid, Textarea } from "@mantine/core";
import { BlogCard } from "@prisma/client";
import _ from "lodash";
import { useCallback, useEffect } from "react";

export function BlogCard({
  blogCardId,
  saveBlogCard,
}: {
  blogCardId: string;
  saveBlogCard: (
    blogCardId: string,
    blogCard: Pick<BlogCard, "content" | "englishContent">
  ) => void;
}) {
  const { blogCard } = useBlogCard(blogCardId);

  const form = useForm({
    initialValues: {
      text: "",
      englishText: "",
    },
  });

  useEffect(() => {
    if (blogCard) {
      console.log(blogCard);
      form.setValues({
        text: blogCard.content,
        englishText: blogCard.englishContent,
      });
    }
  }, [blogCard]);

  const debouncedSaveBlogCard = useCallback(_.debounce(saveBlogCard, 1000), []);

  return (
    <Grid mb={10}>
      <Grid.Col span={6}>
        <Textarea
          fw="bold"
          placeholder="Text (in your language)"
          required
          {...form.getInputProps("text")}
          onChange={(e) => {
            form.setFieldValue("text", e.currentTarget.value);
            debouncedSaveBlogCard(blogCardId, {
              content: e.currentTarget.value,
              englishContent: form.values.englishText,
            });
          }}
          // rightSection={<IconTrash onClick={}/>}
        ></Textarea>
      </Grid.Col>
      <Grid.Col span={6}>
        <Textarea
          fw="bold"
          placeholder="Text (in English)"
          {...form.getInputProps("englishText")}
          required
        ></Textarea>
      </Grid.Col>
    </Grid>
  );
}
