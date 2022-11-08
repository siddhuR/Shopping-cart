import React, { useState} from 'react'
import { Link } from "react-router-dom";
export default function Mycart(props) {
    const [addToCart, newAddToCart] = useState(0)

    let cart = ()=> {
      let myCart=addToCart+1;
      newAddToCart(myCart);
    }

  return (
    <>
    
    <div className="shopping-cart" style={props.mystyle}>
        <span>Shopping Cart</span>
        <div className="count" style={props.style}>
           {addToCart}
        </div>
        <div className="cart" style={props.styleImg}>
          
        <Link to="/about" className="name" target="_blank"> <img src="image.png" style={{position:'relative', top:'-7px'}} alt="error" /></Link> 
           
        </div>
    </div>
    <div className="heading" style={props.headingStyle}>
       <span>Our items</span>
    </div>

    <div className="product-details" style={props.productStyle}>
      <div className="product-one" style={props.product} >
        <div className="div" style={props.backColor}><img src="tshirt.png" alt="error" width="300" height="400" style={{position:'relative', top:'-70px', left:'-13px',}} /></div>
         <p style={props.sizeContent}>Cotton Shirt</p>
         <div className="lorem" style={props.styleLorem}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
         <div className="price" style={props.stylePrice}>
          <span><b>Price:&nbsp;Rs.250</b>&nbsp;&nbsp;<span style={props.rupeesStyle}>Rs.300</span></span>
         </div>
          <div className="button" style={props.styleButton}><input type="Button" onClick={cart} value="Add To Cart" style={props.inputButton} /></div>
      </div>

      <div className="product-2" style={props.product}>
        <div className="div" style={props.backColor}><img src="white-tshirt.png" alt="error" width="270" height="280" style={{position:'relative', top:'3px'}} /></div>
         <p style={props.sizeContent}>White Tshirt</p>
         <div className="lorem" style={props.styleLorem}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
         <div className="price" style={props.stylePrice}>
          <span><b>Price:&nbsp;Rs.550</b>&nbsp;&nbsp;<span style={props.rupeesStyle}>Rs.600</span></span>
         </div>
          <div className="button" style={props.styleButton}><input type="Button" onClick={cart} value="Add To Cart" style={props.inputButton} /></div>
      </div>

        <div className="product-three" style={props.product}>
        <div className="div" style={props.backColor}><img src="red-tshirt.png" alt="error" width="300" height="400" style={{position:'relative', top:'-70px', left:'-13px',}} /></div>
         <p style={props.styleFeature}>Full Sleeves Tshirt</p>
         <div className="lorem" style={props.styleLorem}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
         <div className="price" style={props.stylePrice}>
          <span><b>Price:&nbsp;Rs.200</b>&nbsp;&nbsp;<span style={props.rupeesStyle}>Rs.250</span></span>
         </div>
          <div className="button" style={props.styleButton}><input type="Button" onClick={cart} value="Add To Cart" style={props.inputButton} /></div>
        </div>
    </div>
  

</>
  )
}
