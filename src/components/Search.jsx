import React, { useState } from 'react'

const Search = ({ state, send }) => {

    const [ country, setCountry ] = useState('');

    const handleClick = () => {
        send('SELECT', { selectedCountry: country })
        send('NEXT')
    };

    const options = state.context.countries

    const changingCountry = (event) => {
        setCountry(event.target.value)
    };

    return (
        <div className='search'>
            <label htmlFor="country">Select your country</label>

            <select 
                id="country" 
                className='Search-select' 
                value={country} 
                onChange={changingCountry}
            >    
                <option value="" disabled defaultValue>Escoge un país</option>

                {options.map((option) => <option value={option.name.common} key={option.name.common}>{option.name.common}</option>)}
            </select>

            <button
                className='search__button'
                onClick={handleClick}
            >Next</button>
        </div>
    )
};

export { Search }
