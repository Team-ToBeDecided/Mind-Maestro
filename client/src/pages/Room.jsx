import React, { useEffect } from 'react';
import Timer from "../components/Timer";
import MusicPlayer from "../components/Music";
import BackgroundChanger from "../components/wallpaper";
import brain from "../assets/brain.png";

const Room = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${brain})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundPosition = null;
    };
  }, []);

  return (
    <div className="flex justify-between w-full mt-4 items-center ">
      <Timer />
      <div className="flex gap-4 mr-6 ">
        <MusicPlayer />
        <BackgroundChanger />
      </div>
    </div>
  );
};

export default Room;