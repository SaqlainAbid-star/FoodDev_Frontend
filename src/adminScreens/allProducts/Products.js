import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { url } from "../../api";

export default function Products() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = async () => {
    // await fetch("http://localhost:8000/api/getFoodItems", {
    await fetch(`${url}/api/getFoodItems`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      });
  };


  const handleDelete = async (_id) => {


    // await fetch(`http://localhost:8000/api/deleteItem/` + _id, {
    await fetch(`${url}/api/deleteItem/` + _id, {
      method: "DELETE",
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  };


  const handleUpdate = async (_id) => {
    // await fetch(`http://localhost:8000/api/editItem/${params._id}`, {
    await fetch(`${url}/api/editItem/${params._id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        navigate("/Dashboard/Update/:id");
      });
  };


  return (
    <div
      style={{
        width: "100%",
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {item.itemCategory}
                </TableCell>
                <TableCell align="center">{item.itemName}</TableCell>
                <TableCell align="center">{item.itemPrice}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() =>
                      navigate(`/UpdateProduct/${item._id}`)
                    }
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
