import githubLogo from '/github-mark.svg';
import googleStoreLogo from '/googlestorelogo.png';
import appStoreLogo from '/appstorelogo.svg';

interface IProject {
  name: string;
  company?: string;
  desc: string;
  year: string;
  images?: string[];
  githubLink?: string;
  applestoreLink?: string;
  googlestoreLink?: string;
  logos?: { github?: string; googleStore?: string; appstore?: string };
}
const ProjectCard = () => {
  const projects: IProject[] = [
    {
      name: 'Tevefy',
      desc: 'Tevefy is a video streaming platform for FAST TV Channels.',
      year: '2024',
      images: [],
      applestoreLink: 'https://apps.apple.com/se/app/tevefy/id6478608446',
      googlestoreLink:
        'https://play.google.com/store/apps/details?id=com.sebson.tevefy_mobile&hl=sv',
      logos: {
        googleStore: googleStoreLogo,
        appstore: appStoreLogo,
      },
    },
    {
      name: 'Recipe Assistant App',
      desc: 'A fullstack project using TypeScript, Vue.js, PostgreSQL, Prisma and ChatGPT:s API to create a chat-bot that helped the user create recipes based on the ingredients they have at home.',
      year: '2023',
      githubLink: 'https://github.com/Crewiz/FullstackVue',
      logos: {
        github: githubLogo,
      },
    },
    {
      name: 'Green Hero',
      desc: 'This project got 3rd place in Chas Academy:s Chas Challenge, the teams were assigned to create an app based on the theme Environment. The project was done using TypeScript, React, express.js and mongoDB.',
      year: '2022',
      githubLink: 'https://github.com/Crewiz/FullstackVue',
      logos: {
        github: githubLogo,
      },
    },
    {
      name: 'lorem',
      desc: 'lorem',
      year: 'lorem',
      githubLink: 'https://github.com/Crewiz/FullstackVue',
      logos: {
        github: githubLogo,
      },
    },
    {
      name: 'lorem',
      desc: 'lorem',
      year: 'lorem',
      githubLink: 'https://github.com/Crewiz/FullstackVue',
      logos: {
        github: githubLogo,
      },
    },
    {
      name: 'lorem',
      desc: 'lorem',
      year: 'lorem',
      githubLink: 'https://github.com/Crewiz/FullstackVue',
      logos: {
        github: githubLogo,
      },
    },
  ];

  return (
    <>
      <article className="grid grid-cols-3 gap-10 mt-8">
        {projects.map((project, index) => {
          return (
            <section
              key={index}
              className="w-72 h-80 rounded-2xl p-4 flex flex-col justify-around items-center bg-white  " // hover:scale-110 duration-100
            >
              <h2 className="text-lg font-bold">{project.name}</h2>
              <p>{project.desc}</p>
              <h6>{project.year}</h6>
              <div className="w-full flex flex-row justify-center items-center ">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank">
                    <img
                      src={project.logos?.github}
                      alt="github logo and link to project"
                      className="w-10 hover:scale-110 duration-150"
                    />
                  </a>
                )}
                {project.applestoreLink && project.googlestoreLink && (
                  <section className="flex flex-row items-center justify-evenly w-full">
                    <a href={project.applestoreLink} target="_blank">
                      <img
                        src={project.logos?.appstore}
                        alt={`Link to ${project.name} on App Store`}
                        className="w-28 hover:scale-110 duration-150 "
                      />
                    </a>
                    <a href={project.googlestoreLink} target="_blank">
                      <img
                        src={project.logos?.googleStore}
                        alt={`Link to ${project.name} on Google Play Store`}
                        className="w-28 hover:scale-110 duration-150"
                      />
                    </a>
                  </section>
                )}
              </div>
            </section>
          );
        })}
      </article>
    </>
  );
};

export default ProjectCard;
