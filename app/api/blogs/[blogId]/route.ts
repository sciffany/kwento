import { BlogCardType } from "@prisma/client";
import prisma from "../../../../lib/prisma";
import { BlogData } from "../route";

export async function GET(request: Request, { params: { blogId } }) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
    include: {
      blogCards: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return Response.json(blog);
}

export async function POST(request: Request, { params: { blogId } }) {
  const { title, englishTitle } = await request.json();

  const blog = await prisma.blog.update({
    where: {
      id: blogId,
    },
    data: {
      title,
      englishTitle,
    },
  });

  return Response.json(blog);
}

export type BlogUpdateData = {
  title: string;
  createdRows?: {
    id: string;
    text: string;
    subtext: string;
  }[];
  updatedRows?: {
    id: string;
    text?: string;
    subtext?: string;
    voiceUrl?: string;
  }[];
  deletedRows?: {
    id: string;
  }[];
  imageUrl: string;
};

export async function PUT(request: Request, { params: { blogId } }) {
  const data = (await request.json()) as BlogUpdateData;

  const blog = await prisma.blog.update({
    where: {
      id: blogId,
    },
    data: {
      title: data.title,
      englishTitle: "",
      imageUrl: data.imageUrl,
      languageCode: "fil",
      blogCards: {
        create: data.createdRows?.map((card) => ({
          content: card.text,
          englishContent: card.subtext,
          blogCardType: BlogCardType.TEXT,
        })),
        update: data.updatedRows?.map((card) => ({
          where: {
            id: card.id,
          },
          data: {
            content: card.text,
            englishContent: card.subtext,
            voiceUrl: card.voiceUrl,
          },
        })),
        delete: data.deletedRows?.map((card) => ({
          id: card.id,
        })),
      },
    },
  });

  return Response.json({ data: blog });
}
