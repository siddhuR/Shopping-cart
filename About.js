import React from "react";
//import { Link } from "react-router-dom";

export default function About(props) {
    
  return (
    <>
      <div className="shopping-cart" style={props.mystyle}>
        <span>Shopping Cart</span>
        <div className="count" style={props.style}>
         2
        </div>
        <div className="cart" style={props.styleImg}>
         
            <img
              src="image.png"
              style={{ position: "relative", top: "-7px" }}
              alt="error"
            />
          
        </div>
      </div>
      <div className="heading" style={props.headingStyle}>
        <span>You have ordered:</span>
      </div>

      <div className="main" style={props.styleMain}>
          <div className="box" style={props.styleBox}>
              <div><img src="tshirt.png" alt="error" width="300" height="400" style={{position: 'relative', top: '-80px'}} /></div>
          </div>
          <div className="head" style={props.styleHead}>
              <div>Cotton Shirt</div>
          </div>
          <div className="content" style={props.styleContent}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </div>
          <div className="price" style={props.priceStyle}>
              <div><b>Price: Rs.250</b></div>
          </div>
          <div>
              <input type="button" value="Removed" className="button" style={props.buttonStyle}/>
          </div>
      </div>

      <div className="main" style={props.styleMain}>
          <div className="box" style={props.styleBox}>
              <div><img src="red-tshirt.png" alt="error" width="300" height="400" style={{position: 'relative', top: '-80px'}} /></div>
          </div>
          <div className="head" style={props.styleHead}>
              <div>Full Sleeve Tshirt </div>
          </div>
          <div className="content" style={props.styleContent}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </div>
          <div className="price" style={props.priceStyle}>
              <div><b>Price: Rs.200</b></div>
          </div>
          <div>
              <input type="button"   value="Removed"  className="button" style={props.buttonStyle}/>
          </div>
      </div>
    </>
  );
}
