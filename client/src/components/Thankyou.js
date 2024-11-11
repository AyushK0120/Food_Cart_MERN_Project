import React from "react";
import NewNav from "./NewNav";
import ThankYouCard from "./Images/ThankYouCard.png";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Footer from "./Footer";

export default function Thankyou() {
  return (
    <div>
      <div>
        {" "}
        <NewNav />
      </div>
      <div className="card card-s">
        <img className="imgs" src={ThankYouCard} alt="Thank You" />
        <div className="card-body"></div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}