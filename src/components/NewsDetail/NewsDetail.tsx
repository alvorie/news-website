"use client";

import Link from "next/link";
import styles from "./NewsDetail.module.css";
import { NewsItem } from "@/app/types";

interface Props {
  news: NewsItem;
}

export default function NewsDetail({ news }: Props) {
  const formatDate = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString("ru-RU");
  };

  const getTypeLabel = (type: string): string => {
    return type.replace("Вика_", "");
  };

  return (
    <article className={styles.article}>
      <Link href="/" className={styles.backLink}>
        &larr; Назад к новостям
      </Link>

      <span className={styles.typeLabel}>{getTypeLabel(news.type)}</span>
      <h1 className={styles.title}>{news.text.split("\n")[0]}</h1>
      <p className={styles.date}>📅 {formatDate(news.date)}</p>

      <div className={styles.content}>{news.text}</div>

      {news.attachments && news.attachments.length > 0 && (
        <div className={styles.attachments}>
          {news.attachments.map((att, idx) =>
            att.type === "PHOTO" ? (
              <img
                key={idx}
                src={att.image.src}
                alt="вложение"
                className={styles.attachmentPhoto}
              />
            ) : (
              <a
                key={idx}
                href={att.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.attachmentLink}
              >
                <img
                  src={att.image.src}
                  alt={att.titleLink}
                  className={styles.attachmentLinkImage}
                />
                <span>{att.titleLink}</span>
              </a>
            )
          )}
        </div>
      )}
    </article>
  );
}
