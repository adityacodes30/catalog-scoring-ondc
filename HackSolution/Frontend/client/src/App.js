import React from 'react';
import { useState } from 'react';
import './App.css';
import catalogItems from './items.js';
import ItemCard from './components/ItemCard.js';
import ResultCard from './components/ResultCard.js';
const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  
  return (
    <>
      <div className="navb">
        <div className="navb-text">Catalog Scoring Mechanism</div>
      </div>

      <div className="hero-sec">
        <div className="sec-1">
          {catalogItems.map((item, index) => (
            <button
              key={index}
              className="catalog-button"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="sec-2">
          {/* {selectedItem && (
            // <ItemCard {...itemDetailsData[selectedItem]} />
          )} */}
        </div>
      </div>

      <button className="sendRequesto">SEND REQUEST</button>

      <div className="wrap-1">
        <div className="head-001">REAL-TIME EVALUATION</div>
        <div className='r-card'>
        <ResultCard/>
        </div>
      </div>
    </>
  );
};


export default App;
