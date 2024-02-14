import React, { useState, useEffect } from 'react';
import './App.css';
import catalogItems from './items.js';
import ResultCard from './components/ResultCard.js';
import axios from 'axios';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setIsLoading(true);
      import(`./TestData/${selectedItem}.json`)
        .then((module) => {
          const data = module.default;
          console.log(data);
          setItemDetails(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(`Error loading ${selectedItem}.json`, error);
          setIsLoading(false);
        });
    }
  }, [selectedItem]);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const sendRequest = () => {
    if (itemDetails && email && selectedItem) {
      const requestData = {
        itemDetails: itemDetails,
        email: email
      };

      axios.post('http://localhost:4500/api/datasender', requestData)
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
          <p className='email-001'>Enter your E-mail to get catalog score</p>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email Address"
            required
          />
        </div>
      </div>

      <button className="sendRequesto" onClick={sendRequest} disabled={!email || !selectedItem}>SEND REQUEST</button>

      <div className="wrap-1">
        <div className="head-001">REAL-TIME EVALUATION</div>
        <div className='r-card'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            selectedItem && itemDetails ? (
              <div>
                <h2>Selected Item: {selectedItem}</h2>
                <p>Item Details:</p>
                <pre>{JSON.stringify(itemDetails, null, 2)}</pre>
              </div>
            ) : (
              <ResultCard />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default App;
