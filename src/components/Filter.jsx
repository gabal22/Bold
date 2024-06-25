import React, { useState } from 'react'
import { FiFilter } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Filter = () => {
    const [ openOptions, setOpenOptions ] = useState(false)

  return (
    <div className='filter'>
        <button className='filter-btn' type='button' onClick={() => setOpenOptions(true)}>FILTRAR <FiFilter /></button>
        <div className={`filter-content ${openOptions ? 'open' : ''}`}>
            <ul className="filter-options">
                <p>Filtrar <IoCloseOutline onClick={() => setOpenOptions(false)} /></p>
                <li>
                    <input type="checkbox" name="datafono" id="datafono" />
                    <label htmlFor="datafono"><span></span>Cobro por datafono</label>
                </li>
                <li>
                    <input type="checkbox" name="link" id="link" />
                    <label htmlFor="link"><span></span>Cobros por link de pago</label>
                </li>
                <li>
                    <input type="checkbox" name="todos" id="todos" />
                    <label htmlFor="todos"><span></span>Ver todos</label>
                </li>
            </ul>
            <button type="button">Aplicar</button>
        </div>
    </div>
  )
}

export default Filter