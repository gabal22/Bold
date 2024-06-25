import React from 'react'

const Table = () => {
  return (
    <table className='data-table'>
        <caption>Tus ventas de Hoy</caption>
        <thead>
            <tr>
                <th>Transaccion</th>
                <th>Fecha y hora</th>
                <th>Metodo de pago</th>
                <th>ID transaccion Bold</th>
                <th>Monto</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1Cobro exitoso</td>
                <td>04/06/2020 - 17:14:24</td>
                <td>**** **** **** 7711</td>
                <td>GZEN2378UBV2</td>
                <td>$25.000</td>
            </tr>
            <tr>
                <td>2Cobro exitoso</td>
                <td>04/06/2020 - 17:14:24</td>
                <td>**** **** **** 7711</td>
                <td>GZEN2378UBV2</td>
                <td>$25.000</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table