import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({countriesPromise}) => {
    const [arrayCountry , setArrayCountry] = useState([]);
    const [pngArray , setPngArray] = useState([]);
    
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries


    const handlePngArray = (countryPng , visited)=>{
        if (visited){
            const visitedCountries = [...pngArray];
            visitedCountries.push(countryPng);
            setPngArray(visitedCountries);
            // console.log('visited countries are: ',visitedCountries);
        }
        else{
            const newArr = pngArray.filter(x=> x!== countryPng)
            setPngArray(newArr);
            // console.log('visited countries are: ',newArr);
        }
        
    }
    const handleVisitedCountries = (country , visited)=>{
        if (visited){
            const visitedCountries = [...arrayCountry];
            visitedCountries.push(country);
            setArrayCountry(visitedCountries);
            //console.log('visited countries are: ',visitedCountries);
        }
        else{
            const newArr = arrayCountry.filter(x=> x!== country)
            setArrayCountry(newArr);
            //console.log('visited countries are: ',newArr);
        }
        
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
        <div className='country-png-show'>
            {
                pngArray.map(png => <img src={png}></img>)
            }
        </div>
        <div className='countries'>
            {
                countries.map(country => <Country 
                            key={country.cca3.cca3}
                            country={country}
                            handlePngArray = {handlePngArray}
                            handleVisitedCountries = {handleVisitedCountries}>
                        </Country>)
            }
        </div>
        </>
    );
};

export default Countries;

