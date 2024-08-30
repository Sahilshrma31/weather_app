import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="91bb7eb57f3fb4679be10a6f65ede383";

    let getWeatherInfo=async () => {
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
       let result=
       {city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       }
       return result;
    };
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);  
    };
    let handleSubmit=async (evt)=>{
        evt.preventDefault();
        setCity("");
       let newInfo= await getWeatherInfo();
       updateInfo(newInfo)
    }
    return(
    <div className="SearchBox">
        <form onSubmit={handleSubmit}><TextField id="city" label="City Name" 
        variant="outlined" value={city} required onChange={handleChange} />
        <br></br>
        <br></br>
        <Button variant="contained" 
        type="submit" >
      Search
      </Button>
      </form>
    </div>
    
    )
}