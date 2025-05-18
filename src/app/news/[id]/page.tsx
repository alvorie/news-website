import NewsDetail from "@/components/NewsDetail/NewsDetail";
import { newsData } from "@/lib/newsData";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function NewsPage({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 800));

  // проверка id
  const news = newsData.find((item) => item.id.toString() === params.id);

  if (!news) {
    notFound();
  }

  return <NewsDetail news={news} />;
}
