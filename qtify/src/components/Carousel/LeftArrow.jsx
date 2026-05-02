import leftArrow from "../../assets/leftArrow.svg";
import styles from "./Arrow.module.css";

export default function LeftArrow({ onClick }) {
  return (
    <div className={styles.left} onClick={onClick}>
      <img src={leftArrow} alt="left" />
    </div>
  );
}