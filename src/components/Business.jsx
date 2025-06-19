import React from 'react';
import './Business.css'

//This component represents how a business(e.g a restaurant) in ravenous will be formatted and styled. The business has an image, name, address, etc
function Business({business}) {
  //The component uses props instead of hard-coded data:
  // const business = props.business; 

  return (
    <div className="Business">
      <img src={business.imageSrc} alt={business.name} />
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state} {business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3>{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;