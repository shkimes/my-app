
// 기본값 설정
import React from "react";


// 중괄호 제외 소괄호 버젼
const MusicPlay = ({ songs = [] }) => {
    if (!songs.length) return <div>재생 목록이 없습니다.</div>;
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>

            <ul>
                {songs.map((song, index) => (
                    <li key={index}>
                        {song.title && song.artist ?
                            (song.title + " 의 작곡자는 " + song.artist + "님 입니다.") :
                            "재생 목록이 없습니다."
                        }</li>
                ))
                }
            </ul>
        </div>
    );
};


// 중괄호 포함 버젼
const Todo = ({ tasks }) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.task && task.done ?
                        `${task.task}을 오늘 ${task.done} 하였다.` : " 할 일이 없습니다"}</li>
                ))}
            </ul>
        </div>
    );
};




// 소괄호 중괄호 다 없는 버젼
const TeamMembers = ({ teamMembers  }) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {teamMembers .map((teamMember, index) => (
                    <li key={index}>
                        {teamMember.name && teamMember.role ?
                        teamMember.name+"님은"+ teamMember.role+"입니다." : "등록된 팀원이 없습니다"}</li>
                ))}
            </ul>
        </div>
    );
};




const ShoppingCart = ({ cartItems  }) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {cartItems .map((cartItem, index) => (
                    <li key={index}>
                        {cartItem.item && cartItem.quantity ?
                        `${cartItem.item}을 ${cartItem.quantity}개 담았습니다` : "장바구니가 비었습니다"}</li>
                ))}
            </ul>
        </div>
    );
};




const EventSchedule = ({ events  }) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {events .map((event, index) => (
                    <li key={index}>
                        {event.name && event.date ?
                        `행사종류는 ${event.name}으로 ${event.date} 에 행사합니다.` : "예정된 행사가 없습니다."}</li>
                ))}
            </ul>
        </div>
    );
};




const Parent = () => {



    // 부모 컴포넌트에서 전달할 데이터
    const songsList = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        { artist: "Black Pink" }
];

    // 부모 컴포넌트에서 전달할 데이터
    const tasksList = [
        { task: "React 공부하기", done: false },
        { task: "운동하기", done: true },
        { task: "책 읽기", done: false },
        { done: false }
    ];

    // 부모 컴포넌트에서 전달할 데이터
    const teamMembersList = [
        { name: "김철수", role: "프론트엔드 개발자" },
        { name: "박영희", role: "백엔드 개발자" },
        { name: "이민호", role: "디자이너" },
        { role: "시스템 개발자" }
    ];

    // 부모 컴포넌트에서 전달할 데이터
    const cartItemsList = [
        { item: "노트북", quantity: 1 },
        { item: "무선 마우스", quantity: 2 },
        { item: "키보드", quantity: 1 }
    ];

    // 부모 컴포넌트에서 전달할 데이터
    const eventsList = [
        { name: "React 컨퍼런스", date: "2025-03-10" },
        { name: "개발자 밋업", date: "2025-04-22" },
        { name: "해커톤", date: "2025-05-15" }
    ];
    return (
        <>
        <MusicPlay songs = {songsList} />
            <Todo tasks={tasksList}/>
            <TeamMembers teamMembers={teamMembersList}/>
            <ShoppingCart cartItems={cartItemsList}/>
            <EventSchedule events={eventsList}/>
        </>
    )
}

const PracticePropsArrayDefault = () => {
    return (
        <div>
            <Parent/>
        </div>
    )
}


export default PracticePropsArrayDefault;



// JSX 에서 중괄호는 자바 스크립트 표현식을 사용할 때 필요. 예시로 {song.title}는 변수 값을 출력할 때 사용
// 하지만 중괄호를 제외하고 출력이 가능하다.