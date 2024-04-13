import React from "react";
import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";

const ProductDetail = () => {
    return (
        <div>
            <HeaderUser />
            <div className="product-section">
                <div className="container">
                    <div className="row product-content">
                        <div className="col-lg-5">
                            <img src="https://i.pinimg.com/564x/10/50/d2/1050d2b61761ed89b5be6b19acc21fad.jpg" className="img-product" alt="Cinque Terre" width="400" height="500"/> 
                            
                        </div>
                        <div className="col-lg-7">
                            <p className="title">Ghế bành đơn sofa khung gỗ tự nhiên cao cấp</p>
                            <div className="row price">
                                <div className="col-12 col-xs-12">
                                    <p>100.000đ</p>
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
                                    <button className="btn btn-AddToShoppingCart" type="button">Thêm vào giỏ hàng</button>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-BuyNow" type="button">Mua ngay</button>
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

export default ProductDetail