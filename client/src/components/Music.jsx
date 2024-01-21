import React, { useState, useEffect } from 'react';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import rain from "../assets/rain-and-thunder-nature-sounds-7803.mp3";
import { MusicalNoteIcon } from '@heroicons/react/24/solid';


const MusicPlayer = () => {
    const [volume, setVolume] = useState(50); // Initial volume level
    const [isPlaying, setIsPlaying] = useState(false); // State to control play and pause
    const [audio, setAudio] = useState(null); // State to hold the audio element


    useEffect(() => {
        const audio = new Audio(rain);
        setAudio(audio);
    }, []);

    useEffect(() => {
        if (audio) {
            audio.volume = volume / 100;
        }
    }
        , [volume, audio]);

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
                    <MusicalNoteIcon className="h-6 w-6 text-white absolute right-20 cursor-pointer" />
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
