import React from 'react'

const Details = ({characterDetails}) => {
    const {name} = characterDetails[0];
  return (
    <div className='text-white'>{name}</div>
  )
}

export default Details;