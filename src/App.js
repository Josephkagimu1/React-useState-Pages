import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import pic1 from './images/pic1.jpg';
import Data from './Data';

function App() {
  const [active, setActive] = useState("part1");

  return (
    <div className="App">
      <header>
        <h2 > Body Fitness & maintaining </h2>
        <div>
          <img src={pic1} width="250px" />
        </div>
      </header>

      <nav>
        <button onClick={() => setActive("part1")} >Part-1</button>
        <button onClick={() => setActive("part2")} >Part-2</button>
        <button onClick={() => setActive("part3")} >Part-3</button>
        <button onClick={() => setActive("part4")} >Part-4</button>
      </nav>

      {active ==="part1" && <Card id={0} title="Home" data={Data} /> }
      {active ==="part2" && <Card id={1} title="Trending" data={Data} /> }
      {active ==="part3" && <Card id={2} title="Usual Training" data={Data} /> }
      {active ==="part4" && <Card id={3} title="Advanced" data={Data} /> }
    </div>
  );
};

export default App;
