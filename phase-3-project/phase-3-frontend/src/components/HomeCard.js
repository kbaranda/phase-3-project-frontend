import React, { useState } from 'react';
import {FaPlusCircle,FaTimesCircle, FaEdit} from "react-icons/fa";
import Edit from './Edit';
import NewHouse from './NewHouse';


const HomeCard = ({house, onHouseDelete, onUpdated}) => {
 const [isEditing, setIsEditing] = useState(false)
 const [isAdded, setAdded] = useState(false)

 const{id, address, city, state,areaCode, description, beds, baths, imageUrl} = house

 const handleDeleteClick = () => {
  fetch(`http://localhost:9292/houses/${house.id}`, {
   method: "DELETE"
  })
  onHouseDelete(house.id);
 }

 const handleUpdate = (updatedHouse) => {
  setIsEditing(false)
  onUpdated(updatedHouse)
 }

  return (
    <div>      {isAdded ? (
     <NewHouse />
   ) : (
     <div>
       <h2>Want to Add a House? Click Me</h2>
       <FaPlusCircle onClick={() => setAdded((isAdded) => !isAdded)}/>
     </div>
   )}
     {isEditing ? (
      <Edit 
      id={id}
      address={address}
      city={city}
      state={state}
      areaCode={areaCode}
      description={description}
      beds={beds}
      baths={baths}
      imageUrl={imageUrl}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      onUpdate={handleUpdate}
      />
     ) : (
      <div>
       <div className="heading">
        <h1>{house.address}</h1>
        <FaEdit onClick={() => setIsEditing((isEditing) => !isEditing)}/>
        <FaTimesCircle onClick={handleDeleteClick}/>
       </div>
       <img src={house.imageUrl} alt= {house.address}/>
       <div className="house-info">
        <h4>{house.beds} Beds</h4>
        <h4>{house.baths} Baths</h4>
       </div>
       <p>{house.description}</p>
      </div>
     )}
    </div>
  )
}

export default HomeCard