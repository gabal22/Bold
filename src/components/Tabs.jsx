import React, { useState } from 'react'
import Filter from './Filter'
import { useData } from '../context/dataContext'

const Tabs = () => {
    const { tab, setTab } = useData()

    const handleChange = (tab) => {
      setTab(tab)
    }

  return (
    <div className='tabs'>
        <ul className="tabs-nav">
            <li onClick={() => handleChange('today')} className={`${tab == 'today' ? 'active' : ''}`}>Hoy</li>
            <li onClick={() => handleChange('week')} className={`${tab== 'week' ? 'active' : ''}`}>Esta semana</li>
            <li onClick={() => handleChange('month')} className={`${tab == 'month' ? 'active' : ''}`}>Septiembre</li>
        </ul>
        <Filter />
    </div>
  )
}

export default Tabs