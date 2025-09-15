import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import "../styles/modern-cart.css";
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
      <section className="modern-cart-section">
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <div className="modern-empty-cart animate-fade-in">
                  <div className="empty-cart-icon">
                    <i className="ri-shopping-cart-line"></i>
                  </div>
                  <h3 className="empty-cart-title">Your cart is empty</h3>
                  <p className="empty-cart-subtitle">Add some delicious pizzas to get started!</p>
                  <Link to="/pizzas" className="modern-order__btn">
                    Browse Menu
                  </Link>
                </div>
              ) : (
                <>
                  <div className="modern-cart-header animate-fade-in">
                    <h2 className="modern-section-title">Summary of your order</h2>
                    <span className="cart-item-count">{cartItems.length} item{cartItems.length > 1 ? 's' : ''}</span>
                  </div>
                  <div className="modern-cart-items">
                    {cartItems.map((item, idx) => (
                      <div key={item.id} className="animate-card-in" style={{animationDelay: `${0.1 * idx}s`}}>
                        <Tr item={item} />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {cartItems.length > 0 && (
                <div className="modern-cart-summary animate-fade-in">
                  <div className="cart-total-section">
                    <div className="subtotal-row">
                      <span>Subtotal:</span>
                      <span className="cart__subtotal">${totalAmount}</span>
                    </div>
                    <p className="tax-info">Taxes and shipping will be calculated at checkout</p>
                    <div className="cart__page-btn">
                      <Link to="/pizzas" className="modern-order__btn secondary-btn">
                        Continue Shopping
                      </Link>
                      <Link to="/checkout" className="modern-order__btn primary-btn">
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              )}
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
    <div className="modern-cart-item">
      <div className="cart-item-image">
        <img src={image01} alt={title} />
      </div>
      <div className="cart-item-details">
        <h4 className="cart-item-title">{title}</h4>
        <div className="cart-item-info">
          <span className="cart-item-price">${price}</span>
          <span className="cart-item-quantity">Qty: {quantity}</span>
        </div>
      </div>
      <div className="cart-item-actions">
        <button className="delete-btn" onClick={deleteItem}>
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
