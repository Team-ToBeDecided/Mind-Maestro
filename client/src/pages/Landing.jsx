import { useState } from 'react'
import FloatingComponent from '../components/FloatingComponent'
import logo from '../assets/logo.jpeg'
import brain from '../assets/brain.png'
import addTask from '../assets/AddTask.svg'
import Arrow from '../assets/Arrow.svg'
import Community from '../assets/CustomIcons/community.svg'
import Plan from '../assets/CustomIcons/plan.svg'
import Vouchers from '../assets/CustomIcons/vouchers.svg'
import Callendar from '../assets/CustomIcons/callendar.svg'
import { useNavigate } from 'react-router-dom';
import { Card } from '@material-tailwind/react';
import { UserAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
import Loader from '../components/loader/Loader'


export const Landing = () => {

    const [show, setShow] = useState("community");
    const [loading, setLoading] = useState(false);

    const { googleSignIn, user, changeLoading } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            // changeLoading();
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        async function DjangoUser() {
            try {
                const response = await axios.get(`http://localhost:8000/auth/users/?search=${user.uid}/`);

                if (response.status === 200) {
                    console.log(response.data);
                    if (!response.data || response.data.uid !== user.uid) return;
                    // User exists, redirect to dashboard
                    navigate('/dashboard');
                    // setLoading(false);
                } else {
                    // User does not exist, create user
                    const createUserResponse = await axios.post("http://localhost:8000/auth/users/", {
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName,
                        profile_picture: user.photoURL,
                    });
                    if (createUserResponse.status === 201) {
                        // User created, redirect to dashboard
                        navigate('/dashboard');
                        // setLoading(false);
                    } else {
                        console.log("Error creating user");
                        // setLoading(false);
                    }
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        if (user.uid) {
            DjangoUser();
        }
    }, [user]);

    return (
        <>
            {loading && <Loader />}
            <div className="flex flex-row items-center justify-between px-2 md:px-9 pt-3">
                <div className='flex flex-row items-center justify-center'>
                    <img src={logo} alt="logo" className="w-24 h-24" />
                    <div className='flex-col flex items-start justify-start gap-1 mt-1'>
                        <p className="text-4xl font-info font-light tracking-wider">MIND</p>
                        <p className="text-4xl font-info tracking-wider">MAESTRO</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <p className="text-xl font-action font-bold absolute md:flex tracking-wide right-36 hidden wobble animate-wobble">START HERE</p>
                    <img src={Arrow} alt="logo" className="w-8 h-8 absolute right-24 hidden md:flex wobble animate-wobble" />
                    <img src={addTask} alt="logo" className="w-24 h-24 absolute right-0 cursor-pointer ml-3" onClick={handleGoogleSignIn} />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center pt-5 md:pt-0'>
                <p className="md:text-3xl text-xl font-info tracking-wider">PLAN, SCHEDULE & ACCOMPLISH</p>
                <p className="md:text-3xl text-xl font-info tracking-wider">TO GET VOUCHERS</p>
                <p className="md:text-3xl text-xl font-info tracking-wider">WITH AI ON YOUR SIDE</p>
                <img src={brain} alt="brain" className='md:w-1/5 md:h-auto cursor-pointer px-2' onClick={handleGoogleSignIn} />
                <p className="text-2xl font-action">DECLUTTER YOUR MIND NOW</p>
            </div>
            <div className="flex flex-wrap justify-center mt-[-1rem]">
                <div onMouseEnter={() => { setShow("community") }}>
                    <FloatingComponent
                        title1="Community"
                        title2="Support"
                        content="BODY DOUBLES, PERSONLIZED HELP & MUCH MORE."
                        icon={Community}
                    />
                </div>
                <div onMouseEnter={() => { setShow("plan") }}>
                    <FloatingComponent
                        title1="PLAN & EXECUTE"
                        title2="WITH AI"
                        content="SARTHI(AI), YOUR PERSONAL MANAGER; PLANS TASKS FOR YOU."
                        icon={Plan}
                    />
                </div>
                <div onMouseEnter={() => { setShow("vouchers") }}>
                    <FloatingComponent
                        title1="Exclusive Offers &"
                        title2="Vouchers"
                        content="REWARD YOURSELVES WITH VOUCHERS FROM FAV BRANDS."
                        icon={Vouchers}
                    />
                </div>
                <div onMouseEnter={() => { setShow("callendar") }}>
                    <FloatingComponent
                        title1="Special Calendar"
                        title2="& ToDo list"
                        content="ALWAYS BE ON TRACK WITH OUR ENHANCED CALENDAR, TODO LIST."
                        icon={Callendar}
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center px-6 md:px-20 lg:px-36 xl:px-48 mt-4 w-full">
                <Card className="bg-white rounded-3xl shadow-lg border-2 h-[60vh] w-full self-center text-black">
                    {show === "community" && <div className="flex flex-col items-center justify-center h-full">
                        <img src={Community} alt="community" className="w-24 h-24" />
                        <p className="text-2xl font-action font-bold mt-2">Community Support</p>
                        <p className="text-lg font-info tracking-tight leading-tight mt-2">Body doubles, personalized help & much more.</p>
                    </div>}
                    {show === "callendar" && <div className="flex flex-col items-center justify-center h-full">
                        <img src={Callendar} alt="community" className="w-24 h-24" />
                        <p className="text-2xl font-action font-bold mt-2">Special Calendar & ToDo list</p>
                        <p className="text-lg font-info tracking-tight leading-tight mt-2">Always be on track with our enhanced calendar, todo list.</p>
                    </div>}
                    {show === "vouchers" && <div className="flex flex-col items-center justify-center h-full">
                        <img src={Vouchers} alt="community" className="w-24 h-24" />
                        <p className="text-2xl font-action font-bold mt-2">Exclusive Offers & Vouchers</p>
                        <p className="text-lg font-info tracking-tight leading-tight mt-2">Reward yourselves with vouchers from fav brands.</p>
                    </div>}
                    {show === "plan" && <div className="flex flex-col items-center justify-center h-full">
                        <img src={Plan} alt="community" className="w-24 h-24" />
                        <p className="text-2xl font-action font-bold mt-2">Plan & Execute with AI</p>
                        <p className="text-lg font-info tracking-tight leading-tight mt-2">Sarthi(AI), your personal manager; plans tasks for you.</p>
                    </div>}
                </Card>
            </div>
        </>
    )
}