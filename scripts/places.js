function calculateWindChill(temp, windSpeed){
    if (temp > 10 || windSpeed <= 4.8){
        return `${0}℃`;
    }
    else{
        windsChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.365 * temp * Math.pow(windSpeed, 0.16));

        return `${windSpeed}℃`;
    }
}

windChillValue = calculateWindChill(14, 11);

document.querySelector('#wind-chill').innerHTML = windChillValue;