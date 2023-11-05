import prisma from "../../lib/prisma";

export default async function DynamicPage(props) {
  const data = await getData();

  return (
    <div>
      <h1>My blog post #{data[0].id}</h1>
      <h2>{data[0].title}</h2>
      <p>{data[0].content}</p>
      <p>By {data[0].author?.name}</p>
    </div>
  );
}

async function getData() {
  const feed = await prisma.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return feed;
}
