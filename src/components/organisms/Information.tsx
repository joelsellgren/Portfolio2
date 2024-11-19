import Picture from '../molecules/Picture';
const Information = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className=" w-96 h-72 p-4 flex flex-col justify-evenly">
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
      </div>
      <Picture />
    </div>
  );
};

export default Information;
