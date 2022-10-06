import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

const DetailCatatan = ({ note }) => {
    return (
        <div className="col-lg-8">
            <div className="card shadow-lg border-0">
                <div className="card-header">
                    Detail Catatan
                </div>
                <div className="card-body">
                    <h5 className="text-center mb-4"><strong>{note.title}</strong></h5>
                    <p className="mb-5">Dibuat pada : <span className="text-center badge badge-primary"><FaRegCalendar />{showFormattedDate(note.createdAt)}</span></p>
                    <p>{note.body}</p>
                </div>
            </div>
        </div>
    )
}

DetailCatatan.propTypes = {
    note: PropTypes.object.isRequired,
}

export default DetailCatatan;