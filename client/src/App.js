import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { StripeSuccess } from "./pages/stripe-success";
import { StripeCancel } from "./pages/stripe-cancel";
import { Account } from "./pages/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Basic from "./pages/plans/Basic";
import Premium from "./pages/plans/Premium";
import Standard from "./pages/plans/Standard";

function App() {
  return (
    // <div className="container">
    //   <div className="row">
    //     <h1>Welcome subscription app</h1>
    //     <p className="lead">Using react node stripe and mongo</p>
    //   </div>
    // </div>
    <BrowserRouter>
      <Nav />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
        }}
      />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/stripe/success" element={<StripeSuccess />} />
          <Route exact path="/stripe/cancel" element={<StripeCancel />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/basic" element={<Basic />} />
          <Route exact path="/standard" element={<Standard />} />
          <Route exact path="/premium" element={<Premium />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
