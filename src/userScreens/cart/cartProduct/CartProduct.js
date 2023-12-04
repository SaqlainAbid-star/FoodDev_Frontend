import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../../redux/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import "./CartProduct.css";

export default function CartProduct({
  _id,
  itemName,
  itemImage,
  itemPrice,
  quantity = 1,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            alignItems: "center",
            borderRadius: "10px",
            marginTop: "10px",
          }}
          className="productCard"
          _id={_id}
          key={_id}
        >
          <CardActions>
            <Button
              variant="contained"
              sx={{ background: "black" }}
              onClick={() => dispatch(removeItem(_id))}
            >
              X
            </Button>
          </CardActions>
          <CardMedia
            component="img"
            height="194"
            image={itemImage}
            alt="Paella dish"
            sx={{ width: "150px", height: "150px" }}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {itemName}
            </Typography>
          </CardContent>
          {/* <CardContent>
            <Typography variant="h6" component="div">
              {itemPrice}
            </Typography>
          </CardContent> */}
          <CardActions className="quantityBtns">
            <Button
              variant="outlined"
              color="success"
              size="small"
              onClick={() => dispatch(decrementQuantity(_id))}
            >
              -
            </Button>
            <Typography variant="body2" sx={{ margin: "0px 10px" }}>
              {quantity}
            </Typography>
            <Button
              variant="outlined"
              color="success"
              size="small"
              onClick={() => dispatch(incrementQuantity(_id))}
            >
              +
            </Button>
          </CardActions>
          <CardContent>
            <Typography>Rs. {itemPrice * quantity}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
