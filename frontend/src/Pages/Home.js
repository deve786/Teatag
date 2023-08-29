import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Home() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
      // console.log(response[0], response[1]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-secondary">
      <div>
        <Navbar />
      </div>
      <div>
      <div className="carouselBanner" >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-caption" style={{zIndex:"10"}}>
            <div className="d-flex justify-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active " style={{objectFit:"contain !important" }}>
            <img
              src="https://source.unsplash.com/900x700/?burger"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(20%)" }}
            />
          </div>
          <div className="carousel-item" style={{objectFit:"contain !important" }}>
            <img
              src="https://source.unsplash.com/900x700/?pastry"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(20%)" }}
            />
          </div>
          <div className="carousel-item" style={{objectFit:"contain !important" }}>
            <img
              src="https://source.unsplash.com/900x700/?shawarma"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(20%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-4 m-2">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== []
                  ? foodItem
                      .filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                      .map((filterItem) => {
                        // Check if options exist and are not empty
                        
                        const options =
                          filterItem.option && filterItem.option.length > 0
                            ? filterItem.option[0]
                            : null;
                           

                        return (
                          <div key={filterItem._id} className="col-12 col-md-6 col-lg-3">
                            <Cards
                              foodItem={filterItem}
                              options={options}
                              
                            />
                          </div>
                        );
                      })
                  : <div>No such Data</div>}
              </div>
            )})
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
