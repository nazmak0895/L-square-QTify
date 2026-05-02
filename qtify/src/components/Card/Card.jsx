import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ image, follows, likes, title, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <div className={styles.chip}>
          <Chip
            label={
              type === "song"
                ? `${likes} Likes`
                : `${follows} Follows`
            }
            size="medium"
            sx={{
              "& .MuiChip-label": {
                fontSize: "13px",
              },
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