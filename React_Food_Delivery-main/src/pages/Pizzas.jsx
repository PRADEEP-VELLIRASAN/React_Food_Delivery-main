import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import "../styles/modern-pizzas.css";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(product => product.category))];
  
  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = filteredProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(filteredProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Reset page when filters change
  const handleSearch = (term) => {
    setSearchTerm(term);
    setPageNumber(0);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPageNumber(0);
  };

  return (
    <Helmet title="All Pizzas">
      <section className="modern-pizzas-section">
        <Container>
          {/* Header Section */}
          <div className="pizzas-header animate-fade-in">
            <h1 className="modern-section-title">Our Delicious Pizzas</h1>
            <p className="pizzas-subtitle">Discover our amazing collection of handcrafted pizzas</p>
          </div>

          {/* Filters Section */}
          <div className="pizzas-filters animate-fade-in">
            <div className="search-container">
              <div className="search-input-wrapper">
                <i className="ri-search-line search-icon"></i>
                <input
                  type="text"
                  placeholder="Search for your favorite pizza..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="modern-search-input"
                />
              </div>
            </div>
            
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="results-info animate-fade-in">
            <span className="results-count">
              {filteredProducts.length} pizza{filteredProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {/* Products Grid */}
          <Row className="pizzas-grid">
            {displayPage.length > 0 ? (
              displayPage.map((item, idx) => (
                <Col
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                  key={item.id}
                  className="mb-4"
                >
                  <div className="animate-card-in" style={{animationDelay: `${0.1 * idx}s`}}>
                    <ProductCard item={item} />
                  </div>
                </Col>
              ))
            ) : (
              <Col lg="12">
                <div className="no-results animate-fade-in">
                  <div className="no-results-icon">
                    <i className="ri-search-2-line"></i>
                  </div>
                  <h3>No pizzas found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button 
                    className="modern-order__btn"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setPageNumber(0);
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </Col>
            )}
          </Row>

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="modern-pagination-wrapper animate-fade-in">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={<><i className="ri-arrow-left-line"></i> Prev</>}
                nextLabel={<>Next <i className="ri-arrow-right-line"></i></>}
                containerClassName="modern-pagination"
                activeClassName="active"
                previousClassName="prev-btn"
                nextClassName="next-btn"
                forcePage={pageNumber}
              />
            </div>
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default Pizzas;
