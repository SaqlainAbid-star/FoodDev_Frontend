import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { useLocation } from "react-router-dom";
import OrderItemCard from "./OrderItemCard";

const ShowOrderItems = () => {
  const location = useLocation();
  const { order } = location.state;
  const { _id, email, order_date, order_data } = order;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
    <h1>All Orders</h1>
      {
    order_data.length === 0 ? (
      <p>No orders found</p>
    ) : (
    order_data.map((order) => (
      // <div key={order._id}>
      //   <h2>{order.itemName}</h2>
      //   <p>{order.itemDescription}</p>
      //   <p>Price: Rs. {order.itemPrice}</p>
      //   <p>Category: {order.itemCategory}</p>
      //   <img src={order.itemImage} alt={order.itemName} style={{ width: "200px" }} />
      //   <p>Quantity: {order.quantity}</p>
      // </div>
      <OrderItemCard key={order._id} data={order} />
    ))
  )
  }
     </Box>
    </>
  );
};

export default ShowOrderItems;
