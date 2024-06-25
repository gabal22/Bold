import { useState } from 'react'
import Header from './components/Header'
import TotalSales from './components/TotalSales'
import Tabs from './components/Tabs'
import Table from './components/Table'

import './styles/styles.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="top-content">
          <TotalSales />
          <Tabs />
        </div>
        <div className="bottom-content">
            <Table />
        </div>
      </div>
    </>
  )
}

export default App
