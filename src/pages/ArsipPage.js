import React from 'react';
import { unarchiveNote, deleteNote, getArchivedNotes } from '../utils/local-data'
import NoteList from '../components/NoteList';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import AlertSwal from '../components/Alert';

const ArsipPageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArsipPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArsipPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            }
        })
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            }
        })
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus dari berkas arsip!" });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <>
                <div className="container mt-5 mb-5">
                    <h2 className="text-center mb-5">Arsip Catatanku</h2>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <NoteList notes={notes} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveHandler} />
                </div>
            </>
        );
    }
}

export default ArsipPageWrapper;