import { useState, useEffect, useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addNewUserRequest, removeUserRequest, editUserRequest } from '../store/modules/user/actions';

import DeleteModal from './DeleteModal';

import '../styles/users.scss'
import '../styles/form.scss'

const UsersContainer = () => {
    const [users, setUsers] = useState([]);
    const [addUser, setAddUser] = useState(false);
    const [edit, setEdit] = useState(false);
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState({ 
        name: '',
        email: ''
    })

    const dispatch = useDispatch()
    
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
        .then(response => response.json())
        .then(json => {
            setUsers(json)
        })
    }, [])

    const handleOpenModal = (id) => {
        setUserId(id)
        document.getElementsByClassName('modal')[0].style.display = 'flex'
    }

    const handleCreateNewUser = useCallback(() => {
        dispatch(addNewUserRequest(users, user))
        setTimeout(() => setAddUser(false), 1000)
    }, [dispatch, users, user])

    const handleRemoveUser = () => {
        dispatch(removeUserRequest(users, userId))
    }

    const handleEditUser = useCallback(() => {
        dispatch(editUserRequest(users, user))
        setTimeout(() => setEdit(false), 1000)
    }, [dispatch, user, users])

    const handleEdit = (user) => { 
        setEdit(true)
        setUser({
            id: user.id,
            name: user.name,
            email: user.email
        })
    }

    return (
        <>
            {
                addUser ? (
                    <section className="form container">
                        <header>
                            <h2>Form</h2>
                        </header>
                        <main>
                            <div className="form-body">
                                <div className="input-container">
                                    <div className="input-row">
                                        <label htmlFor="name">Name</label>
                                        <input id="name" type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="type the name"/> 
                                        {/* { validate.name ? <span >Type a valid name to continue!</span> : '' } */}
                                    </div>
                                    <div className="input-row">
                                        <label htmlFor="email">E-mail</label>
                                        <input id="email" type="text" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="type the e-mail"/>
                                        {/* { validate.email ? <span >Type a valid e-mail to continue!</span> : '' } */}
                                    </div>
                                </div>
                                <div className="send-container">
                                    <button className="cancel-button" onClick={() => setAddUser(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="submit-button" onClick={handleCreateNewUser}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </main>
                    </section>
                ) : edit ? (
                    <section className="form container">
                        <header>
                            <h2>Form</h2>
                        </header>
                        <main>
                            <div className="form-body">
                                <div className="input-container">
                                    <div className="input-row">
                                        <label htmlFor="name">Name</label>
                                        <input id="name" type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="type the name"/> 
                                        {/* { validate.name ? <span >Type a valid name to continue!</span> : '' } */}
                                    </div>
                                    <div className="input-row">
                                        <label htmlFor="email">E-mail</label>
                                        <input id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="type the e-mail"/>
                                        {/* { validate.email ? <span >Type a valid e-mail to continue!</span> : '' } */}
                                    </div>
                                </div>
                                <div className="send-container">
                                    <button className="cancel-button" onClick={() => setEdit(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="submit-button" onClick={handleEditUser}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </main>
                    </section>
                ) : (
                    <section className="user-list container">
                        <header>
                            <h2>Users List</h2>
            
                            <div className="input-group">
                                <button className="add-new-button" onClick={() => setAddUser(true)}> 
                                    Add new
                                </button>
                            </div>
                        </header>
                        <main>
                            {   users.length === 0 ? <span>There are no user records.</span> :
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Username</th>
                                            <th>E-mail</th>
                                            <th>City</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map(item => (
                                                <>
                                                
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.address.city}</td>
                                                    <td align="center" className="button-column">
                                                        <button type="submit" style={{backgroundColor: "orange"}} onClick={() => handleEdit(item)}>
                                                            edit
                                                        </button>
                                                    </td>
                                                    <td align="center" className="button-column">
                                                        <button type="submit" style={{backgroundColor: "red"}} onClick={() => handleOpenModal(item.id)}>
                                                            delete
                                                        </button>
                                                    </td>
                                                </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </main>
                    </section>
                    ) 
                }
            <DeleteModal deleteUser={() => handleRemoveUser()}/>
        </>
    )
}

export default UsersContainer;