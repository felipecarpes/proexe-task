import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUserRequest } from '../store/modules/user/actions';

import '../styles/modal.scss';

const DeleteModal = ({ users, userId }) => {

    const dispatch = useDispatch()

    const handleCloseModal = () => {
        document.getElementsByClassName('modal')[0].style.display = 'none'
    }

    const handleRemoveUser = () => {
        dispatch(removeUserRequest(users, userId))
        setTimeout(() => document.getElementsByClassName('modal')[0].style.display = 'none', 1000)
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
                    <button className="delete-button" onClick={() => handleRemoveUser()}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;