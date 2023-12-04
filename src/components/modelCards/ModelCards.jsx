import "./ModelCards.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import pizzaImg from "../../images/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ModelCards() {
  return (
    <div style={{ padding: "50px 0px", textAlign: "center" }}>
      <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
        <Grid item lg={1} md={0} xs={1}></Grid>
        <Grid item xs={10} md={6} lg={6}>
          <Item
            sx={{
              marginTop: "10px",
              backgroundImage: `url(${pizzaImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="lg-card"
          >
            <Typography
              variant="body2"
              color="white"
              sx={{ fontWeight: "400" }}
            >
              Try it Today
            </Typography>
            <Typography variant="h6" color="white">
              Most Popular Pizza
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={10} md={4} lg={4}>
          <Item
            sx={{
              marginTop: "10px",
              backgroundImage: `url(${pizzaImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="card"
          >
            <Typography
              variant="body2"
              color="white"
              sx={{ fontWeight: "400" }}
            >
              Try it Today
            </Typography>
            <Typography variant="h6" color="white">
              More Fun And More Taste
            </Typography>
          </Item>
          <Item
            sx={{
              marginTop: "10px",
              backgroundImage: `url(${pizzaImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="card"
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontWeight: "400" }}
            >
              Try it Today
            </Typography>
            <Typography variant="h6" color="white">
              Fresh And Chilli
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
