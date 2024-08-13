"use client";
import {
  ActionIcon,
  Center,
  Group,
  Image,
  Paper,
  Popover,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import GenericHeader from "../../../components/HeaderMenu";
import useBlog from "../../../hooks/useBlog";
import { useParams } from "next/navigation";
import { Highlight } from "../../../components/Highlight";

export default function Story() {
  const params = useParams();
  const { blog } = useBlog(params.blogId as string);
  return (
    <GenericHeader>
      <Center>
        <Paper m='xl' withBorder w='100%' p='xl'>
          <Stack align='center' w='100%'>
            <Center>
              {!!blog?.imageUrl && (
                <Image
                  src={blog?.imageUrl}
                  alt='Image loads here'
                  w='70%'
                  radius={20}
                />
              )}
            </Center>
            <Title>{blog?.title}</Title>
            <Stack gap={70}>
              {blog?.blogCards.map((card) => (
                <Group key={blog.id}>
                  <div>
                    <Text fz={24} fw='bold' component='span' c='blue'>
                      <span>
                        {card.content.split(" ").map((word) => (
                          <Highlight key={word} word={word}></Highlight>
                        ))}
                      </span>
                    </Text>
                    <Text fz='xl'>{card.englishContent}</Text>
                  </div>
                  <Text
                    onClick={async () => {
                      const res = await fetch(`/api/tts/`, {
                        method: "POST",
                        body: JSON.stringify({
                          text: card.content,
                        }),
                        cache: "force-cache",
                      });

                      // Stream audio received from the server
                      const audio = new Audio(
                        URL.createObjectURL(await res.blob())
                      );
                      audio.play();
                    }}
                    fz={28}
                    c='blue'
                    style={{ cursor: "pointer" }}
                  >
                    ▶️
                  </Text>
                  {card?.explanation && (
                    <Popover>
                      <Popover.Target>
                        <ActionIcon radius={100}>i</ActionIcon>
                      </Popover.Target>
                      <Popover.Dropdown w={300}>
                        {card?.explanation ?? ""}
                      </Popover.Dropdown>
                    </Popover>
                  )}
                </Group>
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Center>
    </GenericHeader>
  );
}
