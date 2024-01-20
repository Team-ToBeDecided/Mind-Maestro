import React from "react";
import { Rewards } from "./Rewards";
import { Friends } from "./Friends";

const LevelTwo = () => {
    return (
        <>
            <div className="rounded-lg my-4 max-w-screen-xl mx-auto flex justify-between overflow-hidden w-full">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
                    <Rewards />
                    <Friends />
                </div>
            </div>
        </>
    )
}

export default LevelTwo;