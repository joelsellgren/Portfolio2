import { useNavigate } from 'react-router-dom';
import githubLogo from '/github-mark.svg';
import linkedinLogo from '/icons8-linkedin.svg';
import emailLogo from '/email-svgrepo-com.svg';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const timeout = setTimeout(() => navigate('/'), 100);
    return () => clearTimeout(timeout);
  };
  return (
    <header className="w-screen flex justify-between absolute z-10">
      <button
        className="w-20 h-20 flex 
         justify-around items-center  bg-slate-500 rounded-full m-4 text-2xl font-bold font-mono hover:scale-110 duration-100"
        onClick={handleClick}
      >
        <p>JS</p>
      </button>
      <section
        className="w-52 h-20 flex 
         justify-around items-center  bg-slate-500 rounded-lg m-4"
      >
        <a
          className="w-[40px] h-[40px] hover:scale-125 duration-150"
          href="https://github.com/joelsellgren"
          target="_blank"
        >
          <img src={githubLogo} alt="GitHub Logo" className="w-full h-full" />
        </a>
        <a
          className="w-[40px] h-[40px] hover:scale-125 duration-150"
          href="https://www.linkedin.com/in/joel-sellgren-85086a265/"
          target="_blank"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn Logo"
            className="w-full h-full"
          />
        </a>
        <a
          className="w-[40px] h-[40px] hover:scale-125 duration-150"
          href="mailto:joel.sellgren@hotmail.com"
          target="_blank"
        >
          <img src={emailLogo} alt="Email Logo" className="w-full h-full" />
        </a>
      </section>
    </header>
  );
};

export default Header;
