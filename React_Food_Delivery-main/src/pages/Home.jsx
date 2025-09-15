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
      <section style={{background: "linear-gradient(90deg, #f8fafc 60%, #fff 100%)", padding: "48px 0 32px 0"}}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div style={{padding: "0 24px"}}>
                <h5 style={{fontSize: "1.25rem", color: "#ff4c4c", fontWeight: 700, marginBottom: "18px", letterSpacing: "1px"}}>Easy order & fast delivery</h5>
                <h1 style={{fontSize: "2.8rem", fontWeight: 800, marginBottom: "28px", lineHeight: 1.1, color: "#222"}}>
                  <span style={{color: "#ff4c4c"}}>Enjoy</span> your favorite Pizza
                </h1>
                <Link to="/pizzas" style={{textDecoration: "none"}}>
                  <button style={{
                    background: "#ff4c4c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "32px",
                    padding: "14px 36px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    boxShadow: "0 4px 16px rgba(255,76,76,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "background 0.2s"
                  }} onMouseOver={e => e.currentTarget.style.background = '#e13b3b'} onMouseOut={e => e.currentTarget.style.background = '#ff4c4c'}>
                    Menu <i className="ri-arrow-right-s-line" style={{fontSize: "1.5rem"}}></i>
                  </button>
                </Link>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={guyImg} alt="delivery-guy" style={{maxWidth: "420px", width: "100%", borderRadius: "24px", boxShadow: "0 6px 32px rgba(0,0,0,0.08)"}} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Show all pizza details below hero section */}
      <section>
        <Container style={{background: "#f8fafc", borderRadius: "24px", padding: "32px 0 24px 0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginTop: "32px"}}>
          <h2 className="mb-4 text-center" style={{fontWeight:800, fontSize:"2.2rem", color:"#ff4c4c", letterSpacing:"1px", marginBottom:"32px"}}>All Pizzas</h2>
          <Row>
            {products.map((product, idx) => (
              <Col lg="4" md="4" sm="6" xs="12" key={product.id} className="mb-4 d-flex align-items-stretch">
                <div className="modern-pizza-card" style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                  borderRadius: "20px",
                  padding: "24px 18px 18px 18px",
                  background: "#fff",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "420px",
                  transition: "box-shadow 0.2s, transform 0.2s"
                }}
                onMouseOver={e => {e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,76,76,0.18)'; e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';}}
                onMouseOut={e => {e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'none';}}
                >
                  <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "180px", overflow: "hidden", marginBottom: "18px", borderRadius: "16px", background: "#f8fafc"}}>
                    <img src={product.image01} alt={product.title} style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "12px"}} />
                  </div>
                  <h4 className="product__title mb-2 text-center" style={{fontWeight:700, fontSize:"1.25rem", color:"#222"}}>{product.title}</h4>
                  <p className="product__price mb-1 text-center" style={{fontWeight:600, color:"#ff4c4c", fontSize:"1.1rem"}}>Price: <span style={{fontWeight:700}}>${product.price}</span></p>
                  <p className="category mb-1 text-center" style={{color:"#888", fontSize:"0.98rem"}}>Category: <span style={{color:"#222"}}>{product.category}</span></p>
                  <p className="description__content mb-2 text-center" style={{fontSize:"0.97rem", color:"#555", minHeight:"48px"}}>{product.desc}</p>
                  <Link to={`/pizzas/${product.id}`} className="order__btn" style={{marginTop:"auto", width:"100%", textAlign:"center", background: "#ff4c4c", color: "#fff", borderRadius: "32px", padding: "10px 0", fontWeight:600, fontSize:"1rem", boxShadow: "0 2px 8px rgba(255,76,76,0.10)", border: "none", textDecoration: "none", transition: "background 0.2s"}}>View Details</Link>
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
