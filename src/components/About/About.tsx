import Information from './Information';
import Picture from '../Hero/Picture';

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
