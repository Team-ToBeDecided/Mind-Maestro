import { Card } from '@material-tailwind/react';
// import React from 'react';

// const FloatingComponent = ({ title1, title2, content, icon: Icon }) => {
//     return (
//         <Card className="bg-white rounded-3xl shadow-lg drop-shadow-[50px_50px_35px_rgba(0,0,0,0.15)] border-2 p-3 m-4 max-w-64 text-black cursor-pointer">
//             <div className="flex items-center mb-2">
//                 {/* {Icon && <Icon className="text-blue-500 mr-2" />} */}
//                 <img src={Icon} alt="logo" className="w-10 h-10" />
//                 <div className="flex flex-col ml-2">
//                     <h2 className="text-lg font-action">{title1}</h2>
//                     <h2 className="text-lg font-action mt-[-10px]">{title2}</h2>
//                 </div>
//             </div>
//             <p className='text-lg font-info tracking-tight leading-tight'>{content}</p>
//         </Card>
//     );
// };

// export default FloatingComponent;

import React from 'react';

const FloatingComponent = ({ title1, title2, content, icon: Icon }) => {
    return (
        <Card className="bg-white hover:scale-105 rounded-3xl shadow-lg drop-shadow-[50px_50px_50px_rgba(0,0,0,0.05)] border-2 p-3 m-4 max-w-64 text-black cursor-pointer duration-300">
            <div className="flex items-center mb-2">
                {/* {Icon && <Icon className="text-blue-500 mr-2" />} */}
                <img src={Icon} alt="logo" className="w-10 h-10" />
                <div className="flex flex-col ml-2">
                    <h2 className="text-lg font-action">{title1}</h2>
                    <h2 className="text-lg font-action mt-[-10px]">{title2}</h2>
                </div>
            </div>
            <p className='text-lg font-info tracking-tight leading-tight'>{content}</p>
        </Card>
    );
};

export default FloatingComponent;