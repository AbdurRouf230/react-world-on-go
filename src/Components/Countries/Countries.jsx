import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({countriesPromise}) => {
    const [arrayCountry , setArrayCountry] = useState([]);
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    const handleVisitedCountries = (country)=>{
        const visitedCountries = [...arrayCountry];
        visitedCountries.push(country);
        setArrayCountry(visitedCountries);
        console.log('visited countries are: ',visitedCountries);
    }
    return (
        <>
        <h1>Total Number of countries : {countries.length}</h1>
        <h2>Total Country Visited: {arrayCountry.length}</h2>
        <ul>
            {
                arrayCountry.map(country => <li>{country}</li>)
            }
        </ul>
        <div className='countries'>
            {
                countries.map(country => <Country 
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries = {handleVisitedCountries}>
                        </Country>)
            }
        </div>
        </>
    );
};

export default Countries;

