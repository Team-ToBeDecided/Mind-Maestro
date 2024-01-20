import Sidenav from '../components/Sidenav';
import addTask from '../assets/AddTask.svg';



const Dashboard = () => {
    return (
        <>
            <Sidenav />
            <div className='md:ml-40'>
                <div className='flex flex-row items-center justify-center'>
                    <img src={addTask} alt="logo" className="w-24 h-24 absolute right-0 top-0 cursor-pointer ml-3" onClick={() => { navigate('deshbot') }} />
                </div>
            </div>
        </>
    );
}

export default Dashboard;