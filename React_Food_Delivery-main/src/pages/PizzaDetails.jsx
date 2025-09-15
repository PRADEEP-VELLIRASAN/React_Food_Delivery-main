import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ExtraIngredient from '../components/ExtraIngredient/ExtraIngredient.jsx'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useSelector } from "react-redux";

import "../styles/product-details.css";
import "../styles/product-card.css";
import "../styles/modern-product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";

const ExtraIngredients = {
	MUSHROOMS: "Mushrooms",
	ONION: "Onion",
	PEPPER: "Pepper",
	PINAPPLE: "Pinapple", 
  TUNA: "Tuna", 
  MEAT: "Meat", 
  CHEESE: "Cheese", 
  HOTSAUCE: "Hot Sauce", 
  CORN: "Corn"
}

const PizzaDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [isUpdateNotificationDisplayed, setIsUpdateNotificationDisplayed] = useState(false);
  const product = products.find((product) => product.id === id);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);

  
  useEffect(() => {
    const existingPizza = cartProducts.find(item => item.id === id);
    if(existingPizza) {
      setExtraIngredients(existingPizza.extraIngredients);
    } else {
      setExtraIngredients([]);
    }
  }, [cartProducts, id]);

  
  const addItem = () => {
    setIsUpdateNotificationDisplayed(true);
      setTimeout(function(){
        setIsUpdateNotificationDisplayed(false);
      },3000)
    
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
        extraIngredients
      })
      );

    };
    
    useEffect(() => {
      setPreviewImg(product.image01);
      window.scrollTo(0, 0);
    }, [product]);

    function updateExtraIngredients(ingredient) {
      if(extraIngredients.includes(ingredient)) {
        setExtraIngredients(extraIngredients.filter(item => item !== ingredient));
      } else {
        setExtraIngredients(previousState => [...previousState, ingredient]);
      }
    }

  return (
    <Helmet title="Product-details">
      {isUpdateNotificationDisplayed && (
        <div className="modern-notification animate-slide-down">
          <div className="notification-content">
            <i className="ri-check-line"></i>
            <span>Cart updated successfully!</span>
          </div>
        </div>
      )}

      <CommonSection title={title} />

      <section className="modern-product-details-section">
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="modern-product-gallery animate-fade-in">
                <h6 className="gallery-title">Gallery</h6>
                <div
                  className={`gallery-thumb ${previewImg === product.image01 ? 'active' : ''}`}
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="Preview 1" />
                </div>
                <div
                  className={`gallery-thumb ${previewImg === product.image02 ? 'active' : ''}`}
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="Preview 2" />
                </div>
                <div
                  className={`gallery-thumb ${previewImg === product.image03 ? 'active' : ''}`}
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="Preview 3" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="modern-product-main-img animate-scale-in">
                <img src={previewImg} alt={title} />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="modern-product-info animate-fade-in">
                <h1 className="modern-product-title">{title}</h1>
                <div className="price-category-section">
                  <div className="price-tag">
                    <span className="price-label">Price</span>
                    <span className="price-value">${price}</span>
                  </div>
                  <div className="category-badge">
                    <span className="category-label">Category</span>
                    <span className="category-value">{category}</span>
                  </div>
                </div>
                <button onClick={addItem} className="modern-order__btn add-to-cart-btn">
                  {cartProducts.find(item => item.id === id) ? (
                    <>
                      <i className="ri-refresh-line"></i>
                      Update Cart
                    </>
                  ) : (
                    <>
                      <i className="ri-shopping-cart-line"></i>
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </Col>

            <Col lg='12'>
              <div className="modern-ingredients-section animate-fade-in">
                <h3 className="ingredients-title">Customize Your Pizza</h3>
                <p className="ingredients-subtitle">Select extra ingredients to make it perfect</p>
                <div className="modern-ingredients-grid">
                  {(Object.values(ExtraIngredients)).map((ingredient) => {
                    return (
                      <ExtraIngredient 
                        isChecked={extraIngredients.includes(ingredient)}  
                        key={ingredient} 
                        onSelect={ingredient => updateExtraIngredients(ingredient)} 
                        ingredient={ingredient}
                      />
                    )
                  })}
                </div>
              </div>
            </Col>

            <Col lg="12">
              <div className="modern-description-section animate-fade-in">
                <h3 className="description-title">Description</h3>
                <div className="description-content">
                  <p>{desc}</p>
                </div>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <div className="modern-related-section">
                <h2 className="modern-section-title animate-fade-in">You might also like</h2>
              </div>
            </Col>

            {relatedProduct.map((item, idx) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <div className="animate-card-in" style={{animationDelay: `${0.1 * idx}s`}}>
                  <ProductCard item={item} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PizzaDetails;
