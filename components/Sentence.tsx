import { ActionIcon, Center, Flex, Paper, Text } from "@mantine/core";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { COLORS } from "../app/structure/korean";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";

export default function Sentence({
  parts,
  i,
  language,
}: {
  language: string;
  parts: {
    text?: string;
    translation?: string;
    choices?: {
      text: string;
      translation: string;
    }[];
  }[];
  i: number;
}) {
  const matches = useMediaQuery("(min-width: 56.25em)");

  const [selected, setSelected] = useState<number[]>(
    Array(parts.length).fill(0)
  );

  return (
    <Flex direction={"row"} wrap='wrap' columnGap={50} align='center'>
      {parts.map((part, j) =>
        part.choices ? (
          <Paper
            mt={20}
            radius={50}
            bg={COLORS[(i + j) % COLORS.length]}
            p={50}
            style={{
              cursor: "pointer",
            }}
          >
            <Flex direction={"row"} align='center' columnGap={10}>
              {part.choices.length > 1 && (
                <Flex columnGap={10}>
                  <ActionIcon
                    color={"black"}
                    onClick={() => {
                      const newSelected = [...selected];
                      if (newSelected[j] > 0) {
                        newSelected[j]--;
                        setSelected(newSelected);
                      }
                    }}
                  >
                    <IconArrowLeft />
                  </ActionIcon>
                </Flex>
              )}
              <Center
                onClick={async () => {
                  const res = await fetch(`/api/tts/`, {
                    method: "POST",
                    body: JSON.stringify({
                      text: part.choices?.[selected[j]].text,
                      language,
                    }),
                    cache: "force-cache",
                  });

                  // Stream audio received from the server
                  const audio = new Audio(
                    URL.createObjectURL(await res.blob())
                  );
                  audio.play();
                }}
              >
                <Flex direction='column' align='center'>
                  <Text fz={matches ? 70 : 30} fw='bold'>
                    {part.choices[selected[j]].text}
                  </Text>
                  {part.choices[selected[j]].translation}
                </Flex>
              </Center>
              {part.choices.length > 1 && (
                <ActionIcon
                  color={"black"}
                  onClick={() => {
                    const newSelected = [...selected];
                    if (
                      part.choices?.length &&
                      newSelected[j] < part.choices?.length - 1
                    ) {
                      newSelected[j]++;
                      setSelected(newSelected);
                    }
                  }}
                >
                  <IconArrowRight />
                </ActionIcon>
              )}
            </Flex>
          </Paper>
        ) : (
          <Paper
            mt={20}
            radius={50}
            bg={COLORS[(i + j) % COLORS.length]}
            p={50}
            style={{
              cursor: "pointer",
            }}
            onClick={async () => {
              const res = await fetch(`/api/tts/`, {
                method: "POST",
                body: JSON.stringify({
                  text: part.text,
                  language,
                }),
                cache: "force-cache",
              });

              // Stream audio received from the server
              const audio = new Audio(URL.createObjectURL(await res.blob()));
              audio.play();
            }}
          >
            <Flex direction={"row"}>
              <Center>
                <Flex direction='column' align='center'>
                  <Text fz={matches ? 70 : 30} fw='bold'>
                    {part.text}
                  </Text>
                  {part.translation}
                </Flex>
              </Center>
            </Flex>
          </Paper>
        )
      )}

      <Text
        fz={50}
        style={{
          cursor: "pointer",
        }}
        onClick={async () => {
          const res = await fetch(`/api/tts/`, {
            method: "POST",
            body: JSON.stringify({
              text: parts
                .map((part, j) =>
                  part.choices ? part.choices[selected[j]].text : part.text
                )
                .join(" "),
              language: language,
            }),
            cache: "force-cache",
          });

          // Stream audio received from the server
          const audio = new Audio(URL.createObjectURL(await res.blob()));
          audio.play();
        }}
      >
        ▶️
      </Text>
    </Flex>
  );
}
