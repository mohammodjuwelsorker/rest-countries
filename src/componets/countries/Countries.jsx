import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    
    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, []);

    const visitedCountriesHandler = country => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }


    return (
        <div>
            <h3>countries: {countries.length}</h3>
            <div>
                <h3>visited countries length: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name?.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries-grid">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        visitedCountriesHandler={visitedCountriesHandler}
                        country={country}></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;