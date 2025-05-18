import { notFound } from "next/navigation";
import { newsData } from "@/lib/newsData";
import ClientModalWrapper from "@/components/ClientModalWrapper";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NewsModal({ params }: Props) {
  const { id } = await params;

  const news = newsData.find((item) => item.id.toString() === id);

  if (!news) notFound();

  return <ClientModalWrapper news={news} />;
}
