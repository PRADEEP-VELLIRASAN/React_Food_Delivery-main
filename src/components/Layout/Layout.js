import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      {!isLoginPage && <Header />}
      {showCart && !isLoginPage && <Carts />}
      <div>
        <Routes />
      </div>
      {!isLoginPage && <Footer />}

    </div>
  );
};

export default Layout;
