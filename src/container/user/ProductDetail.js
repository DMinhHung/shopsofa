import React, { useEffect, useState } from "react";
import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/usergetproducts/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        setLoading(false); // Đánh dấu rằng dữ liệu đã được tải
      });
  }, [id]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  //   console.log(product);
  return (
    <div>
      <HeaderUser />
      <div className="product-section">
        <div className="container">
          <div className="row product-content">
            <div className="col-lg-5">
              <img
                src={`http://localhost:8000/images/${product.image}`}
                className="img-product"
                alt="Cinque Terre"
                width="400"
                height="500"
              />
            </div>
            <div className="col-lg-7">
              <p className="title">{product.name}</p>
              <div className="row price">
                <div className="col-12 col-xs-12">
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="row material">
                <div className="col-2">
                  <p>Chất liệu:</p>
                </div>
                <div className="col-5">
                  <p>Gỗ hương tự nhiên</p>
                </div>
              </div>
              <div className="row product-size">
                <div className="col-3">
                  <p>Kích thước:</p>
                </div>
                <div className="col-4">
                  <p>1m x 1m x 1m</p>
                </div>
              </div>
              <div className="row button">
                <div className="col-4">
                  <button className="btn btn-AddToShoppingCart" type="button">
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="col-4">
                  <button className="btn btn-BuyNow" type="button">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="description-content-between">
            <span className="title-description">Mô tả chi tiết sản phẩm</span>
            <div className="description-body">
              <div className="row name">
                <label className="col-1">Chất liệu:</label>
                <div className="col-5">
                  <p>Gỗ hương tự nhiên</p>
                </div>
              </div>
              <div className="row size">
                <label className="col-2">Kích thước:</label>
                <div className="col-4">
                  <p>1m x 1m x 1m</p>
                </div>
              </div>
              <div className="row colour">
                <label className="col-1">Màu:</label>
                <div className="col-5">
                  <p>Đen</p>
                </div>
              </div>
              <div className="row description">
                <label className="col-1">Chi tiết:</label>
                <div className="col-5">
                  <p>Đa dạng, độc đáo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterUser />
    </div>
  );
};

export default ProductDetail;
