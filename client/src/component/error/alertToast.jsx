import React from 'react';
import Toast from 'react-bootstrap/Toast';

const AlertToast = ({ success }) => {
    return (
        <Toast>
            <Toast.Header closeButton>Success</Toast.Header>
            <Toast.Body>{success}</Toast.Body>
        </Toast>
    )
}

export default AlertToast;