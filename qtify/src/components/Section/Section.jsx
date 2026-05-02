import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section({ title, endpoint }) {
  const [collapse, setCollapse] = useState(title !== "Top Albums");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(endpoint);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [endpoint]);

  const displayedData = collapse ? data.slice(0, 7) : data;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p
          className={styles.collapse}
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "Show All" : "Collapse"}
        </p>
      </div>

      <div className={styles.grid}>
        {displayedData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            follows={item.follows}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}