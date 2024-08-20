"use client";
import { AppShell, Center, Flex, Grid, Paper, Text } from "@mantine/core";
import { COLORS, LESSONS } from "../structure/korean";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@react-hook/media-query";
import CommonHeader from "../../components/CommonHeader";
import { useDisclosure } from "@mantine/hooks";

export default function Units({ params: { language } }) {
  if (language === "favicon.ico" || language === "favicon.svg") {
    return null;
  }
  const matches = useMediaQuery("(min-width: 56.25em)");
  const languageLessons = LESSONS[language];
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
      {" "}
      <CommonHeader />
      <Flex direction={"column"}>
        <Center>
          <Text mt={70} fz={36} fw='bold'>
            {language.toUpperCase()}
          </Text>
        </Center>
        <Grid p={20}>
          {languageLessons.map((unit, i) => (
            <Grid.Col key={unit.title} span={matches ? 4 : 12}>
              <Paper
                h={150}
                radius='lg'
                bg={COLORS[i % COLORS.length]}
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  router.push(`/${language}/units/${i + 1}/lessons/1`);
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
                  <Text ta='center' fw='bold' fz={36}>
                    {unit.title}
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
