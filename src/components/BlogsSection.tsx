import React, { useState } from "react";
import styles from "../styles/BlogsSection.module.css";

interface BlogsSectionProps {
  id: number;
  title: string;
  date: string;
  categories: string[];
  content: string;
}

const BlogsSection = ({
  id,
  title,
  date,
  categories,
  content,
}: BlogsSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.parchmentContainer}>
      <div
        className={`${styles.parchment} ${isOpen ? styles.open : ""}`}
        onClick={handleOpen}
        data-week={id + 1}
      >
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{date}</p>
          <div className={styles.categories}>
            {categories.map((category, index) => (
              <span key={index} className={styles.category}>
                {category}
              </span>
            ))}
          </div>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
