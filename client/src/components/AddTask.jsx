import React from 'react';
import addTask from '../assets/AddTask.svg';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Chat } from './Chat';


export const AddTask = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    console.log(open);


    return (
        <>
            <div className='flex flex-row items-center justify-center'>
                <img src={addTask} alt="logo" className="w-24 h-24 absolute right-0 top-0 cursor-pointer ml-3" onClick={handleOpen} />
            </div>
            <Dialog open={open} handler={handleOpen} size='lg'>
                <DialogHeader className='text-center bg-[#EBEBF1] rounded-t-xl'>SARTHI</DialogHeader>
                <DialogBody className='bg-[#e0dcec] rounded-b-xl max-h-[70vh] overflow-auto'>
                    <Chat />
                </DialogBody>
            </Dialog>
        </>
    )
}