import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import harrypotter from './images/harrypotter.png';
import avengers from './images/avengers.png';
import spiderman from './images/spiderman.png';
import dragon from './images/dragon.png';


const Carousel = () => {
  return (
    <>
        <div>
            <h1 style={{textAlign:"center"}}>Movie Ticket Booking</h1>
        </div>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        </div>
        
        <div className="carousel-inner container-fluid">
            <div className="carousel-item active">
            <img src={harrypotter} alt="harry Potter" className="d-block img-fluid" style={{width:"100%",height:"400px"}}/>
            </div>
            <div className="carousel-item">
            <img src={avengers} alt="Avengers" className="d-block img-fluid" style={{width:"100%",height:"400px"}}/>
            </div>
            <div className="carousel-item">
            <img src={spiderman} alt="Spider Man" className="d-block img-fluid" style={{width:"100%",height:"400px"}}/>
            </div>
             <div className="carousel-item">
            <img src={dragon} alt="Dragon" className="d-block img-fluid" style={{width:"100%",height:"400px"}}/>
            </div>
            <div className="carousel-item">
            <img src={harrypotter} alt="Harry Potter" className="d-block img-fluid" style={{width:"100%",height:"400px"}}/>
            </div>
        </div>

        {/* <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button> */}
        </div>

    </>
  )
}
export default Carousel;