import React from 'react';
import ArsipButton from './ArsipButton';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';

const ConsoleDetail = ({ note, onArchive, onDelete, onUnarchive }) => {
  return (
    <div className="col">
      <div className="card shadow-lg border-0">
        <div className="card-header">
          Console Catatan
        </div>
        <div className="card-body">
          <div className="row d-flex justify-content-around">
            <ArsipButton id={note.id}
              titleBtn={note.archived === true ? 'Unarchived' : 'Archived'}
              methodArchive={note.archived === true ? onUnarchive : onArchive} />
            <DeleteButton id={note.id} onDelete={onDelete} />
          </div>
        </div>
      </div>
    </div>
  )
}

ConsoleDetail.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default ConsoleDetail;