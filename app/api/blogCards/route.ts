import { BlogCardType } from "@prisma/client";
import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
  const { blogId } = await request.json();

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

  return Response.json(blogCard);
}
