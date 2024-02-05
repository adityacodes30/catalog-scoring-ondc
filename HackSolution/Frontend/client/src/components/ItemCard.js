import React from 'react';

const ItemCard = ({ name, description }) => {
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <p>{description}</p>
      
    </div>
  );
};

export default ItemCard;
