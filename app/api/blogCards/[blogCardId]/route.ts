import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const blogCardId = searchParams.get("blogCardId");

  if (!blogCardId) {
    return Response.redirect("/404");
  }

  const blogCard = await prisma.blogCard.findUnique({
    where: {
      id: blogCardId,
    },
  });

  return Response.json({ data: blogCard });
}
