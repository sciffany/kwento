import { getTranslation } from "../../../../lib/translation";

export async function GET(req: Request, { params: { word } }) {
  const translation = await getTranslation(word);
  return Response.json({ word: translation });
}
