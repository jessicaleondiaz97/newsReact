import React from "react";
import Navbar from "../Navbar";
import NewsCard from "../NewsCard";
import Weather from "../Weather";
import axios from "axios";
import { Grid, Box, Button, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";

function News() {
  const navigate = useNavigate();
  const [news, setNews] = React.useState([]);
  const [loadingNews, setLoadingNews] = React.useState(false);
  const [queryValue, setQueryValue] = React.useState("");

  React.useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");

    if (!loginUser) navigate(`/`);
  }, []);

  const newsCall = async () => {
    if (queryValue.trim()) {
      setLoadingNews(true);

      const newNews = await axios.get(
        `http://localhost:9090/news/getNews?${queryValue.trim()}`
      );
            
      setLoadingNews(false);
      setNews(newNews.data.json[0].articles);
    } else {
      setLoadingNews(false);
      setNews([]);
    }
  };

  return (
    <>
      <Navbar />

      <Box display="flex" justifyContent="center" gap="20px">
        {news.length > 0 && (
          <Grid
            sx={{ padding: "20px 0 20px" }}
            justifyContent="center"
            spacing={3}
            container
          >
            {news.map((item, itemIndex) => {
              return (
                <Grid key={item.publishedAt + item.author + item.title} item>
                  <NewsCard
                    {...item}
                    itemIndex={itemIndex}
                    queryValue={queryValue}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}

        <Box sx={{ margin: "20px 50px 0 0", maxWidth: "550px", width: "100%" }}>
          <TextField
            sx={{ marginBottom: "20px" }}
            fullWidth
            value={queryValue}
            onChange={e => setQueryValue(e.target.value)}
            id="outlined-basic"
            label="Search Query"
            variant="outlined"
          />
          <Button
            onClick={newsCall}
            sx={{ marginBottom: "20px" }}
            fullWidth
            variant="contained"
          >
            {loadingNews ? "Loading ... " : "Make Search"}
          </Button>

          <Weather />
        </Box>
      </Box>
    </>
  );
}

export default News;
