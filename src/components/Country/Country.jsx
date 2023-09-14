import './Country.css';
const Country = ({country}) => {
    //console.log(country);
    const {name,flags,capital,area} = country;
    return (
        <div className='box'>
            
            <img src={flags.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Capital: {capital}</p>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;