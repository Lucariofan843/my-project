import React from 'react';

const weatherData = [
    {
        "coord": {
            "lon": -76.98,
            "lat": 39.56
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 306.33,
            "pressure": 1018,
            "humidity": 52,
            "temp_min": 304.15,
            "temp_max": 308.15
        },
        "visibility": 16093,
        "wind": {
            "speed": 5.1,
            "deg": 270
        },
        "clouds": {
            "all": 1
        },
        "dt": 1499969700,
        "sys": {
            "type": 1,
            "id": 1324,
            "message": 0.0248,
            "country": "US",
            "sunrise": 1499939537,
            "sunset": 1499992497
        },
        "id": 0,
        "name": "Westminster",
        "cod": 200
    }

];

export default function Weather() {

}