import useSWR from "swr";
import { fetcher } from "../lib/utils";

export default function useBlog(blogId?: string | null) {
  const { data, mutate } = useSWR(`/api/blogs/${blogId}`, fetcher);

  return {
    blog: data,
    mutate,
  };
}
