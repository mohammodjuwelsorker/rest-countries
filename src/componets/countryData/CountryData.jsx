const CountryData = ({country, visitedCountriesHandler, addVisitedHandler}) => {
    // const [countryVisited, setCountryVisited] = useState([])
    const {name} = country
    // console.log(visitedCountriesHandler)
    return (
        <div>
            <h3>country data</h3>
            <h3>country name: {name.common}</h3>
            <hr />
        </div>
    );
};

export default CountryData;