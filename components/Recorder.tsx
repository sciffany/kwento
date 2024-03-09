import { ActionIcon } from "@mantine/core";
import { useEffect, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

export const Recorder = () => {
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

          <ActionIcon bg='green' w={60} onClick={() => {}}>
            Upload
          </ActionIcon>
        </div>
      )}
    />
  );
};
