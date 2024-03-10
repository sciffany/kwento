import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { BlogCardType } from "@prisma/client";

export type BlogData = {
  title: string;
  data: {
    id: string;
    text: string;
    subtext: string;
    explanation: string;
  }[];
  imageUrl: string;
};

export async function POST(req: Request) {
  const data = (await req.json()) as BlogData;

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const newBlog = await prisma.blog.create({
    data: {
      title: data.title,
      englishTitle: "",
      user: {
        connect: {
          email: email as string,
        },
      },
      imageUrl: data.imageUrl,
      languageCode: "fil",
      blogCards: {
        create: data.data.map((card) => ({
          content: card.text,
          englishContent: card.subtext,
          blogCardType: BlogCardType.TEXT,
          explanation: card.explanation,
        })),
      },
    },
  });

  return Response.json({ data: newBlog });
}

export async function GET(req: Request) {
  const url = new URL(req.url);

  let email = url.searchParams.get("userEmail");
  if (email === "") {
    email = null;
  }
  let userId = url.searchParams.get("userId");
  if (userId === "") {
    userId = null;
  }

  const blogs = await prisma.blog.findMany({
    where: userId
      ? {
          user: {
            id: userId,
          },
        }
      : email
      ? {
          user: {
            email: email,
          },
        }
      : {},
    include: {
      blogCards: {
        take: 1,
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return Response.json(blogs);
}
