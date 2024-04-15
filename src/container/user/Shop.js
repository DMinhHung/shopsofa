import React, { useState, useEffect } from "react";
import axios from "axios";

import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";

import AddToCart from "../../assets/user/images/cross.svg";
import couchImage from "../../assets/user/images/couch.png";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/usergetproducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <HeaderUser />
        {/* End Header/Navigation */}
        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Shop</h1>
                  <p className="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <p>
                    <a href className="btn btn-secondary me-2">
                      Shop Now
                    </a>
                    <a href="#" className="btn btn-white-outline">
                      Explore
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img src={couchImage} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="untree_co-section product-section before-footer-section">
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <div className="col-12 col-md-4 col-lg-3 mb-5">
                  <a
                    className="product-item"
                    href={`/product-details/${product.id}`}
                  >
                    <img
                      src={`http://localhost:8000/images/${product.image}`}
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">{product.name}</h3>
                    <strong className="product-price">${product.price}</strong>
                    <span className="icon-cross">
                      <img src={AddToCart} className="img-fluid" />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Start Footer Section */}
        <FooterUser />
      </div>
    </>
  );
};

export default Shop;
