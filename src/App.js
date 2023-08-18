import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Register from "./pages/Auth/register";
import Login from "./pages/Auth/login.js";
import Dashborad from "./pages/user/Dashborad";
import PrivateRoute from "./Routes/Private";
import ForgotPass from "./pages/Auth/ForgotPass";
import AdminRoute from "./Routes/AdminRoute";
import AdminDasboard from "./pages/admin/AdminDasboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import AdminProduct from "./pages/admin/AdminProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashborad />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDasboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route
            path="admin/product/:slug"
            element={<UpdateProduct />}
          />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/products" element={<AdminProduct />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
