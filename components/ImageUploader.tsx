import { Card, Center, Group, Image, Paper, Text, rem } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

export default function ImageUploader({
  onDrop,
  image,
  originalImageUrl,
}: {
  onDrop: DropzoneProps["onDrop"];
  image: File | null;
  originalImageUrl?: string | null;
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
          {image ? (
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
          ) : originalImageUrl ? (
            <Center>
              <Paper>
                <Image
                  radius={20}
                  src={originalImageUrl}
                  alt='Image loads here'
                  h={270}
                  w={400}
                />
              </Paper>
            </Center>
          ) : (
            <Paper withBorder radius={20} h={270} w={400}>
              <Center h='100%'>
                <IconUpload
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-blue-6)",
                  }}
                  stroke={1.5}
                />
                <div>
                  <Text size='lg' inline>
                    Drag images here or click to select files
                  </Text>
                </div>
              </Center>
            </Paper>
          )}
        </Group>
      </Dropzone>
    </Card>
  );
}
