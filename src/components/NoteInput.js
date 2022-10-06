import React from 'react';
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            limitTitle: { char: 50, max_char: 50, limit: false }
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        let titleLength = event.target.value.length;
        let maxlength = this.state.limitTitle.max_char;
        let charLeft = maxlength - titleLength;
        if (charLeft !== 0) {
            this.setState(() => {
                return {
                    title: event.target.value,
                    limitTitle: { char: charLeft, max_char: maxlength, limit: false }
                }
            })
        } else {
            this.setState(() => {
                return {
                    limitTitle: { char: charLeft, max_char: maxlength, limit: true }
                }
            })
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        if (this.state.limitTitle.limit === false) {
            this.props.addNotes(this.state);
            this.setState({
                title: '',
                body: '',
            })
        } else {
            console.log('Lebih dari 50');
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <div className="mb-3">
                    <div className="d-flex justify-content-between">
                        <label>Title Note</label>
                        <p
                            className={this.state.limitTitle.limit === false ? 'text-black' : 'text-danger'}>
                            Sisa karakter : {this.state.limitTitle.char}
                        </p>
                    </div>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        className="form-control"
                        placeholder="Input your Title Note" />
                </div>
                <div className="mb-3">
                    <label>Body Note</label>
                    <textarea
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        className="form-control"
                        placeholder="Input your Body Note" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary"><i className="bi bi-plus-lg me-2"></i>Tambah</button>
                </div>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNotes: PropTypes.func.isRequired,
}

export default NoteInput;