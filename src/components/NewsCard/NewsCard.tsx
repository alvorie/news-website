"use client";

import { NewsItem } from "@/app/types";
import { motion } from "framer-motion";
import styles from "./NewsCard.module.css";
import { useRef } from "react";
import Link from "next/link";

interface Props {
  news: NewsItem;
}

export default function NewsCard({ news }: Props) {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("ru-RU");
  };

  const getTypeLabel = (type: string): string => type.replace("Вика_", "");

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    const scrollbarFill = sliderRef.current.nextElementSibling?.querySelector(
      `.${styles["slider-scrollbar"]}::after`
    ) as HTMLElement | null;

    if (scrollbarFill) {
      scrollbarFill.style.width = `${scrollProgress}%`;
    }
  };

  const photos = news.attachments?.filter((att) => att.type === "PHOTO") || [];
  const hasMultiplePhotos = photos.length > 1;
  const hasLinkAttachments = news.attachments?.some(
    (att) => att.type === "LINK"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.card}
    >
      <div className={styles["card-body"]}>
        <span className={styles["type-label"]}>{getTypeLabel(news.type)}</span>
        <h2 className={styles.title}>{news.text.split("\n")[0]}</h2>
        <p className={styles.date}>📅 {formatDate(news.date)}</p>

        <p className={styles.text}>{news.text}</p>

        {photos.length > 0 && (
          <>
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className={styles["attachment-slider"]}
            >
              {photos.map((att, idx) => (
                <div key={idx} className={styles["attachment-slide"]}>
                  <img src={att.image.src} alt="attachment" loading="lazy" />
                </div>
              ))}
            </div>
            {hasMultiplePhotos && (
              <div className={styles["slider-scrollbar"]}></div>
            )}
          </>
        )}

        {hasLinkAttachments &&
          news.attachments?.map((att, idx) => {
            if (att.type === "LINK") {
              return (
                <a
                  key={idx}
                  href={att.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["attachment-link"]}
                >
                  <img src={att.image.src} alt={att.titleLink} />
                  <span>{att.titleLink}</span>
                </a>
              );
            }
            return null;
          })}
      </div>

      <div className={styles.readMoreContainer}>
        <Link href={`/news/${news.id}`} className={styles.readMore}>
          Подробнее →
        </Link>
      </div>
    </motion.div>
  );
}
