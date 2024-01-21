import React, { useState, useEffect } from 'react';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";

const MusicPlayer = () => {
    const [volume, setVolume] = useState(50); // Initial volume level
    const [isPlaying, setIsPlaying] = useState(false); // State to control play and pause
    const [audio, setAudio] = useState(null); // State to hold the audio element

    
    useEffect(() => {
        const audio = new Audio('../assets/rain-and-thunder-natural-song.mp3');
        setAudio(audio);
    }, []);

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    return (
        <div>
            <Popover placement="bottom-start">
                <PopoverHandler>
                    <svg className="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                    </svg>
                </PopoverHandler>
                <PopoverContent className='bg-transparent backdrop-blur-sm'>
                    <div className='flex gap-2'>
                        <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
                        <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default MusicPlayer;
