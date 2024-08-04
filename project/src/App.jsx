import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeBar from './components/HomePage/HomeBar';
import EventDetails from './components/EventDetails/EventDetails';
import Signuppage from './components/LoginPage/Signuppage';
import Loginpage from './components/LoginPage/Loginpage';
import ProfileView from './components/Profile/ProfileView';
import RegisteredEventsPage from './components/Profile/RegisteredEventsPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/" element={<HomeBar />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/registered-events" element={<RegisteredEventsPage/>} /> {/* Add route for RegisteredEventsPage */}
      </Routes>
    </>
  );
}

export default App;
