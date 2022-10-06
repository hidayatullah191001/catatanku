import React from 'react';
import { FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';

const DeleteButton = ({ id, onDelete }) => {
    return (
        <div>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}><FaTrash className="mr-1" />Hapus</button>
        </div>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default DeleteButton;