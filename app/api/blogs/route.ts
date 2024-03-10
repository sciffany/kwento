import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { BlogCardType } from "@prisma/client";

export type BlogData = {
  title: string;
  blogCardSequence: string[];
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
      blogCardSequence: data.blogCardSequence,
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
      },
    },
  });

  const blogCards = await Promise.all(
    blogs.map(async (blog) => {
      const card = await prisma.blogCard.findUnique({
        where: {
          id: blog.blogCardSequence?.[0] ?? "",
        },
      });

      return card;
    })
  );

  // Map each blog card to its respective blog
  blogs.map((blog, index) => {
    const respectiveCard = blogCards[index];
    if (!!respectiveCard) {
      blog.blogCards = [respectiveCard];
    }
  });

  return Response.json(blogs);
}
