import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import Signup1 from './Pages/Signup1';
import Home1 from './Pages/Home1';
import NewPage from "./components/NewPage";
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/Signup1" element={<Signup1/>} />
          <Route path="/Home1" element={<Home1/>} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
        <Toaster/>
      </Router>
  );
};

export default App;



