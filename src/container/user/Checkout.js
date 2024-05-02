import React, { useEffect, useState } from "react";
import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";
import axios from "axios";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    const token = localStorage.getItem("usertoken");
    axios
      .get("http://localhost:8000/api/add-to-cart-get-products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartItems(response.data);
        calculateCartTotal(response.data);
        onCreateOrder(response.data);
        savePayPalDataToServer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shopping cart data:", error);
      });
  };

  const calculateCartTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setCartTotal(total);
  };

  const placeOrder = () => {
    const token = localStorage.getItem("usertoken");
    const userId = localStorage.getItem("userid");
    const productIds = cartItems.map((item) => item.id);
    const orderData = {
      userId: userId,
      productIds: productIds,
      date: new Date().toISOString(),
    };

    axios
      .post("http://localhost:8000/api/placeorder", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Order placed successfully:", response.data);
        window.location = "/thanks";
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (items, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "100.00",
            currency_code: currency,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      savePayPalDataToServer(details);
      alert(`Transaction completed by ${details.payer.name.given_name}`);
    });
  };

  const savePayPalDataToServer = (items, details) => {
    const token = localStorage.getItem("usertoken");
    console.log(items);
    const paypalData = {
      product_name: items.product_name,
      quantity: items.quantity,
      amount: items.price,
      currency: currency,
      payer_name: items.user_name,
      payer_email: items.email,
      payment_status: "COMPLETED",
      payment_method: "PayPal",
    };

    axios
      .post("http://localhost:8000/api/paypal", paypalData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("PayPal data saved successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error saving PayPal data:", error);
      });
  };

  return (
    <div>
      <HeaderUser />
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Checkout</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Returning customer? <a href="#">Click here</a> to login
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              {cartItems.length > 0 && (
                <div className="p-3 p-lg-5 border bg-white">
                  <div className="form-group">
                    <label htmlFor="c_country" className="text-black">
                      Country <span className="text-danger">*</span>
                    </label>
                    <select id="c_country" className="form-control">
                      <option value={1}>Select a country</option>
                      <option value={2}>Bangladesh</option>
                      <option value={3}>Algeria</option>
                      <option value={4}>Afghanistan</option>
                      <option value={5}>Ghana</option>
                      <option value={6}>Albania</option>
                      <option value={7}>Bahrain</option>
                      <option value={8}>Colombia</option>
                      <option value={9}>Dominican Republic</option>
                    </select>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_fname"
                        name="c_fname"
                        value={cartItems[0].user_name}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_lname"
                        name="c_lname"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_companyname" className="text-black">
                        Company Name{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_companyname"
                        name="c_companyname"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_address" className="text-black">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_address"
                        name="c_address"
                        placeholder="Street address"
                        value={cartItems[0].address}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_state_country" className="text-black">
                        State / Country <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_state_country"
                        name="c_state_country"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_postal_zip" className="text-black">
                        Posta / Zip <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_postal_zip"
                        name="c_postal_zip"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label htmlFor="c_email_address" className="text-black">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_email_address"
                        name="c_email_address"
                        value={cartItems[0].email}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_phone" className="text-black">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_phone"
                        name="c_phone"
                        placeholder="Phone Number"
                        value={cartItems[0].phone}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="c_create_account"
                      className="text-black"
                      data-bs-toggle="collapse"
                      href="#create_an_account"
                      role="button"
                      aria-expanded="false"
                      aria-controls="create_an_account"
                    >
                      <input
                        type="checkbox"
                        defaultValue={1}
                        id="c_create_account"
                      />{" "}
                      Create an account?
                    </label>
                    <div className="collapse" id="create_an_account">
                      <div className="py-2 mb-4">
                        <p className="mb-3">
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <div className="form-group">
                          <label
                            htmlFor="c_account_password"
                            className="text-black"
                          >
                            Account Password
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="c_account_password"
                            name="c_account_password"
                            placeholder
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="c_ship_different_address"
                      className="text-black"
                      data-bs-toggle="collapse"
                      href="#ship_different_address"
                      role="button"
                      aria-expanded="false"
                      aria-controls="ship_different_address"
                    >
                      <input
                        type="checkbox"
                        defaultValue={1}
                        id="c_ship_different_address"
                      />{" "}
                      Ship To A Different Address?
                    </label>
                    <div className="collapse" id="ship_different_address">
                      <div className="py-2">
                        <div className="form-group">
                          <label
                            htmlFor="c_diff_country"
                            className="text-black"
                          >
                            Country <span className="text-danger">*</span>
                          </label>
                          <select id="c_diff_country" className="form-control">
                            <option value={1}>Select a country</option>
                            <option value={2}>Bangladesh</option>
                            <option value={3}>Algeria</option>
                            <option value={4}>Afghanistan</option>
                            <option value={5}>Ghana</option>
                            <option value={6}>Albania</option>
                            <option value={7}>Bahrain</option>
                            <option value={8}>Colombia</option>
                            <option value={9}>Dominican Republic</option>
                          </select>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <label
                              htmlFor="c_diff_fname"
                              className="text-black"
                            >
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_fname"
                              name="c_diff_fname"
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="c_diff_lname"
                              className="text-black"
                            >
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_lname"
                              name="c_diff_lname"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-12">
                            <label
                              htmlFor="c_diff_companyname"
                              className="text-black"
                            >
                              Company Name{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_companyname"
                              name="c_diff_companyname"
                            />
                          </div>
                        </div>
                        <div className="form-group row  mb-3">
                          <div className="col-md-12">
                            <label
                              htmlFor="c_diff_address"
                              className="text-black"
                            >
                              Address <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_address"
                              name="c_diff_address"
                              placeholder="Street address"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <label
                              htmlFor="c_diff_state_country"
                              className="text-black"
                            >
                              State / Country{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_state_country"
                              name="c_diff_state_country"
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="c_diff_postal_zip"
                              className="text-black"
                            >
                              Posta / Zip <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_postal_zip"
                              name="c_diff_postal_zip"
                            />
                          </div>
                        </div>
                        <div className="form-group row mb-5">
                          <div className="col-md-6">
                            <label
                              htmlFor="c_diff_email_address"
                              className="text-black"
                            >
                              Email Address{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_email_address"
                              name="c_diff_email_address"
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="c_diff_phone"
                              className="text-black"
                            >
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_phone"
                              name="c_diff_phone"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c_order_notes" className="text-black">
                      Order Notes
                    </label>
                    <textarea
                      name="c_order_notes"
                      id="c_order_notes"
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Write your notes here..."
                      defaultValue={""}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <label htmlFor="c_code" className="text-black mb-3">
                      Enter your coupon code if you have one
                    </label>
                    <div className="input-group w-75 couponcode-wrap">
                      <input
                        type="text"
                        className="form-control me-2"
                        id="c_code"
                        placeholder="Coupon Code"
                        aria-label="Coupon Code"
                        aria-describedby="button-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-black btn-sm"
                          type="button"
                          id="button-addon2"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.product_name}
                              <strong className="mx-2">x</strong>
                              {item.quantity}
                            </td>
                            <td>${item.price * item.quantity}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Cart Subtotal</strong>
                          </td>
                          <td className="text-black">
                            ${cartTotal.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td className="text-black font-weight-bold">
                            <strong>${cartTotal.toFixed(2)}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0">
                        <a
                          className="d-block"
                          data-bs-toggle="collapse"
                          href="#collapsebank"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapsebank"
                        >
                          Direct Bank Transfer
                        </a>
                      </h3>
                      <div className="collapse" id="collapsebank">
                        <div className="py-2">
                          <p className="mb-0">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0">
                        <a
                          className="d-block"
                          data-bs-toggle="collapse"
                          href="#collapsecheque"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapsecheque"
                        >
                          Cheque Payment
                        </a>
                      </h3>
                      <div className="collapse" id="collapsecheque">
                        <div className="py-2">
                          <p className="mb-0">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-5">
                      <h3 className="h6 mb-0">
                        <div className="checkout">
                          {isPending ? (
                            <p>LOADING...</p>
                          ) : (
                            <>
                              <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={(data, actions) =>
                                  onCreateOrder(data, actions)
                                }
                                onApprove={(data, actions) =>
                                  onApproveOrder(data, actions)
                                }
                              />
                            </>
                          )}
                        </div>
                      </h3>
                      <div className="collapse" id="collapsepaypal">
                        <div className="py-2">
                          <p className="mb-0">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-black btn-lg py-3 btn-block"
                        onClick={placeOrder}
                      >
                        Place Order
                      </button>
                    </div>
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

export default Checkout;
