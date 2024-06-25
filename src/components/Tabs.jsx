import React, { useState } from 'react'
import Filter from './Filter'

const Tabs = () => {
    const [ tabSelected, SetTabSelected ] = useState('today')

    const handleChange = (tab) => {
        SetTabSelected(tab)
    }

  return (
    <div className='tabs'>
        <ul className="tabs-nav">
            <li onClick={() => handleChange('today')} className={`${tabSelected == 'today' ? 'active' : ''}`}>Hoy</li>
            <li onClick={() => handleChange('week')} className={`${tabSelected == 'week' ? 'active' : ''}`}>Esta semana</li>
            <li onClick={() => handleChange('month')} className={`${tabSelected == 'month' ? 'active' : ''}`}>Septiembre</li>
        </ul>
        <Filter />
    </div>
  )
}

export default Tabs