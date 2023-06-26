import React, { useState } from "react";
import data from './data';
import Tours from "./Components/Tours";

const App = () =>{

  const [tours, setTours] = useState(data);

  //this function is defined here because we are removing the data of the city when not interested is clicked
  //from tours data which id defined here
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours);
  }

  //returning a separate UI when no tours left
  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours left</h2>
        {/* used an arrow function here so that the UI gets refreshed only when button is clicked  */}
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App;