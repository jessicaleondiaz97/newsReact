import React from "react";
import { Box, IconButton } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReplayIcon from "@mui/icons-material/Replay";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    weatherCall();
  }, []);

  const weatherCall = async () => {
    setWeather(null);

    const newNews = await axios.get(
      `http://localhost:9090/news/getWeather`
    );
    console.log("newNews.data.json[0]");
    console.log(newNews.data.json[0]);
    setWeather(newNews.data.json[0]);
  };

  return (
    <>
      <Accordion sx={{ border: "1px solid silver" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{weather ? "Weather" : "Loading Weather ..."}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>{weather ? "Weather" : ""}</Typography>

          <Box display="flex" justifyContent="end">
            <IconButton onClick={weatherCall} aria-label="refresh">
              <ReplayIcon />
            </IconButton>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Weather;
