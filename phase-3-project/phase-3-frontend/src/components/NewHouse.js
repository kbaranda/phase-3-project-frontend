import React from 'react';
import {FaPlusCircle} from "react-icons/fa";

const NewHouse = () => {
  const handleAdd = () => {
    console.log("Clicked")
  }

  return (
    <div>
      <h2>Want to Add a House? Click Me</h2>
      <FaPlusCircle onClick={handleAdd}/>
    </div>
  )
}

export default NewHouse