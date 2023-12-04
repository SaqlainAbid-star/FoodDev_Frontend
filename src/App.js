import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";

import LoginPage from "./commonScreens/LoginPage/LoginPage";
import RegisterPage from "./commonScreens/RegisterPage/RegisterPage";

import Home from "./userScreens/home/Home";
import Cart from "./userScreens/cart/Cart";
import UserProfile from "./userScreens/profile/UserProfile";
import UserOrders from "./userScreens/userOrders/UserOrders";
import ProductDetailScreen from "./userScreens/productDetailScreen/ProductDetailScreen";

import Admin from "./adminScreens/Admin";
import Products from "./adminScreens/allProducts/Products";
import AddProduct from "./adminScreens/addProduct/AddProduct";
import Users from "./adminScreens/users/Users";
import Orders from "./adminScreens/seeOrders/Orders";
import AdminProfile from "./adminScreens/adminProfile/AdminProfile";
import UpdateProduct from "./adminScreens/updateProduct/UpdateProduct";
import ShowOrderItems from "./adminScreens/seeOrders/ShowOrderItems";

import ProtectedRoutes from "./routes/ProtectedRoutes";


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <Routes /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />

        {/* User */}
        <Route path="/Home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/Cart" element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
        <Route path="/Profile" element={<ProtectedRoutes><UserProfile /></ProtectedRoutes>} />
        <Route path="/My Orders" element={<ProtectedRoutes><UserOrders /></ProtectedRoutes>} />
        <Route
          path="/Home/ProductDetails/:id"
          element={<ProductDetailScreen />}
        />
        {/* Admin */}
        <Route path="/Admin" element={<ProtectedRoutes><Admin /></ProtectedRoutes>} />
        <Route path="/Products" element={<ProtectedRoutes><Products /></ProtectedRoutes>} />
        <Route path="/Add Products" element={<ProtectedRoutes><AddProduct /></ProtectedRoutes>} />
        <Route path="/Users" element={<ProtectedRoutes><Users /></ProtectedRoutes>} />
        <Route path="/Orders" element={<ProtectedRoutes><Orders /></ProtectedRoutes>} />
        <Route path="/AdminProfile" element={<ProtectedRoutes><AdminProfile /></ProtectedRoutes>} />
        <Route path="/UpdateProduct/:id" element={<ProtectedRoutes><UpdateProduct /></ProtectedRoutes>} />
        <Route path="/ShowOrderItems" element={<ProtectedRoutes><ShowOrderItems /></ProtectedRoutes>} />

      </Routes>
    </>
  );
}

export default App;
