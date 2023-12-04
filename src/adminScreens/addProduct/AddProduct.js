import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { url } from "../../api"


export default function AddProduct() {
  const [item, setItem] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: 0,
    itemCategory: "",
  });
  const [itemImage, setItemImage] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItem((values) => ({ ...values, [name]: value }));
  };

  const handleuploadImage = (event) => {
    setItemImage(event.target.files[0]);
    // console.log(itemImage);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // console.log("Item:", item);
    // console.log("itemImage:", itemImage);

    if (
      item.itemName === "" ||
      item.itemCategory === "" ||
      item.itemDescription === "" ||
      item.itemPrice === ""
    ) {
      toast.error("Please Fill All The Fields");
    } else {
      const formData = new FormData();
      formData.append("itemName", item.itemName);
      formData.append("itemDescription", item.itemDescription);
      formData.append("itemPrice", item.itemPrice);
      formData.append("itemCategory", item.itemCategory);
      formData.append("itemImage", itemImage);

      // axios.post("http://localhost:8000/api/addItem", formData, 
      axios.post(`${url}/api/addItem`, formData,
        // {headers: { Authorization: localStorage.getItem("token") },}
        {headers: {
        "Access-Control-Allow-Origin": "*",
      }}
      )
        .then((res) => {
          console.log("Response: ", res);
        });

      toast.success("Item Added Successgully");
      setItem({
        itemName: "",
        itemDescription: "",
        itemPrice: 0,
        itemCategory: "",
      });
      setItemImage(null);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "89vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={onSubmit}>
          <Typography variant="h5" component="h5" sx={{ textAlign: "center" }}>
            Add Product
          </Typography>
          <FormGroup>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                id="outlined-basic"
                label="Item Name"
                variant="outlined"
                type="text"
                name="itemName"
                value={item.itemName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Category"
                id="outlined-start-adornment"
                variant="outlined"
                type="text"
                name="itemCategory"
                value={item.itemCategory}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Description"
                id="outlined-start-adornment"
                variant="outlined"
                type="text"
                name="itemDescription"
                value={item.itemDescription}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Price"
                id="outlined-start-adornment"
                variant="outlined"
                type="number"
                name="itemPrice"
                value={item.itemPrice}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <Button variant="outlined" component="label" color="success">
                Upload Item Image
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  name="itemImage"
                  // onChange={(e) => setItemImage(e.target.files[0])}
                  onChange={handleuploadImage}
                />
              </Button>
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ background: "black" }}
              >
                Add
              </Button>
            </FormControl>
          </FormGroup>
        </form>
      </Box>
    </>
  );
}
