import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { url } from "../../../api";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function CartTotal() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.itemPrice * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOrderData = async () => {
    const user = window.localStorage.getItem("user");
    const userObject = JSON.parse(user)
    console.log(userObject.email);
    const u_email = userObject.email;


    // let response = await fetch("http://localhost:8000/api/orderData", {
      let response = await fetch(`${url}/api/orderData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: u_email,
        order_data: cart,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("order response: ", response);
    if (response.status === 200) {
      alert("Order has been placed successully");
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 260,
          height: "auto",
          borderRadius: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Subtotal</Typography>
          <Typography>Rs.{`${getTotal().totalPrice}`}</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Delivary Charges</Typography>
          <Typography>Rs.40</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>Rs.{`${getTotal().totalPrice + 40}`}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              background: "black",
              ":hover": { background: "black" },
            }}
            onClick={handleOpen}
          >
            Go To Checkout
          </Button>
        </CardActions>
      </Card>

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {cart.map((item) => {
            return (
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
                key={item._id}
                id={item._id}
              >
                <CardMedia
                  sx={{ height: 100, width: 100 }}
                  image={item.itemImage}
                  title={item.itemName}
                  component="img"
                />
                <CardContent>
                  <Typography variant="body2">{item.itemName}</Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="body2">Rs. {item.itemPrice * item.quantity}</Typography>
                </CardContent>
              </Card>
            );
          })}
          <Typography variant="h6">
            Total. {`${getTotal().totalPrice + 40}`}
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "black", ":hover": { background: "black" } }}
            onClick={handleOrderData}
          >
            Place Order
          </Button>
        </Box>
      </Modal>
    </>
  );
}
