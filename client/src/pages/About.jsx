import React from 'react'

const About = () => {
  return (
    <div>

      <div className="container-fluid" style={{display:"flex", margin:" 5px auto" ,alignItems:"center",minHeight:"510px"} }>
      <div className="about" style={{justifyContent:"center" ,margin:"auto"}}>
        <h2>
          About CoinTracker:
        </h2>
        <p>
          This react.js app is build using CoinGecko api and in this we used CoinGecko following apis:- 
          <ol>
            <li>
              Trending is for showing all the trending crypotcurrency.
            </li>
            <li>
              Market chart is for showing value of crypotcurrency for market value and market cap.
            </li>
            <li>
            Price is used for showing crypotcurrency particular value in that currency.

            </li>
          </ol>

        </p>

        <p>
          in this i had used Rachart api for showing simple chart where the value of crypotcurrency is shown.
        </p>

        <p>
          with this react.js app u can know about particular crypotcurrency market cap and value of any crypotcurrency in usd.
        </p>
      </div>
      </div>
    </div>
  )
}

export default About