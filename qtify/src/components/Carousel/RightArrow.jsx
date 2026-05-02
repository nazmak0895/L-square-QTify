import rightArrow from "../../assets/rightArrow.svg";
import styles from "./Arrow.module.css";

export default function RightArrow({ onClick }) {
  return (
    <div className={styles.right} onClick={onClick}>
      <img src={rightArrow} alt="right" />
    </div>
  );
}