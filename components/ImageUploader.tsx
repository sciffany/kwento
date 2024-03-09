import { Card, Center, Group, Image, Paper, Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";

export default function ImageUploader({
  onDrop,
  image,
}: {
  onDrop: DropzoneProps["onDrop"];
  image: File | null;
}) {
  return (
    <Card>
      <Dropzone
        onDrop={(files) => {
          onDrop(files);
        }}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          justify='center'
          gap='xl'
          mih={270}
          style={{ pointerEvents: "none" }}
        >
          {!image ? (
            <>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
              <div>
                <Text size='xl' inline>
                  Drag images here or click to select files
                </Text>
                <Text size='sm' c='dimmed' inline mt={7}>
                  Attach as many files as you like, each file should not exceed
                  5mb
                </Text>
              </div>
            </>
          ) : (
            <Center>
              <Paper>
                <Image
                  radius={20}
                  src={URL.createObjectURL(image)}
                  alt='Image loads here'
                  h={270}
                  w={400}
                />
              </Paper>
            </Center>
          )}
        </Group>
      </Dropzone>
    </Card>
  );
}
