import {
  Button,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { url } from "../../api"

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await fetch("http://localhost:8000/api/loginUser", {
    await fetch(`${url}/api/loginUser`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.token);

        // This line stores the authentication token received from the login response into the browser's local storage. 
        // Local storage is a web API that allows data to be stored in the browser 
        // and persists even after the user closes the browser or navigates to a different page. 
        // Storing the token allows the user to stay authenticated across different pages or browser sessions.

        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login Successful");

        // console.log(data.user.userType);

        if (data.user.userType === "Admin") {
          navigate("/Admin");
        } else {
          navigate("/Home");
        }
      });

    setLoginData({
      email: "",
      password: "",
    });
  };


  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <div className="img-container"></div>
      <div className="form-container">
        <Typography
          variant="h3"
          component="h3"
          color="black"
          sx={{ letterSpacing: ".3rem", fontWeight: "bold" }}
        >
          Food<span style={{ color: "yellow" }}>dev</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginTop: "30px", fontWeight: "bold" }}
        >
          Login by entering your email and password
        </Typography>
        <form style={{ width: "70%" }} onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl sx={{ marginTop: "30px" }}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={onChangeHandler}
                value={loginData.email}
                name="email"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={onChangeHandler}
                value={loginData.password}
                name="password"
                autoComplete="off"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "#39393A" },
                }}
              >
                Login
              </Button>
            </FormControl>
            <FormControl sx={{ marginTop: "20px" }}>
              <Typography>
                <Link to="/Register">Don't have an account? Sign Up</Link>
              </Typography>
            </FormControl>
          </FormGroup>
        </form>
      </div>
    </div>
  );
}
