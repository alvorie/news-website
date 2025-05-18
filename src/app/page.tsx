import { newsData } from "@/lib/newsData";
import styles from "./page.module.css";
import NewsCard from "@/components/NewsCard/NewsCard";

export default async function NewsPage() {
  return (
    <div className={styles.newsContent}>
      {newsData.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}
