import React from "react";
import styles from "../styles/FilterSection.module.css";

interface FilterSectionProps {
  onCategoryChange: (category: string) => void;
}

const FilterSection = ({ onCategoryChange }: FilterSectionProps) => {
  return (
    <div className={styles.filterSection}>
      <button onClick={() => onCategoryChange("all")}>Alles</button>
      <button onClick={() => onCategoryChange("code")}>Code</button>
      <button onClick={() => onCategoryChange("debugging")}>Debugging</button>
      <button onClick={() => onCategoryChange("lessons learned")}>
        Lessons Learned
      </button>
      <button onClick={() => onCategoryChange("testing")}>Testing</button>
    </div>
  );
};

export default FilterSection;
