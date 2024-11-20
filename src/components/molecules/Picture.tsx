// import { useEffect, useState } from "react";

const Picture = () => {
  /*   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timeout);
  }, []); */
  return (
    <>
      <img
        className={`rounded-lg w-96 h-auto `}
        src="./Profile.png"
        alt="Picture of Joel, altered with AI to look like an oil painting"
      />
    </>
  );
};

export default Picture;
