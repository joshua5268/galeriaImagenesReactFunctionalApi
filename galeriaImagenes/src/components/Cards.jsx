import React from 'react'

const Cards = ({id, img, name, house, useCharactersDetails}) => {
    return (
    
    <div className='col my-2' key={id} id={id}>
        <div className='tarjeta' onClick={() => useCharactersDetails(id)}>
            <div className='card bg-1'>
                <img src={img} className="imgPhoto"></img>
                <div className="card-body">
                    <p className="card-title fs-4">{name}</p>
                    <p className="card-text fs-6">{house}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;