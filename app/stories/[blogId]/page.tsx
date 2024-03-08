"use client";
import {
  Card,
  Center,
  Group,
  Image,
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
      <Paper m='xl' withBorder w='100%' p='xl'>
        <Group>
          <Image
            src='https://www.aboutfilipinofood.com/wp-content/uploads/filipino-ice-cream-cart-sorbetero.jpg'
            alt='Image loads here'
            w={400}
          />
          <Stack>
            <Title>Lesson 1 - My First Ice Cream</Title>
            <Group>
              <div>
                <Text fz={28} fw='bold' component='span' c='blue'>
                  <span>
                    {words.map((word) => (
                      <Highlight key={word} word={word}></Highlight>
                    ))}
                  </span>
                </Text>
                <Text fz='xl'>How much is the ice cream?</Text>
              </div>
              <Text fz={28} c='blue' style={{ cursor: "pointer" }}>
                ▶️
              </Text>
            </Group>

            <Group>
              <div>
                <Text fz={28} fw='bold' component='span' c='blue'>
                  <span>
                    {"Sampung piso lang po!".split(" ").map((word) => (
                      <Highlight key={word} word={word}></Highlight>
                    ))}
                  </span>
                </Text>
                <Text fz='xl'>Ten pesos only!</Text>
              </div>
              <Text fz={28} c='blue' style={{ cursor: "pointer" }}>
                ▶️
              </Text>
            </Group>
          </Stack>
        </Group>
      </Paper>
    </Center>
  );
}
