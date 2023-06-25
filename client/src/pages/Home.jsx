import React from "react";
import Homefetch from "../store/Homefetch";
import { Link } from "react-router-dom";

const Home = () => {
  const store = Homefetch();
  const [inputValue, setInputValue] = React.useState("");

  const handleSearch = () => {
    store.setQuery({ target: { value: inputValue } });
    store.search();
  };

  React.useEffect(() => {
    store.fetchCoins();
  }, []);

  React.useEffect(() => {
    if (inputValue.length === 0) {
      store.setQuery({ target: { value: "" } });
      store.search();
    }
  }, [inputValue]);

  return (
    <div className="image">
      <div
        className="container "
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "60px auto",
        }}
      >
        <div>

        <div className="header">
       
       
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
          </div>
          
       

          <h2 className="heading">{store.searched ?"Search Reasults":"Trending Coins"}</h2>
          
          

          {store.coins.length > 0 &&
            store.coins.map((coin) => (
              <div key={coin.id} className="homecrypto">
              
                <Link to={`/${coin.id}`} className="links">
                  <div>
                    <span>
                      <img src={coin.image} className="cryptoimage" alt="" />
                    </span>
                  </div>

                  <div>
                    <span className="coinname">{coin.name}</span>
                  </div>
                  <div>
                    <span className="price">
                      <span className="cryptobtc">{coin.price} BTC</span>
                      <br />
                      <span className="cryptousd">{coin.priceUsd} USD</span>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
