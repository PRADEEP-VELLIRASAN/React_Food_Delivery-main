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
          <h2 className="mb-4">All Pizzas</h2>
          <Row>
            {products.map((product) => (
              <Col lg="4" md="6" sm="12" key={product.id} className="mb-4">
                <div className="product__card">
                  <img src={product.image01} alt={product.title} className="w-100 mb-3" />
                  <h4 className="product__title mb-2">{product.title}</h4>
                  <p className="product__price mb-1">Price: <span>${product.price}</span></p>
                  <p className="category mb-1">Category: <span>{product.category}</span></p>
                  <p className="description__content mb-2">{product.desc}</p>
                  <Link to={`/pizzas/${product.id}`} className="order__btn">View Details</Link>
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
