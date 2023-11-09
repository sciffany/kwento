import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const blogId = searchParams.get("blogId");

  if (!blogId) {
    return Response.redirect("/404");
  }

  const blog = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
    include: {
      blogCards: true,
    },
  });

  return Response.json({ data: blog });
}
