import React from "react";
import person from "../image/장원영.jpg";
import Career from "./career.js";

export default function Home(){

    const careerList = [
        {title : "제목1", subTitle : "부제목1", date : "20.02 ~ 24.02", comment : "안녕하세요1"},
        {title : "제목2", subTitle : "부제목2", date : "21.02 ~ 24.02", comment : "안녕하세요2"},
        {title : "제목3", subTitle : "부제목3", date : "22.02 ~ 24.02", comment : "안녕하세요3"}
    ]

    return (
    <div className="w-full max-w-3-xl mx-auto py-12 px4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-2">
                <span className="flex overflow-hidden rounded-full w-24 h-24 ring-2 ring-primary">
                    <img alt="User Profile" src={person}/>
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
        <div className="mt-12 space-y-8">
            <h2 className="text-2xl font-bold mb-4">경력</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {careerList.map((opt)=>(
                    <Career comment={opt.comment}
                            date={opt.date}
                            title={opt.title}
                            subTitle={opt.subTitle}/>
                ))}
                

            </div>
        </div>
    </div>
    );
}