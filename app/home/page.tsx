"use client";
import { AppShell, Center, Flex, Grid, Paper, Text } from "@mantine/core";
import { COLORS, LESSONS } from "../structure/korean";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@react-hook/media-query";
import CommonHeader from "../../components/CommonHeader";
import { useDisclosure } from "@mantine/hooks";

const LANGUAGES_OFFERED = [
  {
    emoji: "🇰🇷",
    title: "korean",
  },
  {
    emoji: "🇵🇭",
    title: "filipino",
  },
];

export default function Units({ params: { language } }) {
  if (language === "favicon.ico" || language === "favicon.svg") {
    return null;
  }
  const largeScreen = useMediaQuery("(min-width: 56.25em)");
  const router = useRouter();

  const [opened, { toggle }] = useDisclosure();

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
      <Flex direction={"column"}>
        <Center>
          <Text mt={70} fz={36} fw='bold'>
            Learn a language
          </Text>
        </Center>
        <Grid p={20}>
          {LANGUAGES_OFFERED.map((unit, i) => (
            <Grid.Col key={unit.title} span={largeScreen ? 4 : 12}>
              <Paper
                h={150}
                radius='lg'
                bg={COLORS[i % COLORS.length]}
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  router.push(`/${unit.title}`);
                }}
              >
                <Flex
                  direction='column'
                  justify='center'
                  align='center'
                  style={{ height: "100%" }}
                >
                  <Text fw='bold' fz={40}>
                    {unit.emoji}
                  </Text>

                  <Text fw='bold' fz={36}>
                    {unit.title.toUpperCase()}
                  </Text>
                </Flex>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </AppShell>
  );
}
