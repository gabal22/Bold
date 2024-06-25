import { SiMastercard, SiVisa } from "react-icons/si";

export const dataTable = [
    {
        'status': 'success',
        'id': 'GZEN2378UBV1',
        'type': 'datafono', 
        'date': '04/06/2020',
        'time': '17:14:00',
        'method': {
            'number': '**** **** **** 7711',
            'card': 'mastercard'
        },
        'payment': '25.000'
    },
    {
        'status': 'failure',
        'id': 'GZEN2378UBV2',
        'type': 'datafono', 
        'date': '04/06/2020',
        'time': '17:14:00',
        'method': {
            'number': '**** **** **** 7722',
            'card': 'visa'
        },
        'payment': '25.000'
    },
    {
        'status': 'success',
        'id': 'GZEN2378UBV3',
        'type': 'link', 
        'date': '04/06/2020',
        'time': '17:14:00',
        'method': {
            'number': '**** **** **** 7733',
            'card': 'mastercard'
        },
        'payment': '15.000'
    }
]


export const cards = {
    visa: <SiVisa />,
    mastercard: <SiMastercard />
}

export const titles = {
    today: 'Tus ventas de hoy',
    week: 'Tus ventas de la semana',
    month: 'Tus ventas de Septiembre'
}   