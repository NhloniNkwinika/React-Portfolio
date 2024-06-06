//import "./PricingCardStyles.css";
import "./HeroImg2Styles.css"

import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- ToDo List App-</h3>
                <span className="bar">

                </span>
                <p className="btc"></p>
                <p>-  -</p>
                <p>-  -</p>
                <p>-  -</p>
                <a href="https://nhloninkwinika.github.io/ToDoListApp/"target="_blank" rel="noopener noreferrer">
                <button className="btn">view</button>
                </a>
                
            </div>
            <div className="card">
                <h3>- Book Store -</h3>
                <span className="bar">

                </span>
                <p className="btc"></p>
                <p>-  -</p>
                <p>-  -</p>
                <p>-  -</p>
               
                <a href="https://nhloninkwinika.github.io/BookStore/"target="_blank" rel="noopener noreferrer">
                    <button className="btn">view</button>
                </a>
                
            </div>
            <div className="card">
                <h3>- project 3 -</h3>
                <span className="bar">

                </span>
                <p className="btc"></p>
                <p>- -</p>
                <p>- -</p>
                <p>- -</p>
                <button className="btn">view</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing