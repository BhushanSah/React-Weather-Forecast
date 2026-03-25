import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/photo-1464660439080-b79116909ce7?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1702550136226-d3e77e1cdab9?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className='infoBox'>
            <h2>Weather</h2>
            <div className='cardCont'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80 ? RAIN_URL: info.temp>15? HOT_URL: COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ? <ThunderstormIcon/>: info.temp>15? <SunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature:{info.temp}&deg;C</p>
          <p>Humiditiy:{info.humidity}</p>
          <p>Min_Temp:{info.tempMin}&deg;C</p>
          <p>Max_Temp:{info.tempMax}&deg;C</p>
          <p>Weather can be Described as:<i>{info.weather}</i> and feels like <b>{info.feelsLike}&deg;C</b></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}