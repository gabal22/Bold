import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";


const TotalSales = () => {
  return (
    <div className="total-sales">
        <div className="total-sales__header">
            <h4>Total de ventas de Septiembre <AiOutlineInfoCircle /></h4>
        </div>
        <div className="total-sales__content">
            <h3>$1'560.000</h3>
            <small>Septiembre, 2020</small>
        </div>
    </div>
  )
}

export default TotalSales