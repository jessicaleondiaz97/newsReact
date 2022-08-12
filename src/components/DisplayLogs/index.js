import React from "react";
import Navbar from "../Navbar";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function DisplayLogs() {
  const navigate = useNavigate();

  const [logs, setLogs] = React.useState([]);
  const [loadingLogs, setLoadingLogs] = React.useState(false);

  React.useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");

    if (!loginUser) navigate(`/`);
    else logsCall();
  }, []);

  const logsCall = async () => {
    setLogs([]);

    setLoadingLogs(true);

    const newlogs = await axios.get(`http://localhost:9090/news/showLogs`);

    setLoadingLogs(false);
    setLogs(newlogs.data);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ padding: "5px 50px 0px" }}>
        <h1>Logs</h1>
      </Box>

      {logs.length > 0 && (
        <Grid
          sx={{ padding: "20px 0 20px" }}
          justifyContent="center"
          spacing={3}
          container
        >
          {logs.map((item, itemIndex) => {
            return (
              <Grid key={item.date} item>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.api}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.url}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default DisplayLogs;
