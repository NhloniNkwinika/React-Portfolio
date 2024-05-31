//import "./PricingCardStyles.css";
import "./HeroImg2Styles.css"

import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Project 1 -</h3>
                <span className="bar">

                </span>
                <p className="btc"></p>
                <p>-  -</p>
                <p>-  -</p>
                <p>- Responsive Design -</p>
                <button className="btn">view</button>
            </div>
            <div className="card">
                <h3>- Project 2 -</h3>
                <span className="bar">

                </span>
                <p className="btc"></p>
                <p>-  -</p>
                <p>-  -</p>
                <p>- Responsive Design -</p>
                <button className="btn">view</button>
            </div>
            <div className="card">
                <h3>- project 3 -</h3>
                <span className="bar">

                </span>
                <p className="btc"></p>
                <p>-  -</p>
                <p>- -</p>
                <p>- Responsive Design -</p>
                <button className="btn">view</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing