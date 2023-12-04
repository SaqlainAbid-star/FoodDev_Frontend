import {
  Box,
  Button,
  Divider,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import pizzaImg from "../../images/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Box
        className="header"
        style={{
          width: "100%",
          backgroundImage: `url(${pizzaImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          component="h3"
          sx={{ fontWeight: "bold", letterSpacing: ".3rem", marginTop: "10px" }}
        >
          Food<span style={{ color: "yellow" }}>dev</span>
        </Typography>
        <Typography variant="h6" color="white" component="h6">
          The best restaurant at the best price
        </Typography>
        <Paper
          className="searchBtn"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Your Favourite Food"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button variant="contained" sx={{ background: "black" }}>
            Search
          </Button>
        </Paper>
      </Box>
    </div>
  );
}
