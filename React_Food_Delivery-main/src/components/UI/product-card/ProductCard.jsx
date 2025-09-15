import React from "react";

import "../../../styles/product-card.css";

// import productImg from "../../../assets/images/product_2.1.jpg";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price, extraIngredients } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        extraIngredients
      })
    );
  };

    return (
      <div className="modern-product-card animate-card-in">
        <div className="modern-product-img">
          <img src={image01} alt="Pizza" />
        </div>
        <h4 className="modern-product-title mb-2 text-center">{title}</h4>
        <span className="modern-product-price mb-1 text-center">{price} €</span>
        <button className="modern-order__btn modern-view-btn" onClick={addToCart}>
          Add to Cart
        </button>
        <Link to={`/pizzas/${id}`} className="modern-order__btn modern-view-btn" style={{marginTop:'0.5rem'}}>
          View Details
        </Link>
      </div>
    );
};

export default ProductCard;
