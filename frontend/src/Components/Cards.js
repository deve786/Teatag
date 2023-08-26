import React from 'react'

function Cards() {
  return (
    <div>
        <div className="card m-2" style={{"width": "18rem"}}>
        <img src="https://source.unsplash.com/random/?tea" className="card-img-top" alt="..." style={{height:"300px"}} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <select>
            {Array.from(Array(10),(e,i)=>{
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
          </select>
          <select className="m-2">
            <option value="half">Half</option>
            <option value="half">Full</option>
          </select>
          <div className="d-inline fs-5 ">
            Total Price
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards