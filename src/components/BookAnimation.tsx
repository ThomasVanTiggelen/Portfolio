import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/BookAnimation.module.css";

const BookAnimation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleBlogClick = () => {
    router.push("/blog");
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.book} ${isOpen ? styles.open : ""}`}
        onClick={handleOpen}
      >
        <div className={styles.front}>
          <div className={styles.cover}></div>
        </div>
        <div className={styles.back}>
          <div className={styles.content}>
            <p>Hier komt informatie</p>
            <button className="medieval-button" onClick={handleBlogClick}>
              BLOG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAnimation;
