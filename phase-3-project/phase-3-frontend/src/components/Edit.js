import React, {useState} from 'react'

const Edit = ({id, address, city, state, areaCode, description, beds, baths, imageUrl, isEditing, setIsEditing, onUpdate}) => {
 const [houseAddress, setHouseAddress] = useState(address)
 const [houseCity, setHouseCity] = useState(city)
 const [houseState, setHouseState] = useState(state)
 const [houseAreaCode, setHouseAreaCode] = useState(areaCode)
 const [houseDescription, setHouseDescription] = useState(description)
 const [houseBeds, setHouseBeds] = useState(beds)
 const [houseBaths, setHouseBaths] = useState(baths)
 const [houseImageUrl, setHouseImageUrl] = useState(imageUrl)

 const handleSubmit = (e) => {
  e.preventDefault()
  fetch(`http://localhost:9292/houses/${id}`, {
   method: "PATCH",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    address: houseAddress,
    city: houseCity,
    state: houseState,
    areaCode: houseAreaCode,
    description: houseDescription,
    beds: houseBeds,
    baths: houseBaths,
    imageUrl: imageUrl
   }),
  })
  .then(resp => resp.json())
  .then(updatedHouse => onUpdate(updatedHouse))
}
  return (
    <form onSubmit={handleSubmit}>
     <label>Edit House</label>
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
     <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Cancel</button>
    </form>
  )
}

export default Edit