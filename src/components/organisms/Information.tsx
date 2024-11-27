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
          Drummer turned developer. I have a Bachelors of Fine Arts from the
          Royal College of music in Stockholm. Sometime along my music studies,
          I realised that lifestyle wasn't for me, though I still love music. I
          also spend some of my free time in the drum-shed :). After a year of
          trying the freelance life, I decided to study a vocational program to
          become a Fullstack Developer, and now work at Staccs, where I mainly
          develop the app{' '}
          <a href="">
            <span className="font-bold">Tevefy</span>.
          </a>
        </p>
        <Button
          text="Projects"
          color="bg-red-400"
          hover="hover:bg-red-600 duration-150"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Information;
