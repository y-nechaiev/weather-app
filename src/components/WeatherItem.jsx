import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import Loading from './Loading';
import { useWeather } from '../hooks/useWeather';
import PropTypes from 'prop-types';

const WeatherItem = ({ location, units }) => {
  const isMetric = units.match(/metric/i) ? true : false;

  const { weather, isLoading, isError } = useWeather(
    'weather',
    location,
    units,
  );


  if (isLoading ) return <Loading />;
  if (isError && location !=='') return <p className='text-2xl text-center'>The desired city was not found</p>;
  return (
    <>
      <div className="m-4">
        <div className="sm">
          <p className="text-2xl font-semibold tracking-wide">
            {weather.location}, {weather.country}
          </p>
          <p className="tracking-wide text-gray-500">
            {dayjs(weather.date).format('dddd')},{' '}
            {dayjs
              .utc(weather.date)
              .utcOffset(weather.timezone)
              .format('h:mm A')}
            , {weather.description}
          </p>
        </div>
        <div className="my-8 flex flex-row justify-between text-5xl tracking-wide lg:my-4 lg:text-6xl">
          <span className="mt-6 font-light text-gray-500 md:mt-10">
            {weather.temperature}&deg;
            <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500">
              Feels like {weather.feels_like}&deg;
            </span>{' '}
          </span>
          <div className="mt-4 text-8xl text-green-600 sm:text-9xl">
            <span className={weather.weatherIcon}></span>
          </div>
        </div>
        <div className="mt-1 text-green-600">
          <span className="wi wi-strong-wind text-xl"></span>
          <span className="ml-1 mr-2 tracking-wide text-gray-500">
            {weather.wind_speed}
            {isMetric ? `m/s` : `mph`} winds
          </span>
          <span className="ml-7 wi wi-humidity text-xl"></span>
          <span className="ml-1 tracking-wide text-gray-500">
            {weather.humidity}% humidity
          </span>
        </div>
        <div className="mt-10 mb-4 text-center text-2xl tracking-wide text-gray-500">
          {weather.weatherRecommendation}
        </div>
      </div>
    </>
  );
};

WeatherItem.propTypes = {
  location: PropTypes.string,
  units: PropTypes.string,
};

export default WeatherItem;