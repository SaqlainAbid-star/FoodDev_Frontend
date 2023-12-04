import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import AdminNavbar from "./adminNavbar/AdminNavbar";

export default function Admin() {

  return (
    <>
      <AdminNavbar />
      <div
        style={{
          width: "100%",
          minHeight: "89vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component={"h4"} sx={{ fontWeight: 700 }}>
          Welcome To Food<span style={{ color: "orangered" }}>dev</span>
        </Typography>
        <Typography
          variant="h5"
          component={"h5"}
          sx={{ fontWeight: 700 }}
          mt={2}
        >
          Admin Dashboard
        </Typography>
      </div>
    </>
  );
}
