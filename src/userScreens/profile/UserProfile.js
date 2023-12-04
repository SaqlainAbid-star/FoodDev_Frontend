import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  CardMedia,
  FormControl,
  FormGroup,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import profileAvatar from "../../images/img_568656.png";


// This is a higher-order function that creates a styled component. 
// The styled function is imported from Material-UI, and it takes two arguments: 
// the component to be styled (in this case, Paper) 
// and an arrow function that returns an object containing the CSS styles for the component.

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // spread operator, spreads the properties of the body2 typography variant to the Item component.
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function UserProfile() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={3} sx={{ textAlign: "center" }}>
            <Item
              sx={{ padding: "20px", textAlign: "center", marginTop: "30px" }}
              elevation={0}
            >
              {/* Avatar */}
              <CardMedia
                component="img"
                height="194"
                image={profileAvatar}
                alt="Paella dish"
                sx={{ width: 200, height: 200, margin: "auto" }}
              />
              {/* Name */}
              <Typography
                variant="h6"
                sx={{ color: "black", marginTop: "20px" }}
              >
                Shoaib Muhammad
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Item elevation={0}>
              <Typography variant="h4" component="h4" sx={{ color: "black" }}>
                My Profile
              </Typography>
              <FormGroup>
                <FormControl sx={{ marginTop: "30px" }}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Name"
                    defaultValue="Shoaib Muhammad"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: "30px" }}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Email"
                    defaultValue="shoaib@gmail.com"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: "30px" }}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Phone Number"
                    defaultValue="1234567890"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: "30px" }}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Address"
                    defaultValue="Gulistan-e-Johar, Karachi"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </FormControl>
              </FormGroup>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
