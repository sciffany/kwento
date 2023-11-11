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
