import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

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
            const res = await fetch(`/api/translate/${word}`, {
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
