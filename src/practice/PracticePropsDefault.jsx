
import React from "react";

const PracticePropsDefault = () => {


    return (
        <div>
            <Parent/>
        </div>
    )

}

    const NameDisplay = ({ name = "이름 없음" }) => {
        return (
            <div>
                <h2>이름: {name}</h2>
            </div>
        );
    };

    const AgeDisplay = ({ age = 20 }) => {
        return (
            <div>
                <h2>나이: {age}세</h2>
            </div>
        );
    };


const MessageDisplay = ({ message = "기본 메세지입니다." }) => {
    return (
        <div>
            <p>📢 {message}</p>
        </div>
    );
};

const ColorBox = ({ color = "gray"}) => {
    return (
        <div style={{ backgroundColor: color, width: "100px", height: "100px" }}>
            🎨 색상 박스
        </div>
    );
};

const CustomButton = ({ text = "클릭하세요" }) => {
    return (
        <button>{text}</button>
    );
};


const Parent = () => {
    return(
        <div>
            <NameDisplay   />
            <AgeDisplay    />
            <MessageDisplay    />
            <ColorBox    />
            <CustomButton    />
        </div>
    )
}

// 기본값 설정





export default PracticePropsDefault;