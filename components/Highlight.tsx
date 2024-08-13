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
          style={{ cursor: "pointer" }}
          onClick={async () => {
            if (opened) {
              close();
              return;
            }
            const res = await fetch(`/api/translate/`, {
              method: "POST",
              body: JSON.stringify({ word: word.toLowerCase() }),
              cache: "force-cache",
            });
            const data = await res.json();
            setTranslatedWord(data.word);
            open();
          }}
        >
          {word}{" "}
        </span>
      </Popover.Target>
      <Popover.Dropdown>
        <>
          <Text>
            {word} ({translatedWord})
            <Text
              onClick={async () => {
                const res = await fetch(`/api/tts/`, {
                  method: "POST",
                  body: JSON.stringify({
                    text: word,
                  }),
                  cache: "force-cache",
                });

                // Stream audio received from the server
                const audio = new Audio(URL.createObjectURL(await res.blob()));
                audio.play();
              }}
              fz={28}
              c='blue'
              style={{ cursor: "pointer" }}
            >
              ▶️
            </Text>
          </Text>
        </>
      </Popover.Dropdown>
    </Popover>
  );
}
