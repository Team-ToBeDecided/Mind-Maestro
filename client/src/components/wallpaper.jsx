import React, { useState } from 'react';
import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";


const BackgroundChanger = () => {
    const [bgImage, setBgImage] = useState('initial_image_path');

    const changeBackgroundImage = (newImagePath) => {
        setBgImage(newImagePath);
    };

    return (
        <div style={{ backgroundImage: `url(${bgImage})`,}}>
            <Popover placement="bottom-start">
                <PopoverHandler>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </PopoverHandler>
                <PopoverContent className="flex">
                    {[1, 2, 3].map((index) => (
                        <img
                            key={index}
                            src={`/assets/image${index}.png`} // Adjust the path based on your actual image paths
                            alt={`Image ${index}`}
                            style={{ width: '4vw', height: '4vw', margin: '0.5vw', cursor: 'pointer' }}
                            onClick={() => changeBackgroundImage(`/assets/image${index}.png`)} // Use the correct image path
                        />
                    ))}
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default BackgroundChanger;