import React from "react";
import person from "../image/장원영.jpg";

export default function Home(){
    return (
    <div className="w-full max-w-3-xl mx-auto py-12 px4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-2">
                <span className="flex overflow-hidden rounded-full w-24 h-24 ring-2 ring-primary">
                    <img alt="User Profile" src={person} />
                </span>
                <div className="text-center">
                    <h1 className="text-3xl font-bold">유정섭</h1>
                    <p className="text-stone-500">프런트엔드 개발자</p>
                </div>
            </div>
            <div className="text-center max-w-xl">
                <p className="text-stone-400">
                    노력한대로 보상 받는다는 것은 진리 맞지?
                    누가 대답을 해주면 좋겠음~^^
                </p>
            </div>
        </div>
    </div>
    );
}