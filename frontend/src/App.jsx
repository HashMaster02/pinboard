import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TasksProvider } from './context/tasks/TasksContext';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Assignments from './pages/Assignments';
import CreateTask from './pages/CreateTask';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <TasksProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/assignments" element={<Assignments />} />
                    <Route path=":dashboard/create" element={<CreateTask />} />
                    <Route path="/profile" element={<PrivateRoute />}>
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>
        </TasksProvider>
    );
}

export default App;
