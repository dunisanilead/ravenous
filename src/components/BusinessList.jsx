import React from "react"; 
import Business from "./Business";

const businessList = [
 {
   id: 1,
   name: "Roman's Pizza",
   address: "Pretorious St",
   city: "Pretoria",
   state: "Gauteng",
   zipCode: "0964",
   category: "Italian",
   rating: 4.0,
   reviewCount: 60,
   src: "src/assets/Romans-Pizza-Logo.jpg",
   alt: "roman-pizza",
   width: "250px",
   height: "250px"
 },
 {
   id: 2,
   name: "Bella Italia",
   address: "Sunset Blvd",
   city: "Cape Town",
   state: "Western Cape",
   zipCode: "8001",
   category: "Pizza",
   rating: 4.5,
   reviewCount: 89,
   src: "src/assets/Bella-Italia.jpg",
   alt: "bella-italia",
   width: "250px",
   height: "250px"
 }
];

function BusinessList() {
 return (
   <>
     {businessList.map((business) => (
       <Business key={business.id} business={business} />
     ))}
   </>
 );
}

export default BusinessList;