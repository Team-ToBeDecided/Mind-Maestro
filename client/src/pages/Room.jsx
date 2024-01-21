import React, { useEffect, useState } from 'react';
import Timer from '../components/Timer';
import MusicPlayer from '../components/Music';
import { Popover, PopoverHandler, PopoverContent, IconButton } from '@material-tailwind/react';
import image1 from '../assets/himalaya.jpg';
import image2 from '../assets/simson.jpg';
import image3 from '../assets/snow.jpeg'
import PomodoroTimer from '../components/PomodoroTimer';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
const images = [image1, image2, image3];

const Room = () => {
  const [walli, setWalli] = useState(image1);
  const [task, setTask] = useState('');

  const changeBackgroundImage = (newImagePath) => {
    setWalli(newImagePath);
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
    <>
      <div style={{ backgroundImage: `url(${walli})` }}>
        <Popover placement="bottom-start" >
          <PopoverHandler>
            <IconButton className="text-black w-6 h-6 fixed right-5 top-10">
              <GlobeAltIcon className="h-6 w-6" />
            </IconButton>
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
      <div className="flex justify-between w-full mt-4 items-baseline">
        {/* <Timer /> */}
        <PomodoroTimer />
        <div className="flex gap-4 mr-6 items-end">
          <MusicPlayer />
        </div>
      </div>
    </>

  );
};

export default Room;