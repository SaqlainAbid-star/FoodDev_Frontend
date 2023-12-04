import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import "./RegisterPage.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/authSlice/authSlice";

export default function RegisterPage() {
  const [userType, setUserType] = useState();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  // This line of code uses the useSelector hook from react-redux 
  // to extract the isLoading property from the Redux state's auth slice
  // and store it in a variable called isLoading.
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const createUserHandler = (values) => {

    // This dispatches the createUser async thunk with the values object as an argument.
    //  It is responsible for making an API call to create a user based on the provided values.
    // it uses the unwrap() function, which is a method provided by Redux Toolkit's createAsyncThunk
    //  It unwraps the fulfilled result of the async thunk. This means that 
    // if the async operation is successful, it will return the resolved value from the promise returned by the async thunk. 
    // If the async operation fails, it will throw an error and move to the .catch() block.
    dispatch(createUser(values))
      .unwrap()
      .then((data) => {
        navigate("/");
        toast.success("Sign Up Successful");
      })
      .catch((err) => toast.error(err.message));
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userType === "Admin" && secretKey !== "shoaib") {
      return toast.error("Invalid Admin");
    } else {
      createUserHandler({
        userType,
        userName,
        email,
        phoneNumber,
        address,
        password,
      })
    }

    // Another Way of Creating User
    // await fetch("http://localhost:8000/api/createUser", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     userType,
    //     userName,
    //     email,
    //     phoneNumber,
    //     address,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     toast.success("Registered Successfully");
    //     console.log(data, "User Registerd");
    //     navigate("/");
    //   });

    setUserName("");
    setPassword("");
    setPhoneNumber();
    setEmail("");
    setAddress("");
    setUserType();
    setSecretKey("");
  };




  return (
    <div className="register-page">
      <div className="left-box"></div>
      <div className="right-box">
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: "bold",
            letterSpacing: ".3rem",
            textAlign: "center",
          }}
        >
          Welcome To Food<span style={{ color: "yellow" }}>dev</span>
        </Typography>
        <Typography variant="h5" component={"h5"} mt={2}>
          Register As
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl sx={{ marginTop: "10px", width: "300px" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="user"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  label="User"
                  name="UserType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Admin"
                  name="UserType"
                  value="Admin"
                  onChange={(e) => setUserType(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Name"
                variant="outlined"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                name="userName"
                required
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Email"
                variant="outlined"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Phone Number"
                variant="outlined"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                name="phoneNumber"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Address"
                variant="outlined"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                name="address"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
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
            {userType === "Admin" ? (
              <>
                <FormControl sx={{ marginTop: "30px", width: "300px" }}>
                  <TextField
                    label="Enter Secret Key"
                    type="text"
                    variant="outlined"
                    onChange={(e) => setSecretKey(e.target.value)}
                    value={secretKey}
                    name="secretKey"
                  />
                </FormControl>
              </>
            ) : null}
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "#39393A" },
                }}
                loading={isLoading}
              >
                Register
              </Button>
            </FormControl>
            <FormControl sx={{ marginTop: "10px" }}>
              <Link to="/">Already have an account? Sign In</Link>
            </FormControl>
          </FormGroup>
        </form>
      </div>
    </div>
  );
}
