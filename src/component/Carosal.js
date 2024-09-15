import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
export default function Carosal() {
  return (
    <div>
      <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
  <div class="carousel-caption d-none d-md-block">
     <form className="d-flex" >
     <input type="search" class="form-control me-2 text-white bg-dark" placeholder="Search Your Special Food" aria-label="Search"/>
     <button className="btn bg-success" type="submit">Search</button>

     </form>
  </div>
    <div className="carousel-item active">
      <img
        className="d-block w-100"
        src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSVhJ46pOBVylg5_ZnYilSr14xSgJwSZ386f8C6hRKrA0MRiCpn2ozG-Bfcxa3bSdJ-"
        alt="First slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://t4.ftcdn.net/jpg/06/49/25/27/360_F_649252736_LK6ign50vHZicrNR6Fe2mSpmPDNupx6Y.jpg"
        alt="Second slide"
      />
    </div>
    <div className="carousel-item">
      <img
        className="d-block w-100"
        src="https://i.ytimg.com/vi/sUqHbrAqmnM/maxresdefault.jpg"
        alt="Third slide"
      />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
  );
}
