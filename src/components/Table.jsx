import React from 'react'
import { IoIosLink } from "react-icons/io";
import { LuCalculator } from "react-icons/lu";
import { useData } from '../context/dataContext';
import { cards, titles } from '../utils/data';

const Table = (props) => {
    const { data } = props;
    const { tab, filters } = useData()
    const newData = filters.length ? data.filter(item => filters.includes(item.type)) : data

  return (
    <table className='data-table'>
        <caption>{titles[tab]}</caption>
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
            {data ? newData.map((a) => (
                <tr key={a.id}>
                    <td className={a.status}>{a.type == 'datafono' ? <LuCalculator /> : <IoIosLink />} {a.status == 'success' ? 'Cobro exitoso' : 'Cobro no realizado'}</td>
                    <td>{a.date} - {a.time}</td>
                    <td>{cards[a.method.card]}{a.method.number}</td>
                    <td>{a.id}</td>
                    <td>{a.payment}</td>
                </tr>
            )): <h3>Sin informacion</h3>}
        </tbody>
    </table>
  )
}

export default Table