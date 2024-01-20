import TaskCard from "../components/cards/TaskCard";
import Sidenav from "../components/Sidenav";
import addTask from '../assets/AddTask.svg';
import LevelTwo from "../components/cards/LevelTwo";
import Rewards from "../components/cards/Rewards"
import LevelThree from "../components/cards/LevelThree";
import { AddTask } from "../components/AddTask";


const Dashboard = () => {
    return (
        <>
            <Sidenav />
            <div className='md:ml-40'>
                <AddTask />
                <TaskCard />
                <LevelTwo />
                <LevelThree />
            </div>
        </>
    );
}

export default Dashboard;