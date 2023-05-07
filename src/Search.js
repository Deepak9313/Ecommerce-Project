import React from "react";
const Search = () =>{
    function value(){
    let val = document.getElementById("select").value;
    console.log(val);
}
    return(
<div className="div1">
        <h2 id="head">Search For Shopping</h2>
        <select id="select" onChange={value}>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
        </select>
    </div>
    )
}
export default Search;