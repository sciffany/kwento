"use client";
import { Center, Flex, Grid, Paper, Text } from "@mantine/core";
import { COLORS, LESSONS } from "../structure/korean";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@react-hook/media-query";

export default function Units({ params: { language } }) {
  const matches = useMediaQuery("(min-width: 56.25em)");
  const languageLessons = LESSONS[language];
  const router = useRouter();

  return (
    <Flex direction={"column"}>
      <Center>
        <Text fz={36} fw='bold'>
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
                <Text fw='bold' fz={36}>
                  {unit.title}
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}
