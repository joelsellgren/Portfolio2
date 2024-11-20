import Picture from '../molecules/Picture';
import Button from '../molecules/Button';
import { useState, useEffect } from 'react';

const Information = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-row items-center justify-center h-screen ">
      <div
        className={` w-96 h-fit p-4 flex flex-col justify-evenly  transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 '}`}
      >
        <div>
          <h1 className="font-bold text-5xl text-cyan-700">Joel Sellgren</h1>
          <h2 className="font-bold text-4xl text-cyan-700">
            Fullstack Developer
          </h2>
        </div>
        <p className=" text-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam
          reprehenderit sapiente eveniet quidem tempora consequatur quod, sequi
          maxime cumque esse ad eius tenetur eaque nihil odio officia aliquid?
          Expedita.
        </p>
        <Button
          text="Projects"
          color="bg-red-400"
          hover="hover:bg-red-600 duration-150"
          route="/projects"
        />
      </div>
      <Picture />
    </div>
  );
};

export default Information;
