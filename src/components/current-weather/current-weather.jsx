import React from 'react';

import './current-weather.css';

const CurrentWeather = ({ data }) => {
	return (
		<div className="current-weather">
			<div className="current-weather__head">
				<div>
					<p className="current-weather__city">{data.city}</p>
					<p>{data.weather[0].description}</p>
				</div>
				<div className="current-weather__icon">
					<img src={`icons/${data.weather[0].icon}.png`} alt="weather" />
				</div>
			</div>
			<div className="current-weather__info">
				<p className="current-weather__temp">
					{Math.round(data.main.temp)}&deg;C
				</p>
				<div className="current-weather__info-inner">
					<div className="current-weather__info-item">
						<p className="current-weather__info-name">Details</p>
					</div>
					<div className="current-weather__info-item">
						<p className="current-weather__info-name">Feels like</p>
						<p>{Math.round(data.main.feels_like)}&deg;C</p>
					</div>
					<div className="current-weather__info-item">
						<p className="current-weather__info-name">Wind</p>
						<p>{data.wind.speed} m/s</p>
					</div>
					<div className="current-weather__info-item">
						<p className="current-weather__info-name">Humidity</p>
						<p>{data.main.humidity}%</p>
					</div>
					<div className="current-weather__info-item">
						<p className="current-weather__info-name">Pressure</p>
						<p>{data.main.pressure} hPa</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
