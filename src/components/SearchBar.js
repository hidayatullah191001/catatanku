import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <div className="mb-4">
            <label><strong>Cari Catatan</strong></label>
            <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Cari berdasarkan judul"
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;