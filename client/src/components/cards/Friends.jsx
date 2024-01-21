import React from "react";
import Group from "../../assets/Group.svg"

export const Friends = () => {
    return(
        <>
            <div className="h-48 rounded-lg bg-[#CAFEF5] py-1 px-4 max-w-xl mx-auto flex justify-start hover:overflow-y-hidden w-full">
                <div className="m-2 flex flex-col items-start justify-between overflow-y-auto">
                    <div>
                        <p className=" text-3xl text-black font-action tracking-wide">Your Friends</p>
                    </div>
                    <div className="text-2xl text-black font-info overflow-hidden hover:overflow-auto">
                        <ol>
                            <li>Harshal</li>
                            <li>Pratham</li>
                            <li>Sujal</li>
                            <li>Dhruv</li>
                            <li>Rahil</li>
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                        <img src={Group} alt="Reward Icon" />
                </div>
            </div>
        </>
    )
};