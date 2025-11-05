import { useState } from "react";
 import './App.css';
import axios from "axios";

function App(){
const[weather, setWeather]=useState({})

const[cityName, setCityName] = useState()
  const handleChange=(e)=>{
    setCityName(e.target.value)
  }
  
  const handleSubmit= async(e)=>{
    e.preventDefault()
    // alert("Submit Successfully!")
    try{
      const res = await axios.get(`https:p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`)
      setWeather(res.data)
    }
    catch(err){
      alert("Error")
    }
  }
  // console.log(cityName)

  return(
    <>
     <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="cityName">City Name:</label>
    </div><br />
    <div>
      <input type="text" name="cityName" id="cityName" placeholder="Enter your city Name" onChange={handleChange} />
    </div>
    <button type="submit">Get</button>
  </form>
  <div>
    <h1>{weather.location && weather.location.name}</h1>
    <h1>{weather.location && weather.location.region}</h1>
    <h1>{weather.current && weather.current.temp_c}</h1>
  </div>
    </>
  )
}
export default App;