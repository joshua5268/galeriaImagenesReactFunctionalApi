import { Fragment, useEffect, useState} from 'react'
import axios from "axios";
import Cards from './Cards';
import Header from './Header';
import Orders from './Orders';
import Alert from './Alert';
import Details from './Details';

const App = () => {

    const [characters, setCharacters] = useState([]);
    let [charactersFiltro, setCharactersFiltro] = useState([]);
    let [alertNum, setAlertNum] = useState();
    let [characterDetails, setCharacterDetails] = useState([]);

    useEffect(() => {

        axios
        .get(
          "https://api.got.show/api/show/characters/"
        )
        .then((response) => {
            setCharacters(response.data);
            setCharactersFiltro(response.data);
            setAlertNum(charactersFiltro.length);
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
        setAlertNum(charactersFiltro.length);
      }, [charactersFiltro]);

      useEffect(() => {
      }, [characterDetails]);
    
    
    const filtroInput = (value) => {
        console.log("Hola")
        let name = value.toLowerCase();
        let nameFound = characters.filter( character => character.name.toLowerCase().includes(name));
        let houses = characters.filter( house => house.house);
        let housesFound = houses.filter(house => house.house.toLowerCase().includes(name) && !house.name.toLowerCase().includes(name));
        let resultado = nameFound.concat(housesFound);
        setCharactersFiltro(resultado);
    }
    
    const filtroAll = () => {
        setCharacterDetails([]);
        setCharactersFiltro(characters);
    }

    const filtroMale = () => {
      setCharacterDetails([]);
        setCharactersFiltro(characters.filter((element) =>{
            return element.gender === "male"
        }))
    }

    const filtroFemale = () => {
      setCharacterDetails([]);
        setCharactersFiltro(characters.filter((element) =>{
            return element.gender === "female"
        }))
    }

    const filtroAlive = () => {
      setCharacterDetails([]);
        setCharactersFiltro(characters.filter((element) =>{
            return element.alive === true
        }))
    }

    const filtroDead = () => {
      setCharacterDetails([]);
        setCharactersFiltro(characters.filter((element) =>{
            return element.alive === false
        }))
    }

    const orderAsc = () => {
        let arrayfiltro = [...charactersFiltro];
        charactersFiltro = [];
        setCharactersFiltro(arrayfiltro.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }));
    }

    const orderAge = () => {
        let arrayfiltro = [...charactersFiltro];
        charactersFiltro = [];
        setCharactersFiltro(arrayfiltro.sort(function (a, b) {
            if (a.age === null || a.age.age === undefined) {
                return 1;
              }
              if (b.age === null || b.age.age === undefined) {
                return -1;
              }  
              if (a.age === null && b.age === null) {
                return 0;
              }
              if (a.age.age > b.age.age) {
                return 1;
              }
              if (a.age.age < b.age.age) {
                return -1;
              }
              if (a.age.age === b.age.age) {
                return 0;
              }
          }));
    }

    const orderHouses = () => {
        let arrayfiltro = [...charactersFiltro];
        charactersFiltro = [];
        setCharactersFiltro(arrayfiltro.sort(function (a, b) {
            if(a.house === null) {
                return 1;
              }
              if(b.house === null) {
                return -1;
              }
              if(a.house === null && b.age === null) {
                return 0;
              }
              if (a.house > b.house) {
                return 1;
              }
              if (a.house < b.house) {
                return -1;
              }
              if (a.house === b.house) {
                return 0;
              }
          }));
    }

    const useCharactersDetails = (id) => {
      let array = characters.filter(element => {
        return element.id == id
      })
      setCharacterDetails(array);
    }

    const back = () => {
      setCharacterDetails([]);
    }
      
    return (
        <Fragment>
            <header className="fixed-top bg-1">
                <Header 
                    filtroInput={filtroInput} 
                    filtroAll={filtroAll} 
                    filtroMale={filtroMale}
                    filtroFemale={filtroFemale}
                    filtroAlive={filtroAlive}
                    filtroDead={filtroDead}
                />
            </header>

            <main>
                    <div className="container">
                      {characterDetails.length !== 0 ? (<Details characterDetails={characterDetails} back={back}/>) : (
                        <Fragment>
                            <section>
                                <Orders 
                                    orderAsc={orderAsc}
                                    orderAge={orderAge}
                                    orderHouses={orderHouses}
                                />
                            </section>

                            <section>
                                <Alert alertNum={alertNum}/>
                            </section>

                            <section>
                                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-3">
                                          {charactersFiltro.map(character => {
                                              return (
                                                  <Cards id={character.id} img={character.image} name={character.name} house={character.house} useCharactersDetails={useCharactersDetails}/>
                                              )
                                          })}
                                  </div>
                            </section>
                        </Fragment>)
                      }
                    </div>          
            </main>
        </Fragment>
  )
}

export default App;