import Button from '../molecules/Button';
import Picture from '../molecules/Picture';

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-center h-full ">
      <div className=" w-96 h-72 p-4 flex flex-col justify-evenly">
        <div>
          <h1 className="font-bold text-5xl text-cyan-700">Joel Sellgren</h1>
          <h2 className="font-bold text-4xl text-cyan-700">
            Fullstack Developer
          </h2>
        </div>
        <p className=" text-lg text-white">
          Creative <span className="font-bold">developer</span> with a
          background in music.
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
          hover="hover:bg-green-600 duration-150"
          route="/projects"
        />
      </div>
      <Picture />
    </div>
  );
};

export default Hero;
