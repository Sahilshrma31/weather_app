import SearchBox from "./SearchBox"
import InfoBox from "./infobox"
import { useState } from "react";
export default function WeatherApp(){
     const[WeatherInfo,SetWeatherInfo]=useState({
        city:"Delhi",
        feelslike:28.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        SetWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Sahil</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}