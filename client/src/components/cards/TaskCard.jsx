import React, { useState } from 'react';
import { Chip, Checkbox, Button } from "@material-tailwind/react";
import vecotor from '../../assets/Vector.svg'
import play from '../../assets/CustomIcons/Start.svg';


const TaskCard = () => {
    const [difficulty, setDifficulty] = useState(null);

    const handleDifficulty = (selectedDifficulty) => {
        setDifficulty(difficulty === selectedDifficulty ? null : selectedDifficulty);
    };

    return (
        <div className="h-48 rounded-lg bg-[#FFEDC1] p-4 max-w-screen-xl mx-auto mt-36 flex justify-between overflow-hidden hover:overflow-y-scroll">
            <div className="m-2 flex flex-col items-start justify-between">
                <div>
                    <p className=" text-3xl text-black font-action tracking-wide">Finish It</p>
                    <p className=" text-3xl text-black font-action tracking-wide">up!!!</p>
                </div>
                <img src={play} alt="play" className="w-10 h-10 cursor-pointer" onClick={() => { handleDifficulty('masti') }} />
            </div>

            <div className="w-px bg-black mx-4"></div>


            <div className="mb-2 max-h-max max-w-full">
                <p className='text-xl text-center font-action tracking-wide mb-1'>TASKS</p>
                <ol className='font-info'>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                    <li>Task 4</li>
                    <li>Task 4</li>
                    <li>Task 4</li>
                    <li>Task 4</li>
                    <li>Task 4</li>
                </ol>
            </div>

            <div className="w-px bg-black mx-4"></div>

            <div className='text-center'>
                <p className="text-xl text-center font-action tracking-wide mb-1">Difficulty</p>

                <div className="mb-2 grid grid-cols-3 gap-2">
                    <Chip
                        value="Easy"
                        variant="ghost"
                        color="green"
                        onClick={() => { handleDifficulty('Easy') }}
                        icon={
                            <Checkbox
                                color="green"
                                ripple={false}
                                containerProps={{ className: "p-0" }}
                                checked={difficulty === 'Easy'}
                                className="-ml-px border-2 border-green-900 before:hidden checked:border-green-900 checked:bg-green-900"
                            />
                        }
                    />
                    <Chip
                        value="Medium"
                        variant="ghost"
                        color="purple"
                        onClick={() => { handleDifficulty('Medium') }}
                        icon={
                            <Checkbox
                                color="purple"
                                ripple={false}
                                containerProps={{ className: "p-0" }}
                                checked={difficulty === 'Medium'}
                                className="-ml-px border-2 border-purple-900 before:hidden checked:purple-green-900 checked:bg-purple-900"
                            />
                        }
                    />
                    <Chip
                        value="Hard"
                        variant="ghost"
                        color="red"
                        onClick={() => { handleDifficulty('Hard') }}
                        icon={
                            <Checkbox
                                color="red"
                                ripple={false}
                                containerProps={{ className: "p-0" }}
                                checked={difficulty === 'Hard'}
                                className="-ml-px border-2 border-red-900 before:hidden checked:border-red-900 checked:bg-red-900"
                            />
                        }
                    />
                </div>
            </div>


            <div className="w-px bg-black mx-4"></div>

            <div className='mb-2'>
                <p className='text-xl text-center font-action tracking-wide mb-1'>Points</p>
                <p className=''>{difficulty}</p>
            </div>

            <div className="w-px bg-black mx-4"></div>

            <div>
                <img src={vecotor} alt="Scribble" className='w-full' />
            </div>
        </div>
    );
}

export default TaskCard;