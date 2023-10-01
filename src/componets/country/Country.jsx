import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name, flags} = country;
    // console.log(name)
    return (
        <div className='country-box'>
            <h3>Country Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;