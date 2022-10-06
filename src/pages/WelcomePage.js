import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center flex-column text-center" style={{ height: '500px' }}>
                <h1>Selamat Datang di Aplikasi Catatanku</h1>
                <h6 className="mb-4">Mari mulai untuk menulis catatan harianmu</h6>
                <div className="row">
                    <Link to='/home' className="btn btn-sm btn-primary mr-3">Lihat Catatan</Link>
                    <Link to='/buat' className="btn btn-sm btn-success">Buat Catatan</Link>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;