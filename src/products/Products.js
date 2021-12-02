import React from "react";

const Products = ({items = []}) =>{
  if (items.length<0){
    return <div>No Items found</div>
  }else {
    return <div>{items.map((item, index) =>{
            return <h4>{item}</h4>
    })}</div>
  }
}

export default Products
