import { useNavigate } from 'react-router-dom';

type Props = {
    text: string;
    color: string;
    hover: string;
};

const Button = ({ text, color, hover }: Props) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/about');
    return (
        <div>
            <button
                className={`w-48 h-9 mt-2 ${color} ${hover} text-white duration-100 rounded-lg`}
                onClick={handleClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
