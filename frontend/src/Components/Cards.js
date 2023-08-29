import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

function Cards(props) {

  let dispatch=useDispatchCart()
  let options = props.options;
  const priceRef=useRef()
  let data=useCart();
  let priceOption = Object.keys(options || {});
  const [qty, setQty] = useState("1")
  const [size, setSize] = useState("")
  const handleAddtoCart=async()=>{
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice ,qty:qty,size:size})
    console.log(data)
  }
 
  let finalPrice= qty* parseInt(options[size]) ;

  useEffect(() => {
   setSize(priceRef.current.value)
  }, [])
  
  return (
    <div>
      <div className="card m-2" style={{ width: "18rem" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "230px"}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          
          <select onChange={(e)=>setQty(e.target.value)}>
            {Array.from(Array(10), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
            {priceOption.map((data) => (
              <option key={data} value={data}>
                {data}    
              </option>
            ))}
          </select>
          
          <div className="d-inline fs-5 ">${finalPrice}</div>
          <hr/>
          <div>
            <button className="btn btn-success" onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
