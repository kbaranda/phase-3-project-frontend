import React, { useState } from 'react';
import {FaTimesCircle, FaEdit} from "react-icons/fa";
import Edit from './Edit';
import "./HomeCard.css";

const HomeCard = ({house, onHouseDelete, onUpdated}) => {
 const [isEditing, setIsEditing] = useState(false)

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
    <div>      
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
        <h1 className='main-head'>{house.address}</h1>
        <h2 className='tag-line'>{house.city}, {house.state} {house.areaCode}</h2>
       </div>
       <div className="btns">
        <FaEdit onClick={() => setIsEditing((isEditing) => !isEditing)}/>
        <FaTimesCircle onClick={handleDeleteClick}/>
       </div>
       <img src={house.imageUrl} alt= {house.address}/>
       <div className="house-info">
        <h4>{house.beds} Beds</h4>
        <h4>{house.baths} Baths</h4>
       </div>
       <p className='description'>{house.description}</p>
      </div>
     )}
    </div>
  )
}

export default HomeCard