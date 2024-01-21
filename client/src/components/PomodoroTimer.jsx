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
        if(timeLeft === 0) {
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
        <Card style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000, backgroundColor: 'black' }}>
            <CardBody>
            <div className='flex'>
                <span className='text-5xl font-action'>Time Left: {formatTime()}</span>
                    <Button onClick={() => setIsRunning(!isRunning)}>
                        {isRunning ? <PauseIcon className="h-2 w-2" /> : <PlayIcon className="h-2 w-2" />}
                    </Button>
                    <Button onClick={() => setTimeLeft(0)}>
                        <StopIcon className="h-2 w-2" />
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default PomodoroTimer;