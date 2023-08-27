import React from "react";

function Cards(props) {
  let options = props.options;

  let priceOption = Object.keys(options || {});
  
  return (
    <div>
      <div className="card m-2" style={{ width: "18rem" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
          style={{ height: "230px"}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          
          <select>
            {Array.from(Array(10), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2">
            {priceOption.map((data) => (
              <option key={data} value={data}>
                {data}    
              </option>
            ))}
          </select>
          
          <div className="d-inline fs-5 ">Total Price</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
