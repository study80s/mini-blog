import React from "react";

// {title : "제목1", subTitle : "부제목1", date : "20.02 ~ 24.02", comment : "안녕하세요1"}
export default function Career({title,subTitle,date,comment}){
    return (
        <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="mt-2 text-muted">{subTitle}</p>
            <p className="text-muted">{date}</p>
            <p className="mt-2 text-muted">
                {comment}
            </p>
        </div>
    );
}