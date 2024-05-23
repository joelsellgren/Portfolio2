import { useNavigate } from 'react-router-dom';

interface IButtonProps {
  text: string;
  color: string;
  hover: string;
}

const Button = ({ text, color, hover }: IButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/about');
  return (
    <button
      className={`w-48 h-9 mt-2 ${color} ${hover} text-white duration-100 rounded-lg`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
