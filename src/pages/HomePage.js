import React from 'react';
import { archiveNote, deleteNote, getActiveNotes } from '../utils/local-data'
import NoteList from '../components/NoteList';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import AlertSwal from '../components/Alert';

const HomePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState(() => {
            return {
                notes: getActiveNotes(),
            }
        })
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
    }

    onArchiveHandler(id) {
        archiveNote(id);
        this.setState(() => {
            return {
                notes: getActiveNotes(),
            }
        })
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dipindahkan ke berkas arsip!" });

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
                    <h2 className="text-center mb-5">Catatanku</h2>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </>
        );
    }
}

export default HomePageWrapper;