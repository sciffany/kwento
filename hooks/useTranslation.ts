import useSWR from "swr";
import { fetcher } from "../lib/utils";

export default function useTranslation(word: string) {
  const { data, mutate } = useSWR<string>(`/api/google/${word}`, fetcher);

  return {
    data,
    mutate,
  };
}
