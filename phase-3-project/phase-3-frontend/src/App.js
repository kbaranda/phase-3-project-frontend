import Houses from "./components/Houses";
import React, {useState, useEffect} from "react";
import NewHouse from "./components/NewHouse";

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
   fetch("http://localhost:9292/houses")
   .then(resp => resp.json())
   .then(data => setHouses(data))
 }, [])

 const handleDeleteHouse = (id) => {
  const updatedHouses = houses.filter((house) => house.id !== id);
  setHouses(updatedHouses)
}

const handleUpdateHouse = (updatedHouse) => {
  const updatedHouses = houses.map((house) => {
    if (house.id === updatedHouse.id) {
      return updatedHouse
    } else {
      return house
    }
  })
  setHouses(updatedHouses)
}
  return (
    <div className="app">
      <NewHouse/>
      <Houses
      houses={houses}
      handleDeleteHouse={handleDeleteHouse}
      onUpdated={handleUpdateHouse}
      />
    </div>
  );
}

export default App;
