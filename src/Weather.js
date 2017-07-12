import React from 'react';

const weatherData = [
    {
        "coord": {
            "lon": -77,
            "lat": 39.58
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 304.88,
            "pressure": 1018,
            "humidity": 55,
            "temp_min": 302.15,
            "temp_max": 306.15
        },
        "visibility": 16093,
        "wind": {
            "speed": 4.1,
            "deg": 250
        },
        "clouds": {
            "all": 1
        },
        "dt": 1499898600,
        "sys": {
            "type": 1,
            "id": 1324,
            "message": 0.0043,
            "country": "US",
            "sunrise": 1499853103,
            "sunset": 1499906132
        },
        "id": 4373238,
        "name": "Westminster",
        "cod": 200
    }

]

export default function Weather() {

}