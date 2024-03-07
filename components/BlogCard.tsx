import { useForm } from "@mantine/form";
import useBlogCard from "../hooks/useBlogCard";
import { Grid, Textarea } from "@mantine/core";
import { BlogCard } from "@prisma/client";
import _ from "lodash";
import { useCallback, useEffect } from "react";
import { IconTrash } from "@tabler/icons-react";

export function BlogCard({
  blogCardId,
  saveBlogCard,
  deleteBlogCard,
}: {
  blogCardId: string;
  saveBlogCard: (
    blogCardId: string,
    blogCard: Pick<BlogCard, "content" | "englishContent">
  ) => void;
  deleteBlogCard: (blogCardId: string) => void;
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
          fw='bold'
          fz='xl'
          size='xl'
          placeholder='Text (in your language)'
          required
          variant='unstyled'
          {...form.getInputProps("text")}
          onChange={(e) => {
            form.setFieldValue("text", e.currentTarget.value);
            debouncedSaveBlogCard(blogCardId, {
              content: e.currentTarget.value,
              englishContent: form.values.englishText,
            });
          }}
          rightSection={
            <IconTrash
              cursor='pointer'
              onClick={() => deleteBlogCard(blogCardId)}
            />
          }
        ></Textarea>
      </Grid.Col>
      <Grid.Col span={6}>
        <Textarea
          fw='bold'
          fz='xl'
          size='xl'
          variant='unstyled'
          placeholder='Text (in English)'
          {...form.getInputProps("englishText")}
          onChange={(e) => {
            form.setFieldValue("englishText", e.currentTarget.value);
            debouncedSaveBlogCard(blogCardId, {
              content: form.values.text,
              englishContent: e.currentTarget.value,
            });
          }}
          required
        ></Textarea>
      </Grid.Col>
    </Grid>
  );
}
