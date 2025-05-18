// components/ClientModalWrapper.tsx
"use client";

import { NewsItem } from "@/app/types";
import Modal from "../Modal/Modal";

interface Props {
  news: NewsItem;
}

export default function ClientModalWrapper({ news }: Props) {
  return (
    <Modal isOpen={true} onClose={() => window.history.back()} news={news} />
  );
}
