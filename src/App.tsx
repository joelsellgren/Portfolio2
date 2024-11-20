import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/organisms/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center bg-slate-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
