import React, {useState , useEffect} from "react"
import './App.css';
import Header from "./components/Header"
import axios from "axios"
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search"

function App() {
  const [info , setInfo] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [query , setQuery] = useState("");

  useEffect(() => {
    const fetchInfo = async () => {
      const result = await axios(`https://swapi.dev/api/people/?search=${query}`)
        const toArray = Object.keys(result.data).map(i => result.data[i]) //SWAPI returns an object an I want to work with the data in an array
        const fixedData = toArray[3]
        fixedData.forEach((el , i) => el.id = i); //looping through each object to assign it an id so we can then can assign unique key equal to that id
        console.log(fixedData)
      setInfo(fixedData) //setting info state = to the data we get back from API call
      setIsLoading(false) // I have data now so no longer loading
    }
    fetchInfo();
  }, [query]);


  return (
    <div className="container">
      <Header/>
      <Search getQuery={query => setQuery(query)}/>
      <CharacterGrid info={info} isLoading={isLoading}/>
    </div>
  );
}

export default App;
