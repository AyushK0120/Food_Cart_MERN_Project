import React from "react";
import "../App.css";

export default function AfterSlider() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-s-4 col-m-4 col-l-4 col-4-xl">
            <div className="container ">
              <div className="row">
                <div className="col-4 col-4-s col-4-m mt-5 mb-5">
                  <img
                    src="Images/Icon (1).png"
                    style={{ width: "60px" }}
                  ></img>
                </div>

                <div className="col-8 col-8-s col-8-m mt-5 mb-5">
                  <h4>Free Delivery</h4>
                  <p>When order over 300 Rs</p>
                </div>
              </div>
            </div>
          </div>
          {/* second Card */}
          <div className="col-4 col-s-4 col-m-4 col-l-4 col-4-xl">
            <div className="container ">
              <div className="row">
                <div className="col-4 col-4-s col-4-m mt-5 mb-5">
                  <img
                    src="Images/Icon (3).png"
                    style={{ width: "60px" }}
                  ></img>
                </div>

                <div className="col-8 col-8-s col-8-m mt-5 mb-5">
                  <h4> 24/7 Support</h4>
                  <p>Get support all day</p>
                </div>
              </div>
            </div>
          </div>
          {/* third card */}
          <div className="col-4 col-s-4 col-m-4 col-l-4 col-4-xl">
            <div className="container ">
              <div className="row">
                <div className="col-4 col-4-s col-4-m mt-5 mb-5">
                  <img
                    src="Images/Icon (2).png"
                    style={{ width: "60px" }}
                  ></img>
                </div>

                <div className="col-8 col-8-s col-8-m mt-5 mb-5">
                  <h4>
Refund
</h4>
                  <p>Get refund within 2 working days!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Block Headding */}

      <div className="container">
        <div className="row" >
            <div className="col-12">
                <h1 style={{textAlign:"center",color:"#f12711",}}> Our Products</h1>
                <hr style={{width:"80px",fontWeight:"900", marginLeft:"47%","color":"#fff"}}></hr>
                <p style={{textAlign:"center","color":"#fff",fontSize:"18px"}}>Nothing brings people together like good food</p>

            </div>

        </div>
      </div>
    </>
  );
}
