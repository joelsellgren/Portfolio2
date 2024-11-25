import Information from '../organisms/Information';
import Picture from '../molecules/Picture';

const About = () => {
  return (
    <article className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center items-center h-full">
        <Information />
        <Picture shouldEaseIn={false} />
      </div>
    </article>
  );
};

export default About;
