import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries, handleFlags}) => {
    //console.log(country);
    const {name,flags,capital,area,cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited =() =>{
        setVisited(!visited);
    }
    console.log(handleVisitedCountries);
    return (
        <div className={`box ${visited? 'visited-country': 'non-visited'}`}>
            
            <img src={flags.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Capital: {capital}</p>
            <h4>Area: {area}</h4>
            <h4>Code: {cca3}</h4>
            <button onClick={() => handleVisitedCountries(country)}>Mark as visited</button>
            <button onClick={() => handleFlags(country.flags.png)}>Add flag</button> <br/>
            <button className='btn-container' onClick={handleVisited}>{visited? 'Visited': 'Going'}</button>
            {
                visited? 'I have visited this country.' : 'I want to visit'
            }
        </div>
    );
};

export default Country;