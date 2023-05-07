import React from "react";
import "./Slideshow.css";
import first from "./Slideshow_photos/12.png";
import second from "./Slideshow_photos/2.png";
import third from "./Slideshow_photos/3.png";
import four from "./Slideshow_photos/4.png";
import five from "./Slideshow_photos/5.png";
import six from "./Slideshow_photos/6.png";
const Slideshow = () => {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={first} className="d-block w-100 a1" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={second} className="d-block w-100 a1" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={third} className="d-block w-100 a1" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={four} className="d-block w-100 a1" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={five} className="d-block w-100 a1" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={six} className="d-block w-100 a1" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default Slideshow;