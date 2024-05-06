import React from 'react'

export default function Slide() {
  return (
   
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://tse1.mm.bing.net/th?id=OIP.lo-pK574M6KTPhSDnZiQ0wHaD8&pid=Api&P=0&h=180"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://tse4.mm.bing.net/th?id=OIP.ZHPz7lFbgh3CZc4PfTlVBQHaFj&pid=Api&P=0&h=180"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://tse1.mm.bing.net/th?id=OIP.jRqT4z0lAb_-q3oGHgQl_gHaHa&pid=Api&P=0&h=180"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


  )
}
