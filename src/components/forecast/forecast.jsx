import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import './forecast.css';

const WEEK_DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const Forecast = ({ data }) => {
	const dayInWeek = new Date().getDay();
	const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, dayInWeek)
	);

	console.log(forecastDays);

	return (
		<div className="forecast">
			<h2 className="forecast__title">Daily</h2>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, i) => (
					<AccordionItem key={i} className="forecast__item">
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className="forecast__head">
									<img
										className="forecast__head-icon"
										src={`icons/${item.weather[0].icon}.png`}
										alt=""
									/>
									<p className="forecast__head-day">{forecastDays[i]}</p>
									<p className="forecast__head-description">
										{item.weather[0].description}
									</p>
									<p className="forecast__head-temp">
										{Math.round(item.main.temp_min)}&deg;C /{' '}
										{Math.round(item.main.temp_max)}&deg;C
									</p>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="forecast__info">
								<div className="forecast__info-item">
									<span>Pressure</span>
									<span>{item.main.pressure} hPa</span>
								</div>
								<div className="forecast__info-item">
									<span>Humidity</span>
									<span>{item.main.humidity}</span>
								</div>
								<div className="forecast__info-item">
									<span>Clouds</span>
									<span>{item.clouds.all}%</span>
								</div>
								<div className="forecast__info-item">
									<span>Wind speed:</span>
									<span>{item.wind.speed} m/s</span>
								</div>
								<div className="forecast__info-item">
									<span>Sea level:</span>
									<span>{item.main.sea_level}m</span>
								</div>
								<div className="forecast__info-item">
									<span>Feels like:</span>
									<span>{Math.round(item.main.feels_like)}&deg;C</span>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Forecast;
