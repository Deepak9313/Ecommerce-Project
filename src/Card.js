import React, { useState } from "react";
import "./Card.css";
const Card = (props) => {
    let [count,newcount] = useState(0);
    let myvar = "Counter";
    const increment = () =>{
        newcount((c)=>c+1);
    }
    return (<>
        <div className="card ani" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}.....</p>
                <a href="/" className="btn btn-success" >Buy Now</a>
                <button className="btn btn-dark button" onClick={increment}>Add to cart</button>
            </div>
        </div>
    </>)
}
export default Card;