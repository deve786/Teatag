import React from "react";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

function Home() {
  return (
    <div className="bg-secondary">
      
      <div>
        <Navbar/>
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Cards/><Cards/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
