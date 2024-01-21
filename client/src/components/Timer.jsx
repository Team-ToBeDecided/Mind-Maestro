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
        setTime(0);
    }
    const handleClick = () => {
        setIsClicked(!isClicked);
        startTimer();
    }


    const formatTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes} : ${getSeconds}`;
    }

    return (
      <Card className="mt-6 w-96">
        <CardBody className='flex flex-col justify-center items-center gap-4'>
          <span className='text-5xl'>{formatTime()}</span>
          <div className='flex gap-2'>
            <Button color="lightBlue" onClick={handleClick} className='bg-transparent text-black border-2'>
              {isClicked ? (
                <svg
                  class="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <rect x="6" y="4" width="4" height="16" />{" "}
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  class="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </Button>
            <Button color="lightBlue" onClick={resetTimer} className='bg-transparent text-black border-2'>
              <svg
                class="h-4 w-4 text-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />{" "}
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
              </svg>
            </Button>
          </div>
        </CardBody>
      </Card>
    );
}
export default Timer;