import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Register /> } />
        </Routes>
    );
}