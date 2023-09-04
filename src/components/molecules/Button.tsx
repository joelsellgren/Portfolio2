type ButtonProps = {
    text: string;
    color: string;
    hover: string;
};

const Button = ({ text, color, hover }: ButtonProps) => {
    return (
        <div>
            <button
                className={`w-48 h-9 mt-2 ${color} ${hover} text-white duration-100 rounded-lg`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
