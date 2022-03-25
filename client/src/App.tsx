import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
