import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const pages = ["Products", "Users", "Add Products", "Orders"];
const settings = ["Profile"];

function AdminNavbar() {

  // anchor element for the navigation menu 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // anchor element for the user menu
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // To open and close menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <AppBar position="sticky" sx={{ background: "white" }}>
      <Container maxWidth="xl">

        {/* For Medium Screens */}
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Admin Dashboard
          </Typography>

          {/* The navigation bar is designed to adapt to different screen sizes. 
          It shows a hamburger icon (MenuIcon) on small screens (xs), 
          and on medium screens (md), it displays the navigation links horizontally. */}

          {/* For Medium Screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={`/${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "0px 8px",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>

          {/* For Small screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "black" }}
                >
                  {/* Link component allowing the user to navigate to different routes */}
                  <Link
                    to={`/${page}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          {/* For Small screen */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              color: "black",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: ".1rem",
            }}
          >
            Admin Dashboard
          </Typography>

          {/* For medium & small */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Saqlain" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={`/${setting}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {setting}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <Button
                sx={{ paddingLeft: "17px", color: "black" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AdminNavbar;
