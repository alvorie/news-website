"use client";

import React from "react";
import styles from "./Modal.module.css";
import { NewsItem } from "@/app/types";
import Link from "next/link";
import { style } from "framer-motion/client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  news?: NewsItem;
}

export default function Modal({ isOpen, onClose, news }: ModalProps) {
  if (!isOpen || !news) return null;

  const formatDate = (timestamp: number): string =>
    new Date(timestamp * 1000).toLocaleDateString("ru-RU");

  const getTypeLabel = (type: string): string => type.replace("Вика_", "");

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{getTypeLabel(news.type)}</h2>
        <h1>{news.text.split("\n")[0]}</h1>
        <p>📅 {formatDate(news.date)}</p>
        <p>{news.text}</p>

        <a
          href={`/news/${news.id}`}
          onClick={onClose}
          className={styles.readMore}
        >
          Полная страница новости
        </a>
      </div>
    </div>
  );
}
