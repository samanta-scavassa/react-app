import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
 return (
  <div>
    <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
  </div>
 );
}

export default App
