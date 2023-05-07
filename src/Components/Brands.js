import React from "react";
import one from "./Brands/1.jpg";
import second from "./Brands/2.jpg";
import third from "./Brands/3.png";
import four from "./Brands/4.png";
import five from "./Brands/5.png";
import six from "./Brands/5 (1).png";
import six1 from "./Brands/6.png";
import seven from "./Brands/7.png";
import eight from "./Brands/8.png";
import video from "./Brands/card2.mp4";
import google from "./Brands/google.png";
import apple from "./Brands/apple.png";
import pay from "./Brands/pay.png";
import "./Brands.css";
const Brands = () =>{
    return(
    <>
        <div className="contain example">
            <img src={one} alt="..." />
            <img src={second}  alt="..."/>
            <img src={third}  alt="..."/>
            <img src={eight}  alt="..."/>
            <img src={five}  alt="..."/>
            <img src={six}  alt="..."/>
            <img src={seven}  alt="..."/>
            <img src={six1}  alt="..."/>
            <img src={four}  alt="..."/>
        </div>
        <div className="cards">
            <div className="image">
            </div>
            <div className="desc">
                <h2 className="head1">Your beautiful home needs a perfect companion.</h2>
                <p className="para">A variety of furniture is perfectly made to make you feel happy. The joy of buying furniture is not compromised here. Creating the best furniture according to your preferences.</p>
            </div>
        </div>
        <div className="cards">
        <div className="desc1">
            <ul className="list">
                <li><h2 className="head">Up to 15 Hours of Audio Excellence</h2></li>
                <li><h2 className="head">HD Immersive Audio</h2></li>
                <li><h2 className="head">Adaptive Ear Cups and Headband</h2></li>
                </ul>
            </div>
            <div className="card2">
                <video src={video} muted autoPlay loop className="image1"></video>
            </div>
        </div><hr color="black"/>
        <div className="footer">
            <div className="payment">
                <div className="app">
                    <h2>Download App</h2>
                    <div className="play">
                        <a href="/"><img src={google} alt="..."/></a>
                        <a href="/"><img src={apple} alt="..."/></a>
                    </div>
                </div>
                <div className="pay">
                    <h3>We Accept</h3>
                    <img src={pay} alt="..."/>
                </div>
            </div>
            <div className="base">
                @Theme created by Deepak@ 
            </div>
        </div>
    </>);
}
export default Brands;