import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const newBlog = await prisma.blog.create({
    data: {
      title: "",
      englishTitle: "",
      user: {
        connect: {
          email: email as string,
        },
      },
      languageCode: "en",
    },
  });

  return Response.json({ data: newBlog });
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const blogs = await prisma.blog.findMany({
    where: {
      user: {
        email: email as string,
      },
    },
    include: {
      blogCards: {
        take: 1,
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return Response.json(blogs);
}
