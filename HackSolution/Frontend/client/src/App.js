import React, { useState, useEffect } from 'react';
import './App.css';
import catalogItems from './items.js';
import ItemCard from './components/ItemCard.js';
import ResultCard from './components/ResultCard.js';
import axios from 'axios'; 

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      import(`./TestData/${selectedItem}.json`)
        .then((module) => {
          const data = module.default;
          // console.log(data);
          setItemDetails(data);
        })
        .catch((error) =>
          console.error(`Error loading ${selectedItem}.json`, error)
        );
    }
  }, [selectedItem]);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const sendRequest = () => {
    if (itemDetails) {
      axios.post('http://localhost:3000/api/itemsData', itemDetails) 
        .then(response => {
          console.log('Data sent successfully!', response.data);
        })
        .catch(error => {
          console.error('Error sending request:', error);
        });
    }
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
              className={`catalog-button ${item === selectedItem ? 'selected' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="sec-2">
          {selectedItem && itemDetails && (
            <ItemCard {...itemDetails} />
          )}
        </div>
      </div>

      <button className="sendRequesto" onClick={sendRequest}>SEND REQUEST</button> 

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
