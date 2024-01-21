import React, { useEffect, useState } from 'react';
import Timer from '../components/Timer';
import MusicPlayer from '../components/Music';
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import image1 from '../assets/himalaya.jpg';
import image2 from '../assets/simson.jpg';
import image3 from '../assets/snow.jpeg'
import PomodoroTimer from '../components/PomodoroTimer';
const images = [image1, image2, image3];

const Room = () => {
  const [walli, setWalli] = useState(image1); // Use image3 as initial state

  const BackgroundChanger = () => {
    const changeBackgroundImage = (newImagePath) => {
      setWalli(newImagePath);
    };

    return (
      <div style={{ backgroundImage: `url(${walli})` }}>
        <Popover placement="bottom-start" >
          <PopoverHandler>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute right-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </PopoverHandler>
          <PopoverContent className="flex bg-transparent backdrop-blur-sm">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: '4vw', height: '4vw', margin: '0.5vw', cursor: 'pointer' }}
              onClick={() => changeBackgroundImage(image)}
            />
          ))}
          </PopoverContent>
        </Popover>
      </div>
    );
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${walli})`;
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
    };
  }, [walli]);

  return (
    <div className="flex justify-between w-full mt-4 items-baseline">
      {/* <Timer /> */}
      <PomodoroTimer />
      <div className="flex gap-4 mr-6 items-end">
        <MusicPlayer />
        <BackgroundChanger />
      </div>
    </div>
  );
};

export default Room;