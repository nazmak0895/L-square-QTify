import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ image, follows, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <div className={styles.chip}>
        <Chip label={`${follows} Follows`} size="medium" 
            sx={{
    "& .MuiChip-label": {
      fontSize: "13px", 
    }
  }}
        />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{title}</p>
      </div>
    </div>
  );
}