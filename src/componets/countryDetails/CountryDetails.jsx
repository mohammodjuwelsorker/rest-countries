const CountryDetails = (props) => {
    const {country, visitedCountriesHandler, addVisitedHandler} = props;
    console.log(country, visitedCountriesHandler, addVisitedHandler)
    return (
        <div>
            <h3>country details</h3>
        </div>
    );
};

export default CountryDetails;