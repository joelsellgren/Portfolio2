import Button from '../molecules/Button';
import Picture from '../molecules/Picture';

const Hero = () => {
  return (
    <div className="flex flex-row items-center">
      <div className=" w-96 h-72 p-4">
        <h1 className="font-bold text-5xl text-cyan-700">Joel Sellgren</h1>
        <h2 className="font-bold text-4xl text-cyan-700">Fullstack Developer</h2>
        <p className="mt-6 text-lg text-white">
          Creative <span className="font-bold">developer</span> with a background in music
        </p>
        <Button text="Tell me more..." color="bg-green-800" hover="hover:bg-green-600 duration-150" />
      </div>
      <Picture />
    </div>
  );
};

export default Hero;
