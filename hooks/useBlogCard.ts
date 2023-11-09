import useSWR from "swr";
import { fetcher } from "../lib/utils";

export default function useBlogCard(blogCardId: string) {
  const { data } = useSWR(`/api/blogCards/${blogCardId}`, fetcher);

  return {
    blogCard: data,
  };
}
