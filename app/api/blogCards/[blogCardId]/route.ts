import prisma from "../../../../lib/prisma";

async function GET(request: Request, { params: { blogCardId } }) {
  const blogCard = await prisma.blogCard.findUnique({
    where: {
      id: blogCardId,
    },
  });

  return Response.json(blogCard);
}

async function POST(request: Request, { params: { blogCardId } }) {
  const { content, englishContent } = await request.json();

  const blogCard = await prisma.blogCard.update({
    where: {
      id: blogCardId,
    },
    data: {
      content,
      englishContent,
    },
  });

  return Response.json(blogCard);
}

async function DELETE(request: Request, { params: { blogCardId } }) {
  const blogCard = await prisma.blogCard.delete({
    where: {
      id: blogCardId,
    },
  });

  return Response.json(blogCard);
}

export { GET, POST, DELETE };
