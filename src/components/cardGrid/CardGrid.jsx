import { Container, Typography } from "@mui/material";
import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import {url} from '../../api'

export default function CardGrid() {
  const [items, setItems] = useState([]);

  // getting products on home screen
  useEffect(() => {
    // fetch("http://localhost:8000/api/getFoodItems", {
      fetch(`${url}/api/getFoodItems`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Food_items: ", data.data);
        setItems(data.data);
      });
  }, []);
  
  return (
    <>
      <Container sx={{ textAlign: "left" }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ fontWeight: "bold", paddingLeft: "30px", textAlign: "center" }}
        >
          Food Items
        </Typography>
      </Container>
      <div
        style={{
          width: "100%",
          minHeight: "50vh",
          padding: "50px 0px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => {
          return (
            <ProductCard
              _id={item._id}
              key={item._id}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
              itemPrice={item.itemPrice}
              itemCategory={item.itemCategory}
              // itemImage={`http://localhost:8000/uploads/${item.itemImage}`}
              itemImage={`${url}/uploads/${item.itemImage}`}
            />
          );
        })}
      </div>
    </>
  );
}
