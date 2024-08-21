"use client";

import {
  ActionIcon,
  AppShell,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { LESSONS } from "../../../../../structure/korean";
import Sentence from "../../../../../../components/Sentence";
import { useMediaQuery } from "@react-hook/media-query";
import CommonHeader from "../../../../../../components/CommonHeader";
import { useDisclosure } from "@mantine/hooks";

export default function Lesson({ params: { lessonNum, language, unitNum } }) {
  if (language === "favicon.ico" || language === "favicon.svg") {
    return null;
  }
  const largeScreen = useMediaQuery("(min-width: 56.25em)");

  lessonNum = parseInt(lessonNum);
  unitNum = parseInt(unitNum);

  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();

  const languageLessons = LESSONS[language];
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding='md'
    >
      <CommonHeader />

      <Box mt={50} p={largeScreen ? 50 : 30}>
        <Text fz={largeScreen ? 50 : 30}>
          {languageLessons[unitNum - 1].lessons[lessonNum - 1].title}
        </Text>
        <Flex direction={"column"} columnGap={largeScreen ? 50 : 10}>
          {languageLessons[unitNum - 1].lessons[lessonNum - 1].sentences.map(
            (sentence, i) => (
              <>
                <Sentence language={language} parts={sentence.parts} i={i} />
                <Divider
                  mt='lg'
                  style={{
                    borderTopStyle: "dashed",
                    borderTopWidth: "2px",
                  }}
                />
              </>
            )
          )}
        </Flex>
        <Flex direction='column' rowGap={30}>
          <Center mt='lg'>
            <Flex columnGap={10}>
              <ActionIcon
                onClick={() => {
                  if (lessonNum > 1) {
                    router.push(
                      `/${language}/units/${unitNum}/lessons/${lessonNum - 1}`
                    );
                  }
                }}
              >
                <IconArrowLeft />
              </ActionIcon>
              <ActionIcon
                onClick={() => {
                  if (lessonNum < languageLessons[unitNum - 1].lessons.length) {
                    router.push(
                      `/${language}/units/${unitNum}/lessons/${lessonNum + 1}`
                    );
                  } else {
                    if (languageLessons[unitNum - 1].blogId) {
                      router.push(
                        `/stories/${languageLessons[unitNum - 1].blogId}`
                      );
                    } else {
                      router.push(`/${language}`);
                    }
                  }
                }}
              >
                <IconArrowRight />
              </ActionIcon>
            </Flex>
          </Center>
          <Center>
            <Button
              w='fit-content'
              bg='blue'
              onClick={() => {
                router.push(`/${language}`);
              }}
            >
              Back
            </Button>
          </Center>
        </Flex>
      </Box>
    </AppShell>
  );
}
