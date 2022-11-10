import React from 'react'

const Orders = ({orderAsc, orderAge, orderHouses}) => {
  return (
    <div className="row row-cols-3">
        <div className="col d-flex justify-content-center">
            <div className="caja rounded bg-1 text-white" onClick={() => orderAsc()}>
                <div>
                    <i className="bi bi-arrow-down-up fs-4"></i>
                </div>
                <div>
                <p className="fs-6">A-Z</p>
                </div>
            </div>
        </div>
        <div className="col d-flex justify-content-center">
            <div className="caja rounded bg-1 text-white" onClick={() => orderAge()}>
                <div>
                    <i className="bi bi-emoji-smile-fill fs-4"></i>
                </div>
                <div>
                    <p className="fs-6">A mayor</p>
                </div>
            </div>
        </div>
        <div className="col d-flex justify-content-center">
            <div className="caja rounded bg-1 text-white" onClick={() => orderHouses()}>
                <div>
                    <i className="bi bi-house-fill fs-4"></i>
                </div>
                <div>
                    <p className="fs-6">Houses</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders;
