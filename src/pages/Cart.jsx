import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section style={{background: "#f8fafc", borderRadius: "24px", padding: "32px 0 24px 0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginTop: "32px"}}>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h3 className="text-center" style={{color: "#ff4c4c", fontWeight: 700, margin: "48px 0"}}>Your cart is empty</h3>
              ) : (
                <>
                  <h3 className="mb-4 text-center" style={{fontWeight:800, fontSize:"2rem", color:"#222"}}>Order Summary</h3>
                  <div style={{overflowX: "auto", borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", background: "#fff", marginBottom: "32px"}}>
                    <table style={{width: "100%", borderCollapse: "collapse"}}>
                      <thead>
                        <tr style={{background: "#f8fafc", color: "#888", fontWeight: 700}}>
                          <th style={{padding: "16px"}}>Image</th>
                          <th style={{padding: "16px"}}>Title</th>
                          <th style={{padding: "16px"}}>Price</th>
                          <th style={{padding: "16px"}}>Quantity</th>
                          <th style={{padding: "16px"}}>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <Tr item={item} key={item.id} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              <div style={{marginTop: "24px", background: "#fff", borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "24px 18px"}}>
                <h4 style={{fontWeight:700, color:"#222"}}>Subtotal: <span style={{color:"#ff4c4c"}}>₹{totalAmount.toLocaleString('en-IN')}</span></h4>
                <p style={{color: "#888", marginBottom: "18px"}}>Taxes and shipping will calculate at checkout</p>
                <div style={{display: "flex", gap: "18px", flexWrap: "wrap"}}>
                  <Link to="/pizzas" style={{textDecoration: "none", flex:1}}>
                    <button style={{background: "#fff", color: "#ff4c4c", border: "2px solid #ff4c4c", borderRadius: "32px", padding: "12px 0", fontWeight:600, fontSize:"1rem", width: "100%", boxShadow: "0 2px 8px rgba(255,76,76,0.10)", transition: "background 0.2s"}}>Continue Shopping</button>
                  </Link>
                  <Link to="/checkout" style={{textDecoration: "none", flex:1}}>
                    <button style={{background: "#ff4c4c", color: "#fff", border: "none", borderRadius: "32px", padding: "12px 0", fontWeight:600, fontSize:"1rem", width: "100%", boxShadow: "0 2px 8px rgba(255,76,76,0.10)", transition: "background 0.2s"}}>Proceed to checkout</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr style={{borderBottom: "1px solid #f0f0f0"}}>
      <td style={{textAlign: "center", padding: "12px"}}>
        <img src={image01} alt={title} style={{width: "56px", height: "56px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)"}} />
      </td>
      <td style={{textAlign: "center", padding: "12px", fontWeight:600}}>{title}</td>
  <td style={{textAlign: "center", padding: "12px", color: "#ff4c4c", fontWeight:700}}>₹{price.toLocaleString('en-IN')}</td>
      <td style={{textAlign: "center", padding: "12px"}}>{quantity}px</td>
      <td style={{textAlign: "center", padding: "12px"}}>
        <button onClick={deleteItem} style={{background: "#ff4c4c", color: "#fff", border: "none", borderRadius: "8px", padding: "6px 12px", fontWeight:600, cursor: "pointer", boxShadow: "0 2px 8px rgba(255,76,76,0.10)", transition: "background 0.2s"}}>
          <i className="ri-delete-bin-line" style={{fontSize: "1.2rem"}}></i>
        </button>
      </td>
    </tr>
  );
};

export default Cart;
