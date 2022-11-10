import React from 'react'

const Details = ({characterDetails, back}) => {
    console.log(characterDetails)
    const {name, image, house, age, father, mother, actor, origin, spouse, gender, titles, religion, alive, appearances} = characterDetails[0];
  return (
    <div className="row row-cols-2">
            <div className="col">
                <img src={image} alt="" className="w-100"/>
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary w-100" onClick={() => back()}> Atras </button>
                <div className='text-center mt-4'>
                    <h2 className='text-warning'>{name}</h2>
                    <h3 className='text-danger'>{house}</h3>
                </div>
                <div>
                    <h5 className='text-white'>Age: {age.age} years old</h5>
                    <h5 className='text-white'>Alive: {alive === true ? "Alive" : "Death"}</h5>
                    <h5 className='text-white'>Gender: {gender}</h5>
                    <h5 className='text-white'>Father: {father}</h5>
                    <h5 className='text-white'>Mother: {mother}</h5>
                    <h5 className='text-white'>Actor: {actor}</h5>
                    <h5 className='text-white'>Origin: {origin}</h5>
                    <h5 className='text-white'>Spouse: {spouse.join(", ")}</h5>
                    <h5 className='text-white'>Titles: {titles.join(", ")}</h5>
                    <h5 className='text-white'>Religion: {religion}</h5>
                    <h5 className='text-white'>Appearances: </h5>
                    {appearances.map((element) => {
                        return <p className='text-white m-0 p-0'>{element}</p>
                    })}
                </div>
            </div>
    </div>
  )
}

export default Details;