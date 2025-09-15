import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import products from "../assets/fake-data/products";
import "../styles/product-card.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Pizza
                </h1>
                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/pizzas">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Show all pizza details below hero section */}
      <section>
        <Container>
          <h2 className="mb-4 text-center">All Pizzas</h2>
          <Row>
            {products.map((product) => (
              <Col lg="3" md="4" sm="6" xs="12" key={product.id} className="mb-4 d-flex align-items-stretch">
                <div style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  padding: "18px",
                  background: "#fff",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "420px"
                }}>
                  <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "180px", overflow: "hidden", marginBottom: "12px"}}>
                    <img src={product.image01} alt={product.title} style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}} />
                  </div>
                  <h4 className="product__title mb-2 text-center" style={{fontWeight:600}}>{product.title}</h4>
                  <p className="product__price mb-1 text-center">Price: <span style={{fontWeight:500}}>${product.price}</span></p>
                  <p className="category mb-1 text-center">Category: <span>{product.category}</span></p>
                  <p className="description__content mb-2 text-center" style={{fontSize:"0.95rem", color:"#555"}}>{product.desc}</p>
                  <Link to={`/pizzas/${product.id}`} className="order__btn" style={{marginTop:"auto", width:"100%", textAlign:"center"}}>View Details</Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
