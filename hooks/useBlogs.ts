import useSWR from "swr";
import { fetcher } from "../lib/utils";
import { Blog, BlogCard } from "@prisma/client";

export default function useBlogs({
  userEmail,
  userId,
}: {
  userEmail?: string;
  userId?: string;
}) {
  const { data, mutate } = useSWR<(Blog & { blogCards: BlogCard[] })[]>(
    `/api/blogs?userId=${userId ?? ""}&userEmail=${userEmail ?? ""}`,
    fetcher
  );

  return {
    blogs: data,
    mutate,
  };
}
