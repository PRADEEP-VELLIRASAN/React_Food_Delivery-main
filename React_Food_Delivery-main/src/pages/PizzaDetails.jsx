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
        <div className="updateCartNotifiation">
          <span>You successfully updated your cart!</span>
        </div>
      )
      }

      <CommonSection title={title} />

      <section style={{background: "#f8fafc", borderRadius: "24px", padding: "32px 0 24px 0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginTop: "32px"}}>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                {[product.image01, product.image02, product.image03].map((img, idx) => (
                  img ? (
                    <div key={idx} style={{cursor: "pointer", borderRadius: "12px", overflow: "hidden", boxShadow: previewImg === img ? "0 2px 12px #ff4c4c55" : "0 1px 4px #ccc"}} onClick={() => setPreviewImg(img)}>
                      <img src={img} alt={title + "-" + (idx+1)} style={{width: "100%", height: "64px", objectFit: "cover"}} />
                    </div>
                  ) : null
                ))}
              </div>
            </Col>

            <Col lg="4" md="4">
              <div style={{background: "#fff", borderRadius: "18px", boxShadow: "0 4px 24px rgba(0,0,0,0.10)", padding: "18px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={previewImg} alt={title} style={{width: "100%", maxHeight: "260px", objectFit: "contain", borderRadius: "12px"}} />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div style={{background: "#fff", borderRadius: "18px", boxShadow: "0 4px 24px rgba(0,0,0,0.10)", padding: "24px 18px", minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h2 style={{fontWeight:800, fontSize:"2rem", color:"#222", marginBottom: "18px"}}>{title}</h2>
                <p style={{fontWeight:700, color:"#ff4c4c", fontSize:"1.15rem", marginBottom: "8px"}}>Price: <span style={{fontWeight:700}}>${price}</span></p>
                <p style={{color:"#888", fontSize:"1rem", marginBottom: "18px"}}>Category: <span style={{color:"#222"}}>{category}</span></p>
                <button onClick={addItem} style={{background: "#ff4c4c", color: "#fff", border: "none", borderRadius: "32px", padding: "14px 0", fontWeight:600, fontSize:"1.1rem", width: "100%", boxShadow: "0 2px 8px rgba(255,76,76,0.10)", marginBottom: "12px", transition: "background 0.2s"}}>
                  {cartProducts.find(item => item.id === id) ? 'Update Cart' : 'Add to Cart'}
                </button>
                <div style={{marginTop: "12px"}}>
                  <h5 style={{fontWeight:700, color:"#222", marginBottom: "8px"}}>Extra Ingredients</h5>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                    {(Object.values(ExtraIngredients)).map((ingredient) => {
                      return (
                        <ExtraIngredient isChecked={extraIngredients.includes(ingredient)}  key={ingredient} onSelect={ingredient => updateExtraIngredients(ingredient)} ingredient={ingredient}></ExtraIngredient>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="12" style={{marginTop: "32px"}}>
              <div style={{background: "#fff", borderRadius: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "24px 18px"}}>
                <h5 style={{fontWeight:700, color:"#222", marginBottom: "8px"}}>Description</h5>
                <div style={{fontSize:"1.05rem", color:"#555"}}>
                  <p>{desc}</p>
                </div>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 style={{fontWeight:800, fontSize:"1.5rem", color:"#ff4c4c", marginBottom: "18px"}}>You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PizzaDetails;
