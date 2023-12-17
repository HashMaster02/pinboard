import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TasksProvider } from './context/tasks/TasksContext';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

function App() {
    return (
        <TasksProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<Tasks />} />
                </Routes>
            </Router>
        </TasksProvider>
    );
}

export default App;
