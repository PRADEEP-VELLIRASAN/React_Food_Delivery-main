import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products;

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All Pizzas">
      <Container style={{background: "#f8fafc", borderRadius: "24px", padding: "32px 0 24px 0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginTop: "32px"}}>
        <h2 className="mb-4 text-center" style={{fontWeight:800, fontSize:"2.2rem", color:"#ff4c4c", letterSpacing:"1px", marginBottom:"32px"}}>All Pizzas</h2>
        <Row>
          {displayPage.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="12"
              key={item.id}
              className="mb-4 mt-4 d-flex align-items-stretch"
            >
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
                  <img src={item.image01} alt={item.title} style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "12px"}} />
                </div>
                <h4 className="product__title mb-2 text-center" style={{fontWeight:700, fontSize:"1.25rem", color:"#222"}}>{item.title}</h4>
                <p className="product__price mb-1 text-center" style={{fontWeight:600, color:"#ff4c4c", fontSize:"1.1rem"}}>Price: <span style={{fontWeight:700}}>${item.price}</span></p>
                <p className="category mb-1 text-center" style={{color:"#888", fontSize:"0.98rem"}}>Category: <span style={{color:"#222"}}>{item.category}</span></p>
                <p className="description__content mb-2 text-center" style={{fontSize:"0.97rem", color:"#555", minHeight:"48px"}}>{item.desc}</p>
                <a href={`/pizzas/${item.id}`} className="order__btn" style={{marginTop:"auto", width:"100%", textAlign:"center", background: "#ff4c4c", color: "#fff", borderRadius: "32px", padding: "10px 0", fontWeight:600, fontSize:"1rem", boxShadow: "0 2px 8px rgba(255,76,76,0.10)", border: "none", textDecoration: "none", transition: "background 0.2s"}}>View Details</a>
              </div>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mt-4 mb-4">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={<span style={{color:'#ff4c4c',fontWeight:600}}>Prev</span>}
            nextLabel={<span style={{color:'#ff4c4c',fontWeight:600}}>Next</span>}
            containerClassName="paginationBttns"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
          />
        </div>
      </Container>
    </Helmet>
  );
};

export default Pizzas;
