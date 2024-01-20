import TaskCard from "../components/cards/TaskCard";
import Sidenav from "../components/Sidenav";
import addTask from '../assets/AddTask.svg';
import LevelTwo from "../components/cards/LevelTwo";
import Rewards from "../components/cards/Rewards"
import LevelThree from "../components/cards/LevelThree";


const Dashboard = () => {
    return (
        <>
            <Sidenav />
            <div className='md:ml-40 mt-[-7rem]'>
                <div className='flex flex-row items-center justify-center'>
                    <img src={addTask} alt="logo" className="w-24 h-24 absolute right-0 top-0 cursor-pointer ml-3" onClick={() => { navigate('deshbot') }} />
                </div>
                <TaskCard />
                <LevelTwo />
                <LevelThree />
            </div>
        </>
    );
}

export default Dashboard;