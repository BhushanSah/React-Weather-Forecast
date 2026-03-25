import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const apiKey = import.meta.env.VITE_APIKEY;
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[Error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY=apiKey;
    let getWeatherInfo= async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
        };
        return result;
        } catch(err){
            throw err;
        }
        
    }
    
    let handleChange=(event)=>{
        setCity(event.target.value)
    };

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");  
            setError(false)
            let newInfo= await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            setError(true)
        }
      
    };

    return(
        <div>
            <h3>Weather Broadcast</h3>
            <form onSubmit={handleSubmit}>
            <TextField
            id="city"
            label="City"
            type="search"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            />
            <br></br><br></br>
            <Button variant="contained" type='submit' >Search</Button>
            <hr></hr>
            {Error && <p style={{color:"red"}}>No such place exist!!!</p>}
            </form>
        </div>
    )
}