import Hero from '../organisms/Hero';
import Picture from '../molecules/Picture';
import { useRouteContext } from '../../Contexts/RouteContext';

const Home = () => {
  const { previousRoute } = useRouteContext();
  // TODO: Fixa  variabelnamnet på shouldEaseIn.....
  const shouldEaseIn = previousRoute === '/about';
  return (
    <article className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center items-center h-full">
        <Hero />
        <Picture shouldEaseIn={!shouldEaseIn} />
      </div>
    </article>
  );
};

export default Home;
