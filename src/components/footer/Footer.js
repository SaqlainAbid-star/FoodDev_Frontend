import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <>
      <Box sx={{ flexGrow: 1, background: "#080808", padding: "20px 0px" }}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Item sx={{ background: "#080808" }}>
              <Typography
                variant="h5"
                color="white"
                sx={{ letterSpacing: ".2rem" }}
              >
                Food<span style={{ color: "yellow" }}>dev</span>
              </Typography>
              <Typography variant="body2" color="white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                debitis?
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item sx={{ background: "#080808", color: "white" }}>
              <Typography variant="h6" color="danger">
                Our Menu
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "0px 5px",
                }}
              >
                Burger
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "0px 5px",
                }}
              >
                Pizza
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "0px 5px",
                }}
              >
                Sandwitch
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
