import React,{useState,useEffect} from "react";
import "./Categories.css";
import Card from "./Card";
import Search from "./Search";
import InfiniteScroll from "react-infinite-scroll-component";
const Categories = ()=>{
   
    const [products,setproducts] = useState([]);
    let [limit,setlimit] = useState(10);
    let [skip,useskip] = useState(0);
    useEffect(()=>{
        async function fetchdata(){
        let url = `https://dummyjson.com/products?limit=10&skip=0`;
        let fetch1 = await fetch(url);
        let data = await fetch1.json();
        // console.log(data);
        setproducts(data.products);
    }
    fetchdata()},[]);
    const fetchmoredata = async() =>{
       setlimit(limit = limit + 10);
       useskip(skip = skip + 10);
        let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        let fetch1 = await fetch(url);
        let data1 = await fetch1.json();
        console.log("The limit is " + limit);
        console.log("The no of skip is "+skip);
        useskip(skip=skip.concat(skip+10) )
        setproducts(products,...data1.products);
    }
    // async componentDidUpdate(){
    //     let value = document.getElementById("select").value;
    //     let url = `https://dummyjson.com/products/category/${value}`;
    //     let fetch1 = await fetch(url);
    //     let data = await fetch1.json();
    //     console.log(data);
    //     this.setState({
    //         products : data.products
    //     })
    // }
    return(<>
    <Search/>
    <InfiniteScroll
        dataLength={products.length}
        next ={fetchmoredata}
        hasMore={false}
        loader={<h2>Loading...</h2>}
    >
    <div className="container1">
        {products.map((element)=>{
            return <div className="col-md-4" key={element.id}>
                <Card img={element.thumbnail} title={element.title?element.title:"hello"} desc={element.description.slice(0,40)}/>
                </div>
        })}
    </div>
    </InfiniteScroll>
    </>)
};
export default Categories;