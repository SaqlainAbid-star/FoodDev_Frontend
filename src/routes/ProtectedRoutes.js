import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../api";

export default function ProtectedRoutes({ children }) {


  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const verifyToken = async () => {
    if (!token) {
      navigate("/")
    }
    // const response = await axios.post("http://localhost:8000/api/getUser", { token: token });
    const response = await axios.post(`${url}/api/getUser`, { token: token });

    if (response.data.user) {
      console.log(response.data.user);
    }
  }

  useEffect(() => {
    verifyToken();
  }, [navigate])


  return token ? children : (<Navigate to="/" />);

}
