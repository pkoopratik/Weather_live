import React from 'react'

const Weathercard = ({tempInfo}) => {
    const {

        temp,
        weathermood,
        name,
        country
    }=tempInfo;
    return (
        <>
        <article className='widget'>
            <div className='weatherIcon'>
                
                <i className={"wi wi-day-sunny"}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{tempInfo.temp}°c</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>{tempInfo.weathermood}</div>
                    <div className='place'>{tempInfo.name}, {tempInfo.country}</div>

                </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>

        </article>
            
        </>
    )
}

export default Weathercard
