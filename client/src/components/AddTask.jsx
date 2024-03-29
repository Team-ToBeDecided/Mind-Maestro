import React from 'react';
import addTask from '../assets/AddTask.svg';
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { Chat } from './Chat';
import { useNavigate } from 'react-router-dom';


export const AddTask = () => {
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(!open);
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    console.log(open);


    return (
        <>
            <div className='flex flex-row items-center justify-center'>
                <img src={addTask} alt="logo" className="w-24 h-24 absolute right-0 top-0 cursor-pointer ml-3" onClick={handleOpen} />
            </div>
            <Dialog open={open} handler={handleOpen} size='lg'>
                <DialogHeader className='text-center bg-[#EBEBF1] rounded-t-xl flext justify-center'>SARTHI (Krishna to your Arjun)</DialogHeader>
                <DialogBody className='bg-[#e0dcec] rounded-b-xl max-h-[70vh] overflow-auto'>
                    <Chat closeChat={handleOpen} />
                </DialogBody>
            </Dialog>
        </>
    )
}