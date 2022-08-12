import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Login from "./components/Login";
import News from "./components/News";
import NewsDetail from "./components/NewsDetail";
import DisplayLogs from "./components/DisplayLogs";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Box sx={{ marginTop: "80px" }}>
            <News />
          </Box>
        }
      />
      <Route
        path="/dashboard/new/:queryValue/:id"
        element={
          <Box sx={{ marginTop: "80px" }}>
            <NewsDetail />
          </Box>
        }
      />

      <Route
        path="/logs"
        element={
          <Box sx={{ marginTop: "80px" }}>
            <DisplayLogs />
          </Box>
        }
      />
    </Routes>
  </BrowserRouter>
);
