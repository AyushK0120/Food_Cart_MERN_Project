import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import Thankyou from "../components/Thankyou";

export default function MyOrder() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState([]);

  let data = useCart();
  let dispatch = useDispatchCart();

  const Thankyou= () => {
    navigate("/Thankyou");
  };

  const PayOnline = () => {
    navigate("/PayOnline");
  };

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Order Data:", data);
        setOrderData(data.orderData);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orderData.length !== 0 && orderData.order_data ? (
            orderData.order_data.map((arrayData, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div
                  className="card mt-3"
                  style={{ width: "16rem", maxHeight: "360px" }}
                >
                  {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                  <div className="card-body">
                    <h5 className="card-title">{arrayData.name}</h5>
                    <div
                      className="container w-100 p-0"
                      style={{ height: "38px" }}
                    >
                      <span className="m-1">{arrayData.qty}</span>
                      <span className="m-1">{arrayData.size}</span>
                      <span className="m-1">{arrayData.Order_date}</span>
                      <div
                        className="d-inline ms-2 h-100 w-20 fs-5"
                        style={{ color: "red" }}
                      >
                        {arrayData.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="m-5 w-100 text-center fs-3">No Orders Found!</div>
          )}

          <div>
            <button className="btn bg-success mt-5" onClick={PayOnline}>
              Pay Online
            </button>
          </div>

          <div>
            <button
              className="btn bg-success mt-5"
              onClick={Thankyou}
            >
              Cash On Delivery
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}