import React, { useState } from 'react'
import { FiFilter } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useData } from '../context/dataContext';

const Filter = () => {
    const [ openOptions, setOpenOptions ] = useState(false)
    const { filters, setFilter } = useData()

    const handleChange = (e) =>{
        const { value, checked } = e.target;
        if(checked){
            setFilter(prevState => [...prevState, value])
        }else{
            setFilter(filters.filter((e) => e !== value))
        }
    }

    const handleFilters = () =>{
        
    }

  return (
    <div className='filter'>
        <button className='filter-btn' type='button' onClick={() => setOpenOptions(true)}>FILTRAR <FiFilter /></button>
        <div className={`filter-content ${openOptions ? 'open' : ''}`}>
            <ul className="filter-options">
                <p>Filtrar <IoCloseOutline onClick={() => setOpenOptions(false)} /></p>
                <li>
                    <input type="checkbox" name="todos" id="todos" value={'todos'} onChange={handleChange} />
                    <label htmlFor="todos"><span></span>Ver todos</label>
                </li>
                <li>
                    <input type="checkbox" name="datafono" id="datafono" value={'datafono'} onChange={handleChange} />
                    <label htmlFor="datafono"><span></span>Cobro por datafono</label>
                </li>
                <li>
                    <input type="checkbox" name="link" id="link" value={'link'} onChange={handleChange} />
                    <label htmlFor="link"><span></span>Cobros por link de pago</label>
                </li>
            </ul>
            <button type="button" onClick={handleFilters}>Aplicar</button>
        </div>
    </div>
  )
}

export default Filter