import React, { useEffect, useState } from "react";
import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userid");

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
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    const token = localStorage.getItem("usertoken");
    console.log(token);
    axios
      .post(
        `http://localhost:8000/api/add-to-cart`,
        {
          productId: product.id,
          // userId: userId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Product added to cart:", response.data);
        navigate("/shoppingcart");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };
  // console.log(addToCart);

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
                src={`http://localhost:8000/${product.image}`}
                className="img-product"
                alt="Cinque Terre"
                width="400"
                height="500"
              />
              <div className="row mt-3">
                {/* Cố định 4 ảnh nhỏ */}
                <div className="col-3">
                  <img
                    src={`http://localhost:8000/${product.imagep1}`}
                    alt="Small Image 1"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={`http://localhost:8000/${product.imagep2}`}
                    alt="Small Image 2"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={`http://localhost:8000/${product.imagep3}`}
                    alt="Small Image 3"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={`http://localhost:8000/${product.imagep4}`}
                    alt="Small Image 4"
                    className="img-thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="title">{product.name}</p>
              <p>Mã:</p>
              <p>Kích thước:</p>
              <p>Màu sắc:</p>
              <p>Chất liệu:</p>
              <p>Bảo hành:</p>
              <div className="row price">
                <div className="col-12 col-xs-12">
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="row button">
                <div className="col-4">
                  <button className="btn-mh" type="button" onClick={addToCart}>
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="col-4">
                  <button className="btn-mh" type="button">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="description-content-between mt-5">
            <h3 className="text-center">Mô Tả</h3>
            <div className="description-body">
              <div className="Description">
                <h4>Thông tin {product.name}</h4>
                <p>
                  Thiết kế theo phong cách mới lạ kết hợp với phần tựa đầu dày
                  7cm, rộng 31cm tạo cảm giác thoải mái dễ chịu cho người ngồi
                  tựa đầu. Phần nệm ngồi bằng mút thoáng khí tạo sự êm nhẹ thoải
                  mái và tốt cho hệ thống tim mạch. Phần lưng thiết kế vải lưới
                  vô cùng thoáng khí. Phần tay vịn thiết kế hình vòng cung tự
                  nhiên giúp người ngồi không bị gò bó. Kích thước 60 x 65 x
                  108-118CM Màu sắc đen
                </p>
              </div>
              <div className="Ưu diểm">
                <h4>Ưu điểm nổi bật của {product.name}</h4>
                <p>
                  Thiết kế hiện đại, sang trọng Piston, gối lưng, tựa đầu đều có
                  thể tùy chỉnh để có thể điều chỉnh độ cao thấp Ngả lưng đến
                  155° để có thể nghỉ ngơi thư giãn, hay ngủ luôn tại bàn làm
                  việc. Ghế Lưới ngả lưng văn phòng, game phù hợp với những dân
                  văn phòng, các bạn thường xuyên làm việc với máy tính hoặc các
                  game thủ…
                </p>
              </div>
              <div className="Chi tiết">
                <h4>Chi tiết {product.name}</h4>
                <ul>
                  <li>Kích thước: Rộng 53cm – sâu 58cm</li>
                  <li>
                    Chất liệu: Nhựa PVC, Lưng lưới cotton, đệm mút. Chân nhựa
                    hoặc thép cường lực mạ crom
                  </li>
                  <li>
                    Kiểu dáng: Loại ghế xoay nhiều chức năng: ngả lưng, gác chân
                  </li>
                  <li>
                    Màu sản phẩm: màu đen - Chức năng Xoay: có - Nâng hạ: có -
                    Ngả lưng: 155°
                  </li>
                </ul>
              </div>
              <div className="Thông số">
                <h4>Thông số</h4>
                <div className="row">
                  <div className="col-md-3">
                    <p>Kích thước</p>
                    <p>Màu sắc</p>
                    <p>Chất liệu</p>
                    <p>Bảo hành</p>
                  </div>
                  <div className="col-md-9">
                    <p>53cm x 58cm</p>
                    <p>Đen</p>
                    <p>Nhựa PVC, Lưng lưới cotton, đệm mút</p>
                    <p>12 tháng</p>
                  </div>
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
