import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const json = await req.json();
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "echo",
    input: json.text,
  });

  // Return the audio file to client
  const buffer = Buffer.from(await mp3.arrayBuffer());

  return new Response(buffer, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Disposition": "attachment; filename=tts.mp3",
    },
  });
}
