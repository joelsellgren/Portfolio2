const Hero = () => {
    return (
        <div className="flex flex-row items-center">
            <div className=" w-96 h-72 p-4">
                <h1 className="font-bold text-5xl text-cyan-900">Hello,</h1>
                <h2 className="font-bold text-4xl text-cyan-900">
                    my name is Joel
                </h2>
                <p className="mt-6 text-lg">
                    I'm a developer based in Stockholm, specialized in
                    blablabla........
                </p>
                <button className="w-48 h-8 mt-2 bg-cyan-900 rounded-lg">
                    Tell me more...
                </button>
            </div>
            <img
                className="rounded-lg w-96 h-auto"
                src="./../../../public/Profile.png"
                alt=""
            />
        </div>
    );
};

export default Hero;
