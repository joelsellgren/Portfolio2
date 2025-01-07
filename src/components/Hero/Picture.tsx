import { useEffect, useState } from 'react';

const Picture = ({ shouldEaseIn }: { shouldEaseIn: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <img
        className={`rounded-lg w-96 h-auto transform transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100'
            : shouldEaseIn
              ? 'opacity-0 '
              : 'opacity-100'
        } `}
        src="./Profile.png"
        alt="Picture of Joel, altered with AI to look like an oil painting"
      />
    </>
  );
};

export default Picture;
