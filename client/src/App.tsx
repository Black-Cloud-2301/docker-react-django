import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='browse' element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
