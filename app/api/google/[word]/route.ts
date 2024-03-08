import { getTranslation } from "../../../../lib/google";

export async function GET(req: Request, { params: { word } }) {
  const translation = await getTranslation(word);
  return Response.json({ word: translation });
}
