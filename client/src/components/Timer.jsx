import React, { useState, useEffect } from 'react';
import { Card, CardBody, Button } from "@material-tailwind/react";

export function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  }

  const stopTimer = () => {
    setIsActive(false);
  }

  const resetTimer = () => {
    setIsActive(false);
    setIsClicked(false)
    setTime(0);
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  const formatTime = () => {
    const getSeconds = `0${(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  }

  return (
    <div>
      <Card className="mt-6 w-96 bg-transparent text-white shadow-lg drop-shadow-[50px_50px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm">
        <CardBody className='flex flex-col justify-center items-center gap-4'>
          <span className='text-5xl'>{formatTime()}</span>
          <div className='flex gap-2'>
            <Button color="lightBlue" onClick={handleClick} className='bg-transparent text-black border-2'>
              {isClicked ? (
                <svg
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </Button>
            <Button color="lightBlue" onClick={resetTimer} className='bg-transparent text-black border-2'>
              <svg
                className="h-4 w-4 text-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
              </svg>
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96 bg-transparent text-white shadow-lg drop-shadow-[50px_50px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm">
        <CardBody className='flex flex-col justify-center items-center gap-4'>
          <h1>User task</h1>
          <li className='flex flex-col'>
            <span>
              <input type="checkbox" />
              <span>Task 1</span>
            </span>
            <span>
              <input type="checkbox" />
              <span>Task 2</span>
            </span>
            <span>
              <input type="checkbox" />
              <span>Task 3</span>
            </span>
          </li>
        </CardBody>
      </Card>
    </div>
  );
}

export default Timer;
