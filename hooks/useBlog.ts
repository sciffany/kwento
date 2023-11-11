import useSWR from "swr";
import { fetcher } from "../lib/utils";
import { Blog, BlogCard } from "@prisma/client";

export default function useBlog(blogId?: string | null) {
  const { data, mutate } = useSWR<Blog & { blogCards: BlogCard[] }>(
    `/api/blogs/${blogId}`,
    fetcher
  );

  return {
    blog: data,
    mutate,
  };
}
