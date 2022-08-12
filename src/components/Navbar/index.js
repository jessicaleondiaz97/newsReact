import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("loginUser");
    navigate(`/`);
  };

  const userName = localStorage.getItem("loginUser");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ padding: "0 20px 0" }} position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", gap: "20px" }}>
            <Typography variant="h6" component="div">
              <Link
                to="/dashboard"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Dashboard
              </Link>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/logs"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Logs
              </Link>
            </Typography>
          </Box>

          <div>
            <Avatar
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              style={{ background: "white", color: "black", cursor: "pointer" }}
            >
              {userName?.trim().charAt(0)}
            </Avatar>
            <Menu
              sx={{ marginTop: "8px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              keepMounted
              transformOrigin={{
                horizontal: "center",
                vertical: "top"
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
