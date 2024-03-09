"use client";
import {
  ActionIcon,
  Card,
  Center,
  Flex,
  Group,
  Image,
  Paper,
  Popover,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
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
              <Image
                src={blog?.imageUrl}
                alt='Image loads here'
                w='70%'
                radius={20}
              />
            </Center>
            <Title>{blog?.title}</Title>
            <Stack gap={70}>
              {blog?.blogCards.map((card) => (
                <Group>
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
                  <Text fz={28} c='blue' style={{ cursor: "pointer" }}>
                    ▶️
                  </Text>
                  <Popover>
                    <Popover.Target>
                      <ActionIcon radius={100}>i</ActionIcon>
                    </Popover.Target>
                    <Popover.Dropdown w={300}>
                      "po" is usually placed at the end of the sentence, or the
                      second term, to show respect to the person you are talking
                      to.
                    </Popover.Dropdown>
                  </Popover>
                </Group>
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Center>
    </GenericHeader>
  );
}
