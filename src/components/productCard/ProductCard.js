import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import pizzaImg from "../../images/burger-png-removebg-preview.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { toast } from "react-toastify";

export default function ProductCard({
  _id,
  itemName,
  itemDescription,
  itemPrice,
  itemCategory,
  itemImage,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addItemInCart = () => {

    // console.log(itemName);

    dispatch(
      addToCart({
        _id,
        itemName,
        itemDescription,
        itemPrice,
        itemCategory,
        itemImage,
      })
    )
    // toast.success("Login Successful");

  }

  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          backgroundColor: "transparent",
          marginTop: "20px",
        }}
        elevation={0}
        key={_id}
        id={_id}
      >
        <CardMedia
          component="img"
          height="200"
          image={itemImage}
          alt={itemName}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDescription}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Rs. {itemPrice}
          </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              margin: "auto",
              background: "black",
              ":hover": { background: "black" },
            }}
            onClick={addItemInCart}
          >
            Add To Cart
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              margin: "auto",
              background: "black",
              ":hover": { background: "black" },
            }}
            onClick={() => navigate(`/Home/ProductDetails/${_id}`)}
          >
            See Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
