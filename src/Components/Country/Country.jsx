import React, { useState } from 'react';
import './Country.css';
const Country = ({country , handleVisitedCountries}) => {
    const name = country.name.common;
    const {png , alt} = country.flags.flags;
    const population = country.population.population;
    const area = country.area.area;
    
    const [visited , setVisited] = useState(false);
    const handleVisited = ()=>{
        // 1st system
        // if (visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // 2nd system
        //setVisited(visited? false : true);
        
        // 3rd system
        setVisited(!visited);
        // Lift up from the Countries 
        handleVisitedCountries(name);
    }
    // Conditional css
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={png} alt={alt} />
            <h3>Name : {name}</h3>
            <p>Population is : {population}</p>
            <p>Area : {area}</p>
            <p>Type of country: {area>300000? "Big Country" : "Small country"}</p>
            <button onClick={handleVisited}>
                {
                    visited? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;