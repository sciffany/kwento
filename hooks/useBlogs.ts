import useSWR from "swr";
import { fetcher } from "../lib/utils";
import { Blog, BlogCard } from "@prisma/client";

export default function useBlogs() {
  const { data, mutate } = useSWR<(Blog & { blogCards: BlogCard[] })[]>(
    `/api/blogs`,
    fetcher
  );

  return {
    blogs: data,
    mutate,
  };
}
