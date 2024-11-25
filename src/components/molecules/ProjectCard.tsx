import githubLogo from '/github-mark.svg';

interface IProject {
  name: string;
  company?: string;
  desc: string;
  year: string;
  images?: string[];
  githubLink?: string;
  applestoreLink?: string;
  googlestoreLink?: string;
}
const ProjectCard = () => {
  const projects: IProject[] = [
    {
      name: 'Tevefy',
      desc: 'Tevefy is a video streaming platform for FAST TV Channels.',
      year: '2024',
      images: [],
      githubLink: '',
      applestoreLink: '',
      googlestoreLink: '',
    },
    {
      name: 'Recipe Assistant App',
      desc: 'A fullstack project using TypeScript, Vue.js, PostgreSQL, Prisma and ChatGPT:s API to create a chat-bot that helped the user create recipes based on the ingredients they have at home.',
      year: '2023',
    },
    {
      name: 'Green Hero',
      desc: 'This project got 3rd place in Chas Academy:s Chas Challenge, the teams were assigned to create an app based on the theme Environment. The project was done using TypeScript, React, express.js and mongoDB.',
      year: 'lorem',
    },
    {
      name: 'lorem',
      desc: 'lorem',
      year: 'lorem',
    },
    {
      name: 'lorem',
      desc: 'lorem',
      year: 'lorem',
    },
    {
      name: 'lorem',
      desc: 'lorem',
      year: 'lorem',
    },
  ];

  return (
    <>
      <article className="grid grid-cols-3 gap-10 mt-8">
        {projects.map((project, index) => {
          return (
            <section
              key={index}
              className="w-72 h-80 rounded-2xl p-2 flex flex-col justify-around items-center bg-white hover:scale-110 duration-100 "
            >
              <h1>{project.name}</h1>
              <h1>{project.desc}</h1>
              <h1>{project.year}</h1>
              <div className="w-full flex flex-row justify-between items-center ">
                <a href="">
                  <img
                    src={githubLogo}
                    alt="github logo and link to project"
                    className="w-10 hover:scale-110 duration-150"
                  />
                </a>
                <div>2</div>
                <div>3</div>
              </div>
            </section>
          );
        })}
      </article>
    </>
  );
};

export default ProjectCard;
