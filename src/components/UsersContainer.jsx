import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/users.scss'

// import { FiTrash, FiCheckSquare } from 'react-icons/fi'

const UsersContainer = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])

    // function handleCreateNewTask() {
    //     // 
    // }

    // function handleToggleTaskCompletion() {
    //     //  
    // }

    // function handleRemoveTask() {
    //     // 
    // }

    return (
        <section className="task-list container">
            <header>
                <h2>Users List</h2>

                <div className="input-group">
                    {/* <input type="text" placeholder="Adicionar novo todo"/> */}
                    
                    <Link to="/add-user" className="add-new-button">
                        Add new
                    </Link>
                </div>
            </header>

            <main>
                {/* <ul>
                    <li>
                        <div>
                            <label className="checkbox-container">
                                <input type="checkbox" readOnly />
                                <span className="checkmark"></span>
                            </label>
                            <p></p>
                        </div>

                        <button type="button" data-testid="remove-task-button">
                            <FiTrash size={16} />
                        </button>
                    </li>
                </ul> */}
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
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.city}</td>
                                    <td align="center" className="button-column">
                                        <button type="submit" style={{backgroundColor: "orange"}}>
                                            edit
                                        </button>
                                        
                                    </td>
                                    <td align="center" className="button-column">
                                        <button type="submit" style={{backgroundColor: "red"}}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default UsersContainer;