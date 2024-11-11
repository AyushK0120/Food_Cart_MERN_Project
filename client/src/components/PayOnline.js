import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PayOnline() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const navigate = useNavigate();

  const handlePayOnline = (e) => {
    e.preventDefault();
    // Dummy validation and payment processing
    if (cardNumber === "4111111111111111" && expiryDate === "12/25" && cvv === "123") {
      setPaymentStatus("Payment Successful!");
      setTimeout(() => navigate("/thankyou"), 2000); // Redirect after showing success message
    } else {
      setPaymentStatus("Payment Failed. Please check your card details.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Pay Online</h2>
      <form onSubmit={handlePayOnline}>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">Expiry Date (MM/YY)</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn bg-success mt-3">Pay Online</button>
      </form>
      {paymentStatus && <p className="mt-3">{paymentStatus}</p>}
    </div>
  );
}