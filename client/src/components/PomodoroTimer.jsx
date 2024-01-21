import { useState, useEffect } from 'react';
import { Button, Card, CardBody } from '@material-tailwind/react';
import { PlayIcon, PauseIcon, StopIcon } from "@heroicons/react/24/solid";

const PomodoroTimer = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isBreak, setIsBreak] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerId;
        if (isRunning && !timeLeft) return

        if (isRunning) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }

        return () => clearTimeout(timerId);
    }, [timeLeft, isRunning]);

    useEffect(() => {
        if (timeLeft === 0) {
            alert('Time for Break!');
            setIsBreak(!isBreak);
            setTimeLeft(isBreak ? 5 * 60 : 25 * 60) //switch for work and break
        }
    }, [timeLeft, isBreak]);

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    return (
        <Card className=' bg- shadow-lg drop-shadow-[50px_50px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm absolute left-16 top-10'>
            <CardBody>
                <div className='flex flex-col gap-3'>
                    <span className='text-5xl font-action text-white'>Time Left- {formatTime()}</span>
                    <div className='flex gap-5 items-center justify-center'>
                        <Button onClick={() => setIsRunning(!isRunning)} color='indigo'>
                            {isRunning ? <PauseIcon className="h-3 w-3" /> : <PlayIcon className="h-3 w-3" />}
                        </Button>
                        <Button onClick={() => setTimeLeft(0)} color='indigo' >
                            <StopIcon className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default PomodoroTimer;