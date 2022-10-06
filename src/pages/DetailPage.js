import React from 'react';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import AlertSwal from '../components/Alert';

const DetailPageWrapper = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const onDeleteHandler = (id) => {
        deleteNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
        navigate("/home");
    }

    const onArchiveHandler = (id) => {
        archiveNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dipindahkan ke berkas arsip!" });
        navigate("/arsip");
    }

    const onUnarchiveHandler = (id) => {
        unarchiveNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus dari berkas arsip!" });
        navigate("/home");
    }

    return <DetailPage
        id={id}
        onDeleteHandler={onDeleteHandler}
        onArchiveHandler={onArchiveHandler}
        onUnarchiveHandler={onUnarchiveHandler}
    />;
}

class DetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: getNote(props.id),
        }
        this.onDeleteHandler = props.onDeleteHandler;
        this.onArchiveHandler = props.onArchiveHandler;
        this.onUnarchiveHandler = props.onUnarchiveHandler
    }

    render() {
        if (this.state.notes === null) {
            return <p>Catatan tidak dapat ditemukan</p>;
        }
        return (
            <div className="container mt-5">
                <h2 className="text-center mb-5">Detail Catatan</h2>
                <NoteDetail
                    note={this.state.notes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                    onUnarchive={this.onUnarchiveHandler}
                />
            </div>
        );
    }
}

export default DetailPageWrapper;