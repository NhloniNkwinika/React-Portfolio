import React from "react";
import {  Routes, Route,} from "react-router-dom";
import  "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';



function App() {
  return (
  
         <div>
            <Routes>
               <Route exact path="/" element={<Home />}>
               <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Project" element={<Project />} />
            </Route>
            </Routes>
        </div>
     
);
}

export default App;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
