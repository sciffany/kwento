import { getTranslation } from "../../../lib/translation";

export async function POST(req: Request) {
  const json = await req.json();

  const translation = await getTranslation(json.word);
  return Response.json({ word: translation });
}
