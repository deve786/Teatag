import React from "react";

function Carousel() {
  return (
    <div className="carouselBanner" >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-caption" style={{zIndex:"10"}}>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
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
  );
}

export default Carousel;
