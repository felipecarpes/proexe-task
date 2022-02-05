import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';

export default function RoutesApp() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path="/" element={<Dashboard/>} />
                <Route exact path="/add-user" element={<AddUser/>} />
            </Routes>
        </Suspense> 
        
    );
}