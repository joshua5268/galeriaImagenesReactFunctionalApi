import { Fragment, useEffect, useState} from 'react'
import axios from "axios";
import Cards from './Cards';
import Header from './Header';

const App = () => {

    const [characters, setCharacters] = useState([]);
    let [charactersFiltro, setCharactersFiltro] = useState([]);

    useEffect(() => {

        axios
        .get(
          "https://api.got.show/api/show/characters/"
        )
        .then((response) => {
            setCharacters(response.data);
            setCharactersFiltro(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

        // const consumirApi = async () => {
        //   await  axios
        //   .get(
        //     "https://api.got.show/api/show/characters/"
        //   )
        //   .then((response) => {
        //     setCharacters(response.data);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        // };
    
        // consumirApi();
        // console.log('characters', characters)
      }, []);

      useEffect(() => {
      }, [charactersFiltro]);
    
    
    const filtroAll = () => {
        setCharactersFiltro(characters)
    }

    const filtroMale = () => {
        setCharactersFiltro(characters.filter((element) =>{
            return element.gender === "male"
        }))
    }

    const filtroFemale = () => {
        setCharactersFiltro(characters.filter((element) =>{
            return element.gender === "female"
        }))
    }

    const filtroAlive = () => {
        setCharactersFiltro(characters.filter((element) =>{
            return element.alive === true
        }))
    }

    const filtroDead = () => {
        setCharactersFiltro(characters.filter((element) =>{
            return element.alive === false
        }))
    }
      
    return (
        <Fragment>
            <header className="fixed-top bg-1">
                <Header  
                    filtroAll={filtroAll} 
                    filtroMale={filtroMale}
                    filtroFemale={filtroFemale}
                    filtroAlive={filtroAlive}
                    filtroDead={filtroDead}
                />
            </header>

            <main>
                <div className="container">
                    <section>
                        <div className="row row-cols-3">
                            <div className="col d-flex justify-content-center">
                                <div className="caja rounded bg-1 text-white" id="filtroAb" data-ab="asc">
                                    <div>
                                        <i className="bi bi-arrow-down-up fs-4"></i>
                                    </div>
                                    <div>
                                    <p className="fs-6" id="pAb">A-Z</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="caja rounded bg-1 text-white" id="filtroAge" data-age="mayor">
                                    <div>
                                        <i className="bi bi-emoji-smile-fill fs-4"></i>
                                    </div>
                                    <div>
                                        <p className="fs-6" id="pAge">A mayor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="caja rounded bg-1 text-white" id="filtroHouse">
                                    <div>
                                        <i className="bi bi-house-fill fs-4"></i>
                                    </div>
                                    <div>
                                        <p className="fs-6">Houses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="alert alert-dark mt-3" role="alert" id="alertDiv">
                            <p id="alertResultados" className="text-center m-0"></p>
                        </div>
                    </section>
                    {/* Componente de cards */}
                    <section>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-3">
                                {charactersFiltro.map(character => {
                                    return (
                                        <Cards id={character.id} img={character.image} name={character.name} house={character.house} />
                                    )
                                })}
                        </div>
                    </section>
                </div>
            </main>
        </Fragment>
    
    
  )
}

export default App;