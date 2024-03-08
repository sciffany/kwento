"use client";
import {
  Card,
  Center,
  Group,
  Paper,
  Popover,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const words = "Magkano po ang sorbetes?".split(" ");

export function Highlight({ word }: { word: string }) {
  const [opened, { close, open }] = useDisclosure(false);
  const [translatedWord, setTranslatedWord] = useState(word);

  return (
    <Popover
      trapFocus
      width={200}
      position='bottom'
      withArrow
      shadow='md'
      opened={opened}
    >
      <Popover.Target>
        <span
          onMouseEnter={async () => {
            const res = await fetch(`/api/google/${word}`, {
              cache: "force-cache",
            });
            const data = await res.json();
            setTranslatedWord(data.word);
            open();
          }}
          onMouseLeave={close}
        >
          {word}{" "}
        </span>
      </Popover.Target>
      <Popover.Dropdown>
        <Text>{translatedWord}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default function Story() {
  return (
    <Center>
      <Paper m='xl' withBorder w={1200} p='xl'>
        <Center>
          <Stack>
            <Title>Ang Sorbetes</Title>
            <Group>
              <div>
                <Title c='blue' fz={28}>
                  <span>
                    {words.map((word) => (
                      <Highlight key={word} word={word}></Highlight>
                    ))}
                  </span>
                </Title>
                <Text fz='xl'>How much is the ice cream?</Text>
              </div>
              <Text fz={28} c='gray' style={{ cursor: "pointer" }}>
                ▶️
              </Text>
            </Group>
          </Stack>
        </Center>
      </Paper>
    </Center>
  );
}
