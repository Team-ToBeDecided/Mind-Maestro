import React, { useEffect, useState } from 'react';
import { Chip, Checkbox } from "@material-tailwind/react";
import Select from 'react-select';
import vecotor from '../../assets/Vector.svg';
import play from '../../assets/CustomIcons/Start.svg';
import axios from 'axios';

const difficultyOptions = [
    { value: 'Easy', label: 'Easy', color: 'green' },
    { value: 'Medium', label: 'Medium', color: 'purple' },
    { value: 'Hard', label: 'Hard', color: 'red' },
];

const TaskCard = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDifficulties, setSelectedDifficulties] = useState({});

  let getTasks = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `http://localhost:8000/tasks/tasks/`
      );
      let data = response.data;
      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleTaskDifficulty = (selectedDifficulty, taskId) => {
    setSelectedDifficulties(prevState => ({
      ...prevState,
      [taskId]: selectedDifficulty
    }));
  };

    const handleDifficulty = (selectedDifficulty) => {
        setDifficulty(selectedDifficulty);
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="h-48 rounded-lg bg-[#FFEDC1] p-4 max-w-screen-xl mx-auto mt-36 flex justify-between overflow-hidden hover:overflow-y-scroll">
            <div className="m-2 flex flex-col items-start justify-between">
                <div>
                    <p className="text-md md:text-3xl text-black font-action tracking-wide">Finish It</p>
                    <p className="text-md md:text-3xl text-black font-action tracking-wide">up!!!</p>
                </div>
                <img src={play} alt="play" className="w-10 h-10 cursor-pointer" onClick={() => { handleDifficulty('masti') }} />
            </div>

            <div className="w-px bg-black mx-4"></div>

      <div className="mb-2 max-h-max max-w-full">
        <p className='text-xl text-center font-action tracking-wide mb-1'>TASKS</p>
        <ol className='font-info'>
          {tasks.map((task, index) => (
            <li key={index}>
              <p>{task.title}</p>
            </li>
          ))}
        </ol>
      </div>

            <div className="w-px bg-black mx-4"></div>

            <div className='text-center'>
                <p className="text-xl text-center font-action tracking-wide mb-1">Difficulty</p>
                {tasks.map((task, index) => (
                <div key={index} className={`mb-2 grid grid-cols-3 gap-2 ${isSmallScreen ? 'hidden' : ''}`}>
                    {difficultyOptions.map((option) => (
                      <Chip
                        key={option.value}
                        value={option.value}
                        variant="ghost"
                        color={option.color}
                        onClick={() => { handleTaskDifficulty(option.value, task.id) }}
                        icon={
                          <Checkbox
                            color={option.color}
                            ripple={false}
                            containerProps={{ className: "p-0" }}
                            checked={selectedDifficulties[task.id] === option.value}
                            className="-ml-px border-2 border-purple-900 before:hidden checked:border-green-900 checked:bg-green-900"
                          />
                        }
                      />
                    ))}
                </div>
                ))}
                <div className={`mb-2 ${isSmallScreen ? 'block' : 'hidden'}`}>
                    <Select
                        options={difficultyOptions}
                        value={difficultyOptions.find((option) => option.value === difficulty)}
                        onChange={(selectedOption) => handleDifficulty(selectedOption.value)}
                        className="w-15 "
                        components={{
                            IndicatorSeparator: () => null,
                            DropdownIndicator: () => null,
                        }}
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                                fontSize: '0.6rem ',
                            }),
                            control: (provided) => ({
                                ...provided,
                                fontSize: '1rem p-1',
                            }),
                        }}
                        formatOptionLabel={(option) => (
                            <Chip
                                key={option.value}
                                value={option.value}
                                variant="ghost"
                                color={option.color}
                                onClick={() => { handleDifficulty(option.value) }}
                                icon={
                                    <Checkbox
                                        color={option.color}
                                        ripple={false}
                                        containerProps={{ className: "p-0" }}
                                        checked={difficulty === option.value}
                                        className="-ml-px border-2 border-green-900 before:hidden checked:border-green-900 checked:bg-green-900"
                                    />
                                }
                            />
                        )}
                    />
                </div>
            </div>

            <div className="w-px bg-black mx-4"></div>

            <div className='mb-2'>
                <p className='text-xl text-center font-action tracking-wide mb-1'>Points</p>
                {tasks.map((task, index) => (
                  <p key={index}>{task.points}</p>
                ))}
            </div>

            <div className="w-px bg-black mx-4"></div>

            <div>
                <img src={vecotor} alt="Scribble" className='w-full' />
            </div>
        </div>
    );
};

export default TaskCard;
