import React, { useState } from "react";
import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";

const ShoppingCart = () => {
    // Khai báo state cho số lượng của mỗi sản phẩm
    const [quantities, setQuantities] = useState({
        product1: 1,
        product2: 1
    });

    // Hàm xử lý giảm số lượng sản phẩm
    const decreaseQuantity = (productId) => {
        // Tạo một bản sao của đối tượng state
        const newQuantities = { ...quantities };
        // Giảm số lượng của sản phẩm
        if (newQuantities[productId] > 1) {
            newQuantities[productId] -= 1;
            // Cập nhật state mới
            setQuantities(newQuantities);
        }
    };

    // Hàm xử lý tăng số lượng sản phẩm
    const increaseQuantity = (productId) => {
        // Tạo một bản sao của đối tượng state
        const newQuantities = { ...quantities };
        // Tăng số lượng của sản phẩm
        newQuantities[productId] += 1;
        // Cập nhật state mới
        setQuantities(newQuantities);
    };

    const removeProduct = (productId) => {
        const newQuantities = { ...quantities };
        delete newQuantities[productId];
        setQuantities(newQuantities);
    };

    return (
        <>
            <div>
                <HeaderUser />
                {/* <!-- End Header/Navigation --> */}

                {/* <!-- Start Hero Section --> */}
                {/* (Phần hero section code đã bị rút gọn để tập trung vào vấn đề) */}
                {/* <!-- End Hero Section --> */}

                <div className="untree_co-section before-footer-section">
                    <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.keys(quantities).map((productId) => (
                                                <tr key={productId}>
                                                    <td className="product-thumbnail">
                                                        <img src={`images/${productId}.png`} alt="Image" className="img-fluid" />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">Product {productId.slice(-1)}</h2>
                                                    </td>
                                                    <td>$49.00</td>
                                                    <td>
                                                        <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-outline-black decrease" type="button" onClick={() => decreaseQuantity(productId)}>&minus;</button>
                                                            </div>
                                                            <input type="text" className="form-control text-center quantity-amount" value={quantities[productId]} readOnly />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-outline-black increase" type="button" onClick={() => increaseQuantity(productId)}>+</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>${(quantities[productId] * 49).toFixed(2)}</td>
                                                    <td><button className="btn btn-black btn-sm" onClick={() => removeProduct(productId)}>X</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterUser />
        </>
    );
};

export default ShoppingCart;
