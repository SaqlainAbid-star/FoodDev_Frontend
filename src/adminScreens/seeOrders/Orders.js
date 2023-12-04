import { Box } from "@mui/material";
import OrderItemCard from "./OrderItemCard";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { url } from "../../api";

export default function Orders() {

  const [allOrdersData, setAllOrdersData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch data from the server when the component mounts
    // fetch("http://localhost:8000/api/allOrdersData")
    fetch(`${url}/api/allOrdersData`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        setAllOrdersData(data.allorderData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once


  const formatDate = (dateString) => {
    // Convert the date string to a Date object
    const date = new Date(dateString);

    // Format the date using toLocaleString method
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      // second: "numeric",
      // timeZoneName: "short",
    });

    return formattedDate;
  };


  const seeOrderItems = (order) => {
    // console.log(order_data);
    navigate("/ShowOrderItems", { state: { order } });

  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>

              <TableCell align="center">ORDER ID</TableCell>
              <TableCell align="center">USER EMAIL</TableCell>
              <TableCell align="center">ORDER DATE</TableCell>
              <TableCell align="center">ORDER ITEMS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrdersData.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {order._id}
                </TableCell>
                <TableCell align="center">{order.email}</TableCell>
                <TableCell align="center">{formatDate(order.order_date)}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => seeOrderItems(order)}>See Order Items</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}
