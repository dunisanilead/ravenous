import React from 'react';
import Business from './Business'; 
import './BusinessList.css'

function BusinessList() {
  const businesses = [
    {
      imageSrc: '/pizza.jpg',
      name: 'Pizza Palace',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 95
    },
    {
     imageSrc: '/pizza.jpg',
      name: 'Burger Barn',
      address: '456 Side St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      category: 'American',
      rating: 4.0,
      reviewCount: 120
    },
    {
      imageSrc: '/pizza.jpg',
      name: 'Sushi Spot',
      address: '789 Ocean Ave',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94101',
      category: 'Japanese',
      rating: 4.8,
      reviewCount: 200
    },
    {
     imageSrc: '/pizza.jpg',
     name: 'Sushi Spot',
     address: '789 Ocean Ave',
     city: 'San Francisco',
     state: 'CA',
     zipCode: '94101',
     category: 'Japanese',
     rating: 4.8,
     reviewCount: 200
   },
   {
    imageSrc: '/pizza.jpg',
    name: 'Sushi Spot',
    address: '789 Ocean Ave',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94101',
    category: 'Japanese',
    rating: 4.8,
    reviewCount: 200
  },
  {
   imageSrc: '/pizza.jpg',
   name: 'Sushi Spot',
   address: '789 Ocean Ave',
   city: 'San Francisco',
   state: 'CA',
   zipCode: '94101',
   category: 'Japanese',
   rating: 4.8,
   reviewCount: 200
 },
 {
  imageSrc: '/pizza.jpg',
  name: 'Sushi Spot',
  address: '789 Ocean Ave',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94101',
  category: 'Japanese',
  rating: 4.8,
  reviewCount: 200
},
  ];

  return (
    <div className="BusinessList">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;