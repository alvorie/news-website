import NewsDetail from "@/components/NewsDetail/NewsDetail";
import { newsData } from "@/lib/newsData";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NewsPage(props: Props) {
  const params = await props.params;
  const { id } = params;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // проверка id
  const news = newsData.find((item) => item.id.toString() === id);

  if (!news) {
    notFound();
  }

  return <NewsDetail news={news} />;
}
