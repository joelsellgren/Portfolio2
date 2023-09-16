import Button from '../molecules/Button';

const Hero = () => {
    return (
        <div className="flex flex-row items-center">
            <div className=" w-96 h-72 p-4">
                <h1 className="font-bold text-5xl text-cyan-800">Hello,</h1>
                <h2 className="font-bold text-4xl text-cyan-800">
                    my name is Joel
                </h2>
                <p className="mt-6 text-lg">
                    I'm a developer based in Stockholm, specialized in
                    blablabla........
                </p>
                <Button
                    text="Tell me more..."
                    color="bg-green-800"
                    hover="hover:bg-green-600"
                />
            </div>
            <img
                className="rounded-lg w-96 h-auto"
                src="./Profile.png"
                alt="Picture of Joel, altered with AI to look like an oil painting"
            />
        </div>
    );
};

export default Hero;
