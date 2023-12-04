import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";



export default function OrderItemCard({ data }) {
  return (
    <>
      <Card className="OrderCard" sx={{ maxWidth: 325, marginTop: "20px" }}>
        <CardMedia
          sx={{ height: 180 }}
          image={data.itemImage}
          title={data.itemName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.itemDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rs. {data.itemPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {data.quantity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success">
            Accept
          </Button>
          <Button variant="contained" color="error">
            Reject
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
