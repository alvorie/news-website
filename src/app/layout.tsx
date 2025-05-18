import "../styles/globals.css";
import { ReactNode } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className={styles.layoutContainer}>
          <aside className={styles.aside}>
            <nav>
              <ul>
                <li>
                  <Link href="/" className={styles.asideLink}>
                    🏠 Главная
                  </Link>
                </li>
                <li>
                  <Link href="/random" className={styles.asideLink}>
                    🎲 Рандомная новость
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          <div className={styles.mainContent}>
            <header className={styles.headerContainer}>
              <h1 className={styles.newsTitle}>news website :D</h1>
            </header>
            <main>
              {children}
              {modal}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
