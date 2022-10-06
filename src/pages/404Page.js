import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div style={{ height: '500px' }} className="d-flex justify-content-center align-items-center flex-column">
            <h1>404</h1>
            <p>Halaman tidak dapat ditemukan!</p>
            <Link to={'/home'}>Kembali</Link>
        </div>
    )
}

export default PageNotFound;