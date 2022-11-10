import React from 'react'

const Header = ({ filtroAll, filtroMale, filtroFemale, filtroAlive, filtroDead}) => {
  return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#"><img src="" className="mx-2" width="50" height="40"></img>WikiGOT</a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filtros
                                </a>
                                <ul className="dropdown-menu bg-3">
                                    <li onClick={() => filtroAll()}><a className="dropdown-item" href="#">All</a></li>
                                    <li onClick={() => filtroMale()}><a className="dropdown-item" href="#">Male</a></li>
                                    <li onClick={() => filtroFemale()}><a className="dropdown-item" href="#">Female</a></li>
                                    <li onClick={() => filtroAlive()}><a className="dropdown-item" href="#">Alive</a></li>
                                    <li onClick={() => filtroDead()}><a className="dropdown-item" href="#">Dead</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control mx-4" placeholder="Search" type="search" aria-label="Search"></input>
                        </div>
                    </div>
                </div>
            </nav>
  )
}

export default Header;