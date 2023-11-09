import { BlogCardType } from "@prisma/client";
import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const blogId = searchParams.get("blogId");

  if (!blogId) {
    return Response.redirect("/400");
  }

  const blogCard = await prisma.blogCard.create({
    data: {
      blogId,
      content: "",
      englishContent: "",
      blogCardType: BlogCardType.TEXT,
    },
  });

  return Response.json({ data: blogCard });
}
