import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getSession({ req: req as any });
  console.log(session);
  const email = session?.user?.email;

  await prisma.blog.create({
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
}
