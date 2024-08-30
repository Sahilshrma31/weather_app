import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import { useState } from 'react';
export default function InfoBox(info){
    const INIT_URL=
    "https://images.unsplash.com/photo-1580687774725-4e23db308efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    console.log(info)
    const res={
        city:info.city?info.city:"rome"
    }

    return(
        <div className="infoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {res.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp?info.temp:"45"}&deg;C</p>
          <p>Humidity={info.humidity?info.humidity:"32"}</p>
          <p>Min temperature={info.tempMin?info.tempMin:"12"}</p>
          <p>Max temperature={info.tempMax?info.tempMax:"56"}</p>
          <p>The weather can be described as <i>{info.weather}</i> but feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card> 
    </div>
    </div>
    )
}