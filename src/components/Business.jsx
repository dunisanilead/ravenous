import React from "react";
import './Business.css';

const businessImage = {
 src: 'src/assets/Romans-Pizza-Logo.jpg',
 alt: 'roman-pizza',
 width: '250px',
 height: '250px'
}

function Business() {
  return (
   <div>
     <img 
       src={businessImage.src}
       alt={businessImage.alt} 
       width={businessImage.width}
       height={businessImage.height}/>

     <div className="name"><h3>Roman's Pizza</h3></div>

     <div className="business-details">
      <div className="business-address">
        <p>Pretorious St</p>
        <p>Pretoria</p>
        <p>Gauteng 0964</p>
      </div>

      <div className="business-info">
        <p><strong>ITALIAN</strong></p>
        <p>4.0 stars</p>
        <p>60 reviews</p>
      </div>
     </div>

   </div>
  )
}
export default Business; 
