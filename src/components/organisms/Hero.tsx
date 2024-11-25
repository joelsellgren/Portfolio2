import { useEffect, useState } from 'react';
import Button from '../molecules/Button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <article
      className={`flex flex-row items-center justify-center h-full transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0 '
      } `}
    >
      <div className={`w-96 h-72 p-4 flex flex-col justify-evenly `}>
        <div>
          <h1 className="font-bold text-5xl text-cyan-700">Joel Sellgren</h1>
          <h2 className="font-bold text-4xl text-cyan-700">
            Fullstack Developer
          </h2>
        </div>
        <p className="text-lg text-white">
          Creative <span className="font-bold">developer</span> with a
          background in music. Based in Stockholm.
        </p>
        <Button
          text="Tell me more!"
          color="bg-green-800"
          hover="hover:bg-green-600 duration-150"
          route="/about"
        />
        <Button
          text="Projects"
          color="bg-red-400"
          hover="hover:bg-red-600 duration-150"
          route="/projects"
        />
      </div>
    </article>
  );
};

export default Hero;
