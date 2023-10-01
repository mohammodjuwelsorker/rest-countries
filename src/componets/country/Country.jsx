import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);
    const clickHandler = () => {
        setVisited(!visited)
    }

    const {name, flags, area, languages} = country;
    // console.log(name)
    return (
        <div className='country-box'>
            <h3>Country Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <h4>Area: {area}</h4>
            <h3>Languages Name: {languages?.eng ? languages.eng : name?.common + " I don't know languages name?"}</h3>
            <button onClick={clickHandler}>{visited ? 'Visited': 'Not Visit'}</button>
            {visited ? 'I have to visited' : 'I want to going'}
        </div>
    );
};

export default Country;