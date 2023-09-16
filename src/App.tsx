import Home from './components/pages/Home';
import About from './components/pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="flex items-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
