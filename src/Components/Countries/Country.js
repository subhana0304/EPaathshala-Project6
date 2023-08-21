import React, { useState } from 'react';

const Country = (country) => {
    // console.log(country.country);
    const {name, flags, population, continents, cca2} = country.country;

    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className='bg-warning-subtle m-2 p-3'>
            <h5>{name.common}</h5>
            <img className='img-fluid' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Continents: {continents[0]}</p>
            <button className='btn btn-danger' onClick={()=> loadDetails(cca2)}>Show Details</button>
            </div>
        </div>
    );
};


function loadDetails(code){
    // console.log(code);
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]))
}

export default Country;