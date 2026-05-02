import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

export default function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState("all");
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => {
        setSongs(res.data);
        setFilteredSongs(res.data);
      })
      .catch((e) => console.log(e));

    axios
      .get("https://qtify-backend.labs.crio.do/genres")
      .then((res) => setGenres(res.data.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (value === "all") {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(
        songs.filter((song) => song.genre.key === value)
      );
    }
  }, [value, songs]);

  return (
    <div className="section">
      <h2 style={{ marginBottom: "16px", color: "#fff" }}>Songs</h2>

      <Tabs
  value={value}
  onChange={(e, newValue) => setValue(newValue)}
  textColor="inherit"
  sx={{
    marginTop: "16px",
    "& .MuiTab-root": {
      color: "#fff",
      textTransform: "none",
      fontSize: "16px",
      minWidth: "80px",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
    "& .Mui-selected": {
      color: "#34C94B",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#34C94B",
      height: "3px",
    },
  }}
>
        <Tab label="All" value="all" disableRipple />
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
            disableRipple
          />
        ))}
      </Tabs>

      <div style={{ marginTop: "24px" }}>
        <Carousel
          data={filteredSongs}
          renderItem={(item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              likes={item.likes}
              type="song"
            />
          )}
        />
      </div>
    </div>
  );
}