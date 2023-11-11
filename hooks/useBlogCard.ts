import useSWR from "swr";
import { fetcher } from "../lib/utils";

export default function useBlogCard(blogCardId: string) {
  const { data, mutate } = useSWR(`/api/blogCards/${blogCardId}`, fetcher);

  return {
    blogCard: data,
    mutate,
  };
}
