import { ActionIcon } from "@mantine/core";
import { useEffect, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { uploadMediaToGCS } from "../lib/upload";
import { useParams } from "next/navigation";

export const Recorder = ({ rowData }) => {
  const params = useParams();
  const [audio, setAudio] = useState<HTMLAudioElement | null | undefined>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio?.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  }, [audio]);

  return (
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          {status === "recording" ? (
            <ActionIcon
              bg='#000000'
              onClick={() => {
                stopRecording();
              }}
            >
              🟥
            </ActionIcon>
          ) : (
            <ActionIcon bg='#000000' onClick={startRecording}>
              🔴
            </ActionIcon>
          )}
          {isPlaying ? (
            <ActionIcon
              onClick={() => {
                audio?.pause();
                setIsPlaying(false);
              }}
            >
              ⏸️
            </ActionIcon>
          ) : (
            <ActionIcon
              onClick={() => {
                if (!mediaBlobUrl) return;
                const newAudio = new Audio(mediaBlobUrl);
                newAudio?.play();
                setAudio(newAudio);
                setIsPlaying(true);
              }}
            >
              ▶️
            </ActionIcon>
          )}
          <ActionIcon
            onClick={async () => {
              if (!mediaBlobUrl) return;

              const response = await fetch(mediaBlobUrl);
              const blob = await response.blob();
              const file = new File([blob], "audio.wav", { type: "audio/wav" });

              const voiceUrl = await uploadMediaToGCS(file);

              return await fetch(`/api/blogs/${params.blogId}`, {
                method: "PUT",
                body: JSON.stringify({
                  updatedRows: [
                    {
                      id: rowData.id,
                      voiceUrl,
                    },
                  ],
                }),
              });
            }}
            bg='green'
            w={60}
          >
            Upload
          </ActionIcon>
        </div>
      )}
    />
  );
};
