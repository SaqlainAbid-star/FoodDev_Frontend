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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, Outlet, useNavigate } from "react-router-dom";
import profileImg from "../../images/img_568656-removebg-preview.png";

const pages = ["Home", "Cart"];
const settings = ["My Orders"];

function Navbar() {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <AppBar position="fixed" style={{ background: "white" }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
        {/* For Medium Screens */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
                fontSize: "2rem",
                letterSpacing: ".3rem",
              }}
            >
              Food<span style={{ color: "yellow" }}>dev</span>
            </Typography>

          {/* For Medium Screens */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  <Link
                    to={`/${page}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginTop: "8px",
                    }}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>

          {/* For Small screen */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "black",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
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
                  marginTop: "8px",
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    color="black"
                  >
                    <Typography textAlign="center" key={page}>
                  {/* Link component allowing the user to navigate to different routes */}
                      <Link
                        to={`/${page}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginTop: "8px",
                        }}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

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
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Food<span style={{ color: "yellow" }}>dev</span>
            </Typography>
           
          {/* For medium & small */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={profileImg} />
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
                  <MenuItem onClick={handleCloseUserMenu} key={setting}>
                    <Typography>
                      <Link
                        to={`/${setting}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginTop: "8px",
                        }}
                      >
                        {setting}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
                <Button
                  sx={{
                    background: "none",
                    ":hover": { background: "none" },
                    color: "black",
                    paddingLeft: "17px",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;
