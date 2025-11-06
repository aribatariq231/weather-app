import { useState , useEffect} from "react";
import './App.css';
import axios from "axios";

function App(){
const[cityName, setCityName] = useState();
const[weather, setWeather]=useState({});
const [cities, setCities] =  useState({});

  const handleChange=(e)=>{
    setCityName(e.target.value)
  }

  useEffect(()=>{
    if(weather.current){
      alert("Something went wrong");
    }
  },[weather])

  
  useEffect(()=>{
  const fetchWeather = async ()=>{
  const cities=["Lahore Pakistan", "Karachi Pakistan"]
  const Weatherinfo = []
  cities.map(async(city)=>{
  console.log(city)
  const res = await axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`)
  console.log(res.data)
  Weatherinfo.push(res.data)
  })
  setCities(Weatherinfo)
  }
  fetchWeather()
  },[])
  
  const handleSubmit= async(e)=>{
    e.preventDefault()
    // alert("Submit Successfully!")
    try{
      const res = await axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`)
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
  {
    weather.current && <div className="weather-card">
      <div className="card-img-container">
        <img src="/lhr-img.jpg" alt="" className="card-img" />
      </div>
      <div className="card-title">
        <h1>{weather.current && weather.current.temp_c}</h1>
      </div>
      <div className="card-desc">
        <p>{weather.location && weather.location.name},{weather.location && weather.location.name}</p>
      </div>
    </div>
  }
    </>
  )
}
export default App;