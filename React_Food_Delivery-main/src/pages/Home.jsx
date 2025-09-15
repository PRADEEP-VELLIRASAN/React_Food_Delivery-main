import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import guyImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import products from "../assets/fake-data/products";
import "../styles/product-card.css";
import "../styles/modern-home.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="modern-hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div className="modern-hero__content animate-fade-in">
                <h5 className="mb-3 modern-hero__subtitle">Easy order & fast delivery</h5>
                <h1 className="mb-4 modern-hero__title">
                  <span>Enjoy</span> your favorite Pizza
                </h1>
                <button className="modern-order__btn">
                  <Link to="/pizzas">
                    <span>Menu</span> <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="modern-hero__img animate-slide-in">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Show all pizza details below hero section */}
      <section className="modern-pizza-section">
        <Container>
          <h2 className="mb-4 text-center modern-section-title animate-fade-in">All Pizzas</h2>
          <Row>
            {products.map((product, idx) => (
              <Col lg="3" md="4" sm="6" xs="12" key={product.id} className="mb-4 d-flex align-items-stretch">
                <div className={`modern-product-card animate-card-in`} style={{animationDelay: `${0.1 * idx}s`}}>
                  <div className="modern-product-img">
                    <img src={product.image01} alt={product.title} />
                  </div>
                  <h4 className="modern-product-title mb-2 text-center">{product.title}</h4>
                  <p className="modern-product-price mb-1 text-center">Price: <span>${product.price}</span></p>
                  <p className="modern-product-category mb-1 text-center">Category: <span>{product.category}</span></p>
                  <p className="modern-product-desc mb-2 text-center">{product.desc}</p>
                  <Link to={`/pizzas/${product.id}`} className="modern-order__btn modern-view-btn">View Details</Link>
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
