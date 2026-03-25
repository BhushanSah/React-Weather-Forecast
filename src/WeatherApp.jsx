import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo]=useState({
        city: "Berea",
        feelslike: 24.84,
        temp: 25.05,
        tempMin:20.01,
        tempMax:20.01,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}