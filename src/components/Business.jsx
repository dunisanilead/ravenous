import React from "react";
import './Business.css';



function Business({business}) {
  return (
   <div>
     <img 
       src={business.src}
       alt={business.alt} 
       width={business.width}
       height={business.height}/>

     <div className="name"><h3>{business.name}</h3></div>

     <div className="business-details">
      <div className="business-address">
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{business.zipCode}</p>
      </div>

      <div className="business-info">
        <p><strong>{business.category}</strong></p>
        <p><strong>{business.rating} stars</strong></p>
        <p>{business.reviewCount} reviews</p>
      </div>
     </div>

   </div>
  )
}
export default Business; 
