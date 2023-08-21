import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    // console.log(countries);

    return (
        <div className='container text-center my-5'>
            <div className='row'>
            {
                countries.map(country => <Country key={country.cca2} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;