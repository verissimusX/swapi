import React, {useState , useEffect} from "react"
import './App.css';
import Header from "./components/Header"
import axios from "axios"
import CharacterGrid from "./components/CharacterGrid";

function App() {
  const [info , setInfo] = useState([]);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      const result = await axios(`https://swapi.dev/api/people/`)
        const toArray = Object.keys(result.data).map(i => result.data[i]) //SWAPI returns an object an I want to work with the data in an array
        const fixedData = toArray[3]
        console.log(fixedData)



      setInfo(fixedData) //setting info state = to the data we get back from API call
      setIsLoading(false) // I have data now so no longer loading
    }
    fetchInfo();
  }, []);


  return (
    <div className="container">
      <Header/>
      <CharacterGrid info={info} isLoading={isLoading}/>
    </div>
  );
}

export default App;
