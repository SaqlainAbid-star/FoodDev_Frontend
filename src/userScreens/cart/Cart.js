import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import pizzaImg from "../../images/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import Footer from "../../components/footer/Footer";
import CartTotal from "./cartTotal/CartTotal";
import CartProduct from "./cartProduct/CartProduct";
import "./Cart.css";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cart() {
  // state.sliceName.arrayName
  const cart = useSelector((state) => state.cart.cart);
  console.log("Cart: ", cart);

  return (
    <>
      <>
        <Navbar />
      </>
      <Box
        className="cart"
        style={{
          width: "100%",
          backgroundColor: "blue",
          backgroundImage: `url(${pizzaImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          color="white"
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          Cart
        </Typography>
      </Box>
      <div
        style={{
          width: "100%",
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {cart.map((cartItem) => {
          return (
            <CartProduct
              _id={cartItem._id}
              key={cartItem._id}
              itemName={cartItem.itemName}
              itemImage={cartItem.itemImage}
              itemPrice={cartItem.itemPrice}
              quantity={cartItem.quantity}
            />
          );
        })}
      </div>
      <Container sx={{ padding: "20px 0px" }}>
        <CartTotal />
      </Container>
      <Footer />
    </>
  );
}
