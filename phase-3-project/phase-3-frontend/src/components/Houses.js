import React from 'react';
import HomeCard from './HomeCard';

const Houses = ({houses, handleDeleteHouse, onUpdated }) => {

  return (
    <div>
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