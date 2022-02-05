import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/users.scss'

// import { FiTrash, FiCheckSquare } from 'react-icons/fi'

const AddUserForm = () => {

    const [user, setUser] = useState([])

    // function handleCreateNewTask() {
    //     // 
    // }

    return (
        <section className="task-list container">
            <header>
                <h2>Form</h2>
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
            </main>
        </section>
    )
}

export default AddUserForm;