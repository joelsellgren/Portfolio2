import Header from './components/organisms/Header';
import Hero from './components/organisms/Hero';

function App() {
    return (
        <div className="flex flex-row justify-between items-center">
            <Header />
            <Hero />
            <div></div>
        </div>
    );
}

export default App;
