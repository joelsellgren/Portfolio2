import GithubLogo from './../../../public/github-mark.svg';
import LinkedinLogo from './../../../public/iconmonstr-linkedin-3.svg';
import EmailLogo from './../../../public/email-svgrepo-com.svg';

const Header = () => {
    return (
        <div
            className="w-12 h-screen ml-1 p-1 flex flex-col
         justify-between items-center"
        >
            <div>
                <a href="https://github.com/joelsellgren">
                    <img src={GithubLogo} alt="" />
                </a>
            </div>
            <div>
                <a href="https://.linkedin.com/in/joel-sellgren-85086a265/">
                    <img className="w-8 h-8" src={LinkedinLogo} alt="" />
                </a>
            </div>
            <div>
                <img src={EmailLogo} alt="" />
            </div>
        </div>
    );
};

export default Header;
