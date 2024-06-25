import Header from './components/Header'
import TotalSales from './components/TotalSales'
import Tabs from './components/Tabs'
import Table from './components/Table'
import { dataTable } from './utils/data'
import { DataProvider } from './context/dataContext'

import './styles/styles.scss'

function App() {

  return (
    <>
      <DataProvider>
        <Header />
        <div className="main-container">
          <div className="top-content">
            <TotalSales />
            <Tabs />
          </div>
          <div className="bottom-content">
              <Table data={dataTable} />
          </div>
        </div>
      </DataProvider>
    </>
  )
}

export default App
