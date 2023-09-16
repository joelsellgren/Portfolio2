import Hero from '../organisms/Hero';
import Header from '../organisms/Header';

const Home = () => {
    return (
        <div className="flex flex-row w-full justify-between">
            <Header />
            <Hero />
            <div></div>
        </div>
    );
};

export default Home;
