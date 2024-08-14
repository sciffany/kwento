const projectId = "sciffany";

import textToSpeech from "@google-cloud/text-to-speech";

// Creates a client
const client = new textToSpeech.TextToSpeechClient({
  projectId: projectId,
  credentials: {
    client_email: process.env.GCLOUD_EMAIL,
    private_key: process.env.GCLOUD_KEY?.replace(/\\n/g, "\n"),
  },
});

export async function POST(req: Request) {
  const json = await req.json();

  const request = {
    input: { text: json.text },
    voice: {
      languageCode: LANGUAGE_TO_CODE[json.language],
      ssmlGender: "NEUTRAL" as any,
    },
    audioConfig: { audioEncoding: "MP3" as any },
  };

  const [response] = await client.synthesizeSpeech(request);

  // Stream the audio back to the client

  return new Response(response.audioContent, {
    headers: {
      "Content-Type": "audio/mpeg",
    },
  });
}

export const LANGUAGE_TO_CODE = {
  korean: "ko",
  filipino: "fil",
};
