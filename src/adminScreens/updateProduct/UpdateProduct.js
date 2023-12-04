import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import {
  Button,
  CardMedia,
  FormControl,
  FormGroup,
  TextField,
} from "@mui/material";
import "./UpdateProduct.css";
import { url } from "../../api";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function UpdateProduct() {
  const params = useParams();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemImage, setItemImage] = useState("");

  const getSingleItem = async () => {
    let response = await fetch(
      // `http://localhost:8000/api/getItemDetail/${params.id}`,
      `${url}/api/getItemDetail/${params.id}`,
      {
        method: "GET",
      }
    );
    response = await response.json();
    // console.log("response : ", response.data);
    setItemName(response.data.itemName);
    setItemDescription(response.data.itemDescription);
    setItemPrice(response.data.itemPrice);
    setItemCategory(response.data.itemCategory);
    setItemImage(response.data.itemImage);
  };

  useEffect(() => {
    getSingleItem();
  }, []);

  const handleUpdate = async () => {
    // await fetch(`http://localhost:8000/api/editItem/${params.id}`, {
    await fetch(`${url}/api/editItem/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemName,
        itemCategory,
        itemDescription,
        itemPrice,
        itemImage,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updated data: ", data);
      });
    toast.success("Item Text fields only Updated Successfully");

  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} elevation={0}>
          <Grid item xs={8} lg={4}>
            <Item sx={{ paddingTop: "50px" }} elevation={0}>
              {/* Item image */}
              <CardMedia
                component="img"
                alt={itemName}
                // image={`http://localhost:8000/uploads/${itemImage}`}
                image={`${url}/uploads/${itemImage}`}
                // sx={{ height: 145 }}
                className="itemImg"
              />
            </Item>
          </Grid>
          <Grid item xs={4} lg={8}>
            <Item elevation={0}>
              <FormGroup>
                <FormControl
                  sx={{
                    marginTop: "30px",
                    display: "flex",
                    flexWrap: "wrap",
                    padding: "10px",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={itemName}
                    sx={{ mt: 3 }}
                    name="itemName"
                    onChange={(e) => setItemName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Category"
                    variant="outlined"
                    value={itemCategory}
                    sx={{ mt: 3 }}
                    name="itemCategory"
                    onChange={(e) => setItemCategory(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    value={itemDescription}
                    sx={{ mt: 3 }}
                    name="itemDescription"
                    onChange={(e) => setItemDescription(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    value={itemPrice}
                    sx={{ mt: 3 }}
                    name="itemPrice"
                    onChange={(e) => setItemPrice(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      mt: 3,
                      background: "black",
                      ":hover": { background: "black" },
                    }}
                  >
                    {/* Image update nh horhi?? */}
                    Upload Image
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      name="itemImage"
                      // onChange={(e) => setItemImage(e.target.value)}
                      onChange={(e) => console.log(e.target.files[0])}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      mt: 3,
                      ":hover": { background: "black" },
                    }}
                    onClick={handleUpdate}
                  >
                    Update
                  </Button>
                </FormControl>
              </FormGroup>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
