import Houses from "./components/Houses";
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Edit from "./pages/Edit";

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
  return (
    <Router>
      <Switch>
        <Route path="/edit">
          <Edit />
        </Route>
        <Router path="/">
          <Houses
          houses={houses}
          handleDeleteHouse={handleDeleteHouse}
          />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
