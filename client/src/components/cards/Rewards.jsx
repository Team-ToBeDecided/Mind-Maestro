import React from "react";
import Reward from "../../assets/Rewards.svg"

export const Rewards = () => {
    return (
        <>
            <div className="h-48 rounded-lg bg-[#DDFEB3] py-1 px-4 max-w-xl mx-auto flex justify-start overflow-hidden w-full">
                <div className="m-2 flex flex-col items-start justify-between">
                    <div>
                        <p className=" text-3xl text-black font-action tracking-wide">Earned</p>
                        <p className=" text-3xl text-black font-action tracking-wide">Rewards</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                    <img src={Reward} alt="Reward Icon" />
                </div>
            </div>
        </>
    )
}

export default Rewards;