import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import About from "./About";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App = () =>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
export default App;