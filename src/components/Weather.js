import React, { useEffect, useState } from 'react'
import './Weather.css'

export default function Weather() {
    const [location, setData] = useState([]);
    const [current, setCurrent] = useState([]);
    const [icon, setIcon] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://api.weatherapi.com/v1/current.json?key=9e8feedd9511442fb5c142129232004&q=india');
            const json = await response.json();
            setData(json.location);
            setCurrent(json.current);
            setIcon(json.current.condition);
        };
        fetchData();
    }, [])
    return (
        <div className='my-4 container'>
            <h1 className='text-center text-color  text-center'>Weather</h1>
            <div className="card bg-dark border border-white text-white">
                <div className="card-body">

                    <div className='row d-flex justify-content-evenly'>
                        <div className='col-sm-2'>
                            <p className='text-color h4 text-center '>City</p>
                            <p className='my-5 text-center'>{location.name}</p>
                        </div>
                        <div className='col-sm-2'>
                            <p className='text-color  text-center'>Country</p>
                            <p className='my-5 text-center'>{location.country}</p>
                        </div>
                        <div className='col-sm-2'>
                            <p className='text-color  text-center'>Local Time</p>
                            <p className='my-5 text-center'>{location.localtime}</p>
                        </div>
                        <div className='col-sm-2'>
                            <p className='text-color'>temp °C</p>
                            <div className='my-5'>
                                <img className='image' src={icon.icon} />
                                <p className='temp'>{current.temp_c}°C</p>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <p className='text-color'>temp °F</p>
                            <div className='my-5'>
                                <img className='image' src={icon.icon} />
                                <p className='temp'>{current.temp_f}°F</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
