import Home from './components/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import RouteProvider from './Contexts/RouteContext';

function App() {
  return (
    <RouteProvider>
      <article className="flex flex-col items-center bg-slate-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </article>
    </RouteProvider>
  );
}

export default App;
