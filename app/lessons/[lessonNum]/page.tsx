"use client";

import {
  ActionIcon,
  Box,
  Center,
  Divider,
  Flex,
  Pagination,
  Paper,
  Text,
} from "@mantine/core";
import { COLORS, LESSONS } from "../../structure/lessons";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Phrase from "../../../components/Phrase";
import Sentence from "../../../components/Sentence";

export default function Lesson({ params: { lessonNum } }) {
  const router = useRouter();
  return (
    <Box p={50}>
      <Text fz={50}>{LESSONS[lessonNum - 1].title}</Text>

      <Flex direction={"column"} columnGap={50}>
        {LESSONS[lessonNum - 1].sentences.map((sentence, i) => (
          <>
            <Sentence parts={sentence.parts} i={i} />
            <Divider mt='lg' style={{ borderTopStyle: "dashed" }} />
          </>
        ))}
      </Flex>
      <Center mt='lg'>
        <Flex columnGap={10}>
          <ActionIcon
            onClick={() => {
              if (parseInt(lessonNum) > 1) {
                router.push(`/lessons/${parseInt(lessonNum) - 1}`);
              }
            }}
          >
            <IconArrowLeft />
          </ActionIcon>
          <ActionIcon
            onClick={() => {
              if (parseInt(lessonNum) < LESSONS.length) {
                router.push(`/lessons/${parseInt(lessonNum) + 1}`);
              }
            }}
          >
            <IconArrowRight />
          </ActionIcon>
        </Flex>
      </Center>
    </Box>
  );
}
