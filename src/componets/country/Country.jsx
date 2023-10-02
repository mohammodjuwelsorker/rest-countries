import { useState } from 'react';
import './Country.css'
import CountryData from '../countryData/CountryData';
import CountryDetails from '../countryDetails/CountryDetails'

const Country = ({country, visitedCountriesHandler, addVisitedHandler}) => {

    const [visited, setVisited] = useState(false);
    const clickHandler = () => {
        setVisited(!visited)
    }

    

    const {name, flags, area, languages} = country;
    // console.log(name)
    return (
        <div className={`country-box ${visited ? 'visited' : 'non-visited'}`}>
            <h3  style={{color: visited ? 'crimson' : 'blue'}}>Country Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <h4>Area: {area}</h4>
            <h3>Languages Name: {languages?.eng ? languages.eng : name?.common + " I don't know languages name?"}</h3>
            <button onClick={() => addVisitedHandler(country.flags.png)}>add flag</button>
            <button onClick={() => visitedCountriesHandler(country)}>Mark visit</button>
            <button onClick={clickHandler}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I have to visited' : 'I want to going'}
            <CountryData country={country}
            visitedCountriesHandler={visitedCountriesHandler}
            addVisitedHandler={addVisitedHandler}
            
            ></CountryData>
            
            <CountryDetails country={country} visitedCountriesHandler={visitedCountriesHandler} addVisitedHandler={addVisitedHandler}></CountryDetails>
        </div>
    );
};

export default Country;