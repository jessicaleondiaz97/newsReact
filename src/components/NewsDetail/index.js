import React from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { useNavigate } from "react-router-dom";

function NewDettail() {
  const navigate = useNavigate();
  let { id, queryValue } = useParams();

  const [newDetail, setnewDetail] = React.useState(null);

  React.useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");

    if (!loginUser) {
      navigate(`/`);
    } else {
      newsCall();
    }
  }, []);

  const newsCall = async () => {
    setnewDetail(null);

    const newNews = await axios.get(
      `https://newsapi.org/v2/everything?q=${queryValue}&from=2022-08-10&sortBy=publishedAt&apiKey=632805ede8694d0f815bf7e271fb4492`
    );

    setnewDetail(newNews.data.articles[id]);
  };

  return (
    <>
      <Navbar />

      {newDetail ? (
        <Box sx={{ padding: "50px 20px 50px" }}>
          <h1>{newDetail.title}</h1>

          <Box
            sx={{
              display: "flex",
              gap: "50px",
              marginTop: "50px"
            }}
          >
            <img src={newDetail.urlToImage} alt="News"></img>

            <Box>
              <p>{newDetail.content}</p>
              <p>{newDetail.source?.name}</p>
              <p>{newDetail.url}</p>
            </Box>
          </Box>
        </Box>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading ...</h2>
      )}
    </>
  );
}

export default NewDettail;
