import React from 'react'

const Alert = ({alertNum}) => {
  return (
    <div className={alertNum !== 0 ? "alert alert-dark mt-3" : "alert alert-danger mt-3"} role="alert">
        <p className="text-center m-0">Resultados encontrados: {alertNum}</p>
    </div>
  )
}

export default Alert;