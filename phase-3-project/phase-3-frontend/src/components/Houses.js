import React, {useState }from 'react';
import HomeCard from './HomeCard';
import NewHouse from './NewHouse';
import {FaPlusCircle} from "react-icons/fa";

const Houses = ({houses, handleDeleteHouse, onUpdated, onAddedHouse }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddHouse = (addedHouse) => {
    setIsAdded(false)
    onAddedHouse(addedHouse)
  } 

  return (
    <div>
           {isAdded ? (
     <NewHouse
     isAdded={isAdded}
     setIsAdded={setIsAdded}
     onAddHouse={handleAddHouse}
     />
     ) : (
      <div>
        <h2>Want to Add a House? Click Me</h2>
        <FaPlusCircle onClick={() => setIsAdded((isAdded) => !isAdded)}/>
      </div>
     )}
     {houses.map((house) => (
      <HomeCard
      key={house.id}
      house={house}
      onHouseDelete={handleDeleteHouse}
      onUpdated={onUpdated}
      />
     ))}
    </div>
  )
}

export default Houses