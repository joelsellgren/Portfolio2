import Hero from '../organisms/Hero';
import Header from '../organisms/Header';

const Home = () => {
  return (
    <article className="flex flex-col w-screen h-screen">
      <Header />
      <Hero />
    </article>
  );
};

export default Home;
