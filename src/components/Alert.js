import { Alert } from 'bootstrap';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AlertSwal = ({ title, message }) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: <strong>{title}</strong>,
        html: <i>{message}</i>,
        icon: 'success'
    })
}

export default AlertSwal;