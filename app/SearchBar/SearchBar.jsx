import { useState, useEffect } from "react"
import "./SearchBar.css"


export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData() {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        //.then(result => console.log(result))
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                //return JSX
                return (<div className="prodStyle" key={index}>
                    <p className="productText"style={{fontSize:".75rem"}}>{product.title}</p>
                    <p className="productText">${product.price}</p>
                    <img style={{width: "100px"}} src={product.image} alt={product.title} />
                </div>)
            })
            setFilteredProducts(currentFilter)
        }) 
    }
    useEffect(fetchAPIData, []) // on page load, call fetchAPIData
    
    
    function handleChange(event) {
        setSearchString(event.target.value)
    }
    
    return <div>
        
        <input type="text" value={searchString} onChange={handleChange} />
        <div style= {{display: "flex", flexFlow: "row wrap"}}>{filterProducts}</div>    
    </div>
  }