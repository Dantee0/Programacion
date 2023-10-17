import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = (setResults) => {
    const  [input, setInput] = useState('');
    // const fetchCars = async () => {
    //     const response = await fetch('http://localhost:3001/cars');
    //     const data = await response.json();
    //     console.log(data);
    // }
    const fetchData = (value) => {
        fetch('http://localhost:3001/cars')
        .then((response) => response.json()) //convierte la rta en formato json
        .then((json) => {
            const results = json.filter((car) => {
                return (
                 value && //por si el valor está vacío
                 car && 
                 car.name && 
                 car.name.toLowerCase().includes(value)
                 );
            });
            setResults(results);
        })
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
        placeholder='Search...' 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}
