import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from "prop-types";

const Kosong = () => {
    return null;
}

const NotesNotFound = () => {
    return (
        <div className="alert alert-danger">Note Not Found!</div>
    );
}

const NoteList = ({ notes, onDelete, onArchive, onUnarchive }) => {
    return (
        notes.length > 0 ?
            <div className="row">
                {
                    notes.map((note, i) => (
                        <NoteItem
                            key={i}
                            note={note}
                            onDelete={onDelete}
                            titleBtnArchive={note.archived === false ? 'Archive' : 'Unarchive'}
                            onArchive={note.archived === false ? onArchive : onUnarchive}
                            {...note} />
                    ),)
                }
            </div>
            : <NotesNotFound />
    )
}

NoteList.propTypes = {
    notes: PropTypes.objectOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default NoteList;