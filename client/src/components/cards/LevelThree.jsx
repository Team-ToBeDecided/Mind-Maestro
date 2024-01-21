import { Button } from "@material-tailwind/react";
import React from "react";

const LevelThree = () => {
    return (
        <>
            <div className="h-48 rounded-lg bg-[#E9DBFF] p-4 max-w-screen-xl mx-auto flex justify-start overflow-hidden w-full">
                <div className="m-2 flex flex-col items-start justify-start">
                    <div>
                        <p className="text-md md:text-3xl text-black font-action tracking-wide">Redeem Rewards</p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <div className="size-20 mx-5">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/225px-Starbucks_Coffee_Logo.svg.png" alt="Coupon" />
                            <Button color="indigo" className="mt-3 py-2 px-3 rounded-full" variant="ghost" >
                                Redeem
                            </Button>
                        </div>
                        <div className="size-24 mx-5">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1200px-Wendy%27s_full_logo_2012.svg.png" alt="Wendeys" />
                            <Button color="indigo" className="mt-3 py-2 px-3 rounded-full" variant="ghost" >
                                Redeem
                            </Button>
                        </div>
                        <div className="size-20 mx-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/McDonald%27s_Twitter_logo.png" alt="MCD" />
                            <Button color="indigo" className="mt-3 py-2 px-3 rounded-full" variant="ghost" >
                                Redeem
                            </Button>
                        </div>
                        <div>
                        <p className="text-md md:text-md text-black font-action tracking-wide">View More</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LevelThree;