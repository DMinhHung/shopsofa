import React, { useEffect, useState } from "react";
import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";
import Description from "../../components/user/ProductDetail/Description";
import Info from "../../components/user/ProductDetail/Info";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userid");
  const [activeTab, setActiveTab] = useState("specification");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/usergetproducts/${userId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
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

  return (
    <>
      <div>
        <HeaderUser />
        {/* content */}
        <section className="py-5">
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={`http://localhost:8000/${product.image}`}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100vh",
                        margin: "auto",
                      }}
                      className="rounded-4 fit"
                      src={`http://localhost:8000/${product.image}`}
                    />
                  </a>
                </div>
                <div className="row row-cols-2 row-cols-sm-4 mb-3">
                  <div className="col mb-3">
                    <a
                      data-fslightbox="mygalley"
                      className="border rounded-2"
                      target="_blank"
                      data-type="image"
                      href={`http://localhost:8000/${product.imagep1}`}
                    >
                      <img
                        width={100}
                        height={100}
                        className="rounded-2"
                        src={`http://localhost:8000/${product.imagep1}`}
                      />
                    </a>
                  </div>
                  <div className="col mb-3">
                    <a
                      data-fslightbox="mygalley"
                      className="border rounded-2"
                      target="_blank"
                      data-type="image"
                      href={`http://localhost:8000/${product.imagep2}`}
                    >
                      <img
                        width={100}
                        height={100}
                        className="rounded-2"
                        src={`http://localhost:8000/${product.imagep2}`}
                      />
                    </a>
                  </div>
                  <div className="col mb-3">
                    <a
                      data-fslightbox="mygalley"
                      className="border rounded-2"
                      target="_blank"
                      data-type="image"
                      href={`http://localhost:8000/${product.imagep3}`}
                    >
                      <img
                        width={100}
                        height={100}
                        className="rounded-2"
                        src={`http://localhost:8000/${product.imagep3}`}
                      />
                    </a>
                  </div>
                  <div className="col mb-3">
                    <a
                      data-fslightbox="mygalley"
                      className="border rounded-2"
                      target="_blank"
                      data-type="image"
                      href={`http://localhost:8000/${product.imagep4}`}
                    >
                      <img
                        width={100}
                        height={100}
                        className="rounded-2"
                        src={`http://localhost:8000/${product.imagep4}`}
                      />
                    </a>
                  </div>
                </div>
                {/* thumbs-wrap.// */}
                {/* gallery-wrap .end// */}
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{product.name}</h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1" />
                      154 orders
                    </span>
                    <span className="text-success ms-2">In stock</span>
                  </div>
                  <div className="mb-3">
                    <span className="h5">${product.price} </span>
                    <span className="text-muted">/per box</span>
                  </div>
                  <p>{product.description}</p>
                  <div className="row">
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular</dd>
                    <dt className="col-3">Color</dt>
                    <dd className="col-9">Brown</dd>
                    <dt className="col-3">Material</dt>
                    <dd className="col-9">Cotton, Jeans</dd>
                    <dt className="col-3">Brand</dt>
                    <dd className="col-9">Reebook</dd>
                  </div>
                  <hr />
                  <a href="#" className="btn btn-warning shadow-0">
                    {" "}
                    Buy now{" "}
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary shadow-0 ms-3"
                    onClick={addToCart}
                  >
                    {" "}
                    <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                  </a>
                  {/* <a
                    href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                  >
                    {" "}
                    <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                  </a> */}
                </div>
              </main>
            </div>
          </div>
        </section>
        {/* content */}
        <section
          className="bg-light border-top py-4"
          style={{ marginBottom: "100px" }}
        >
          <div className="container">
            <div className="row gx-4">
              <div className="col-lg-8 mb-4">
                <div className="border rounded-2 px-3 py-2 bg-white">
                  {/* Pills navs */}
                  <ul
                    className="nav nav-pills nav-justified mb-3"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item d-flex" role="">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100 active"
                        // id="ex1-tab-1"
                        // data-mdb-toggle="pill"
                        // href="#ex1-pills-1"
                        role="tab"
                        // aria-controls="ex1-pills-1"
                        // aria-selected="true"
                        onClick={() => handleTabClick("specification")}
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100"
                        id="ex1-tab-2"
                        data-mdb-toggle="pill"
                        // href="#ex1-pills-2"
                        role="tab"
                        // aria-controls="ex1-pills-2"
                        aria-selected="false"
                        onClick={() => handleTabClick("warranty")}
                      >
                        Warranty info
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {activeTab === "specification" && <Description />}
                    {activeTab === "warranty" && <Info />}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="px-0 border rounded-2 shadow-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Similar items</h5>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/8.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Rucksack Backpack Large <br />
                            Line Mounts
                          </a>
                          <strong className="text-dark"> $38.90</strong>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/9.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Summer New Men's Denim <br />
                            Jeans Shorts
                          </a>
                          <strong className="text-dark"> $29.50</strong>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/10.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            {" "}
                            T-shirts with multiple colors, for men and lady{" "}
                          </a>
                          <strong className="text-dark"> $120.00</strong>
                        </div>
                      </div>
                      <div className="d-flex">
                        <a href="#" className="me-3">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/11.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            {" "}
                            Blazer Suit Dress Jacket for Men, Blue color{" "}
                          </a>
                          <strong className="text-dark"> $339.90</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <FooterUser />
        {/* Footer */}
      </div>
    </>
  );
};

export default ProductDetail;
