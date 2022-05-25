import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Register from './Pages/Authentication/Register/Register';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer/Footer';
import TermsOfService from './Pages/Shared/Footer/Footer/TermsOfService/TermsOfService';
import PrivacyPolicy from './Pages/Shared/Footer/PrivacyPolicy/PrivacyPolicy';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/termsofservice' element={<TermsOfService />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
