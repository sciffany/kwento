import { ActionIcon, Center, Flex, Paper, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { COLORS } from "../app/structure/korean";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowsShuffle,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";

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
  const largeScreen = useMediaQuery("(min-width: 56.25em)");
  const [selected, setSelected] = useState<number[]>(
    Array(parts.length).fill(0)
  );
  const hasChoices = useMemo<boolean>(() => parts.some(part => part.choices), [parts]);

  const playSentence = () => {
    const randomisedChoices = selected.map((_, j) => {
      const choices = parts[j].choices;
      if (!choices) {
        return 0;
      }

      return Math.floor(Math.random() * choices.length || 0);
    });
    setSelected(randomisedChoices);
    playSound(
      parts
        .map((part, j) =>
          part.choices ? part.choices[randomisedChoices[j]].text : part.text
        )
        .join(" "),
      language
    );
  };

  return (
    <Flex
      direction={"row"}
      wrap='wrap'
      columnGap={largeScreen ? 30 : 10}
      align='center'
    >
      {parts.map((part, j) =>
        part.choices ? (
          <Paper
            mt={20}
            radius={largeScreen ? 30 : 10}
            bg={COLORS[(i + j) % COLORS.length]}
            p={largeScreen ? 30 : 10}
            style={{
              cursor: "pointer",
            }}
          >
            <Flex direction={"row"} align='center' columnGap={10}>
              {part.choices.length > 1 && (
                <Flex columnGap={10}>
                  {selected[j] > 0 && (
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
                  )}
                </Flex>
              )}
              <Center
                onClick={async () => {
                  playSound(
                    part.choices ? part.choices[selected[j]].text : part.text,
                    language
                  );
                }}
              >
                <Flex direction='column' align='center'>
                  <Text fz={largeScreen ? 50 : 20} fw='bold'>
                    {part.choices[selected[j]].text}
                  </Text>
                  {part.choices[selected[j]].translation}
                </Flex>
              </Center>
              {part.choices.length > 1 &&
                selected[j] < part.choices?.length - 1 && (
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
            radius={largeScreen ? 30 : 10}
            bg={COLORS[(i + j) % COLORS.length]}
            p={largeScreen ? 30 : 10}
            style={{
              cursor: "pointer",
            }}
            onClick={async () => {
              playSound(part.text, language);
            }}
          >
            <Flex direction={"row"}>
              <Center>
                <Flex direction='column' align='center'>
                  <Text fz={largeScreen ? 50 : 20} fw='bold'>
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
          playSound(
            parts
              .map((part, j) =>
                part.choices ? part.choices[selected[j]].text : part.text
              )
              .join(" "),
            language
          );
        }}
      >
        <IconPlayerPlayFilled />
      </Text>

      {hasChoices &&
        <Text
          fz={50}
          style={{
            cursor: "pointer",
          }}
          onClick={playSentence}
        >
          <IconArrowsShuffle />
        </Text>}
    </Flex>
  );
}

async function playSound(text?: string, language?: string) {
  const res = await fetch(`/api/tts/`, {
    method: "POST",
    body: JSON.stringify({
      text,
      language,
    }),
    cache: "force-cache",
  });

  // Stream audio received from the server
  const audio = new Audio(URL.createObjectURL(await res.blob()));
  audio.play();
}
