import React from "react";
import {  Routes, Route} from "react-router-dom";
import  "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
       </Route>
      </Routes>
    </>
 
  
  );
}

export default App;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
