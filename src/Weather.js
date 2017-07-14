import React from 'react';

const weatherData = [
    {
        "coord": {
            "lon": -76.98,
            "lat": 39.56
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 302.48,
            "pressure": 1018,
            "humidity": 70,
            "temp_min": 299.15,
            "temp_max": 304.15
        },
        "visibility": 16093,
        "wind": {
            "speed": 2.1,
            "deg": 190
        },
        "clouds": {
            "all": 40
        },
        "dt": 1500043500,
        "sys": {
            "type": 1,
            "id": 1324,
            "message": 0.0082,
            "country": "US",
            "sunrise": 1500025975,
            "sunset": 1500078870
        },
        "id": 0,
        "name": "Westminster",
        "cod": 200
    }

];

export default function Weather() {

}