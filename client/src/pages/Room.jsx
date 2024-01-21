import React, { useEffect, useState } from 'react';
import Timer from '../components/Timer';
import MusicPlayer from '../components/Music';
import { Popover, PopoverHandler, PopoverContent, IconButton, Card } from '@material-tailwind/react';
import image1 from '../assets/himalaya.jpg';
import image2 from '../assets/simson.jpg';
import image3 from '../assets/snow.jpeg'
import PomodoroTimer from '../components/PomodoroTimer';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { UserAuth } from '../contexts/AuthContext';
import axios from 'axios';
const images = [image1, image2, image3];

const Room = () => {
  const [walli, setWalli] = useState(image2);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    setTask(location.state?.task);
    getTasks();
  }, []);

  const location = useLocation();

  let getTasks = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8000/tasks/tasks/?search=${user.uid}`
      );
      let data = response.data;
      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>

      <div className="flex justify-between w-full mt-4 items-baseline">
        <div style={{ backgroundImage: `url(${walli})` }}>
          <Popover placement="bottom" >
            <PopoverHandler>
              <PhotoIcon className="h-6 w-6 text-white absolute right-10 cursor-pointer" />
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
        {/* <Timer /> */}
        <PomodoroTimer />
        <div className="flex gap-4 mr-6 items-end">
          <MusicPlayer />
        </div>
      </div>
      <div className="absolute left-16 top-52">
        <Card className='bg-transparent rounded backdrop-blur-sm flex items-center justify-center max-w-lg p-3'>
          <div className='flex flex-col gap-3 max-h-[40vh] overflow-hidden hover:overflow-auto'>
            <span className='text-2xl font-action text-white'>Task- {task ? task.title : "Please Choose a Task"}</span>
            <ReactMarkdown className='text-md font-info text-white'>{task ? task.description : "Please Choose a Task"}</ReactMarkdown>
            { }
          </div>
        </Card>
      </div>
    </>

  );
};

export default Room;