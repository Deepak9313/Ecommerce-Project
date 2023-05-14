import React from "react";
import "./Search.css";
import image from "./image.gif";
const Search = () =>{
    function value(){
    let val = document.getElementById("select").value;
    console.log(val);
}
    return(
<div className="div1">
    
    <img src={image} className="image2" alt="image is not here"/>
        <h2 id="heading2">Search For Shopping</h2>
        <select id="select1" onChange={value}>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
        </select>
    </div>
    )
}
export default Search;