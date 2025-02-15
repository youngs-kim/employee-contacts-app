import './App.css';
import HomePage from './components/HomePage';
import SiteFooters from './components/SiteFooters';
import SiteNav from './components/SiteNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <SiteFooters />
    </div>
  );
}

export default App;
