import Hero from '../organisms/Hero';
import Picture from '../molecules/Picture';

const Home = () => {
  return (
    <article className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center items-center h-full">
        <Hero />
        <Picture />
      </div>
    </article>
  );
};

export default Home;
