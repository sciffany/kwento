import prisma from "../../../../lib/prisma";

export async function GET(request: Request, { params: { blogId } }) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
    include: {
      blogCards: true,
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
