import React from 'react';

import '../styles/modal.scss';

const DeleteModal = (props) => {

    const handleCloseModal = () => {
        document.getElementsByClassName('modal')[0].style.display = 'none'
    }

    const handleDelete = () => {
        document.getElementsByClassName('modal')[0].style.display = 'none'
        return props.deleteUser
    }
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">Delete</div>
                <div className="modal-body">
                    <span>Are you sure you want to delete this user?</span>
                </div>
                <div className="modal-actions">
                    <button type="submit" className="cancel-button" onClick={() => handleCloseModal()}>
                        Cancel
                    </button>
                    <button className="delete-button" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;