import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import AlertSwal from '../components/Alert';

const AddPage = () => {
    const navigate = useNavigate();

    const onAddNoteHandler = (note) => {
        addNote(note);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil ditambah!" });
        navigate('/home');
    }

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-5">Buat Catatan Baru</h2>
                <div className="card shadow-lg border-0">
                    <div className="card-body">
                        <NoteInput addNotes={onAddNoteHandler} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPage;