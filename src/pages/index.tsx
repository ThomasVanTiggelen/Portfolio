import BookAnimation from "@/components/BookAnimation";
import ParchmentAnimation from "@/components/ParchmentAnimation";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <ParchmentAnimation />
      <BookAnimation />
    </div>
  );
};

export default Home;
