import React, {useState} from 'react';

const NewHouse = ({onAddHouse, isAdded, setIsAdded}) => {
  const [houseAddress, setHouseAddress] = useState("")
  const [houseCity, setHouseCity] = useState("")
  const [houseState, setHouseState] = useState("")
  const [houseAreaCode, setHouseAreaCode] = useState("")
  const [houseDescription, setHouseDescription] = useState("")
  const [houseBeds, setHouseBeds] = useState("")
  const [houseBaths, setHouseBaths] = useState("")
  const [houseImageUrl, setHouseImageUrl] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:9292/houses", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        address: houseAddress,
        city: houseCity,
        state: houseState,
        areaCode: houseAreaCode,
        description: houseDescription,
        beds: houseBeds,
        baths: houseBaths,
        imageUrl: houseImageUrl
      })
    })
    .then(resp => resp.json())
    .then(newHouse => {
      onAddHouse(newHouse)
    })
  }
  return (
    <form onSubmit={handleSubmit}>
     <label>Add New House</label>
     <input
      type="text"
      name="address"
      placeholder='Address'
      value={houseAddress}
      onChange={(e) => setHouseAddress(e.target.value)}/>
     <input
      type="text"
      name="city"
      placeholder='City'
      value={houseCity}
      onChange={(e) => setHouseCity(e.target.value)}/>
     <input
      type="text"
      name="state"
      placeholder='State'
      value={houseState}
      onChange={(e) => setHouseState(e.target.value)}/>
     <input
      type="text"
      name="areaCode"
      placeholder='Area Code'
      value={houseAreaCode}
      onChange={(e) => setHouseAreaCode(e.target.value)}/>
     <input
      type="text"
      name="description"
      placeholder='Description'
      value={houseDescription}
      onChange={(e) => setHouseDescription(e.target.value)}/>
     <input
      type="text"
      name="beds"
      placeholder='How many Beds?'
      value={houseBeds}
      onChange={(e) => setHouseBeds(e.target.value)}/>
     <input
      type="text"
      name="baths"
      placeholder='How many Baths?'
      value={houseBaths}
      onChange={(e) => setHouseBaths(e.target.value)}/>
     <input
      type="text"
      name="imgUrl"
      placeholder='image_url'
      value={houseImageUrl}
      onChange={(e) => setHouseImageUrl(e.target.value)}/>
     <button type='submit'>Save</button>
     <button onClick={() => setIsAdded((isAdded) => !isAdded)}>Cancel</button>
    </form>
  )
}

export default NewHouse