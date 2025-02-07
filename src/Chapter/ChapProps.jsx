
// props = properties 의 약자
// 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터
// 자식 컴포넌트 props 값을 변경할 수 없음

/*
Parant : 부모가 상태를 관리
Child : 자식이 UI(User Interface 디자인)

DB 나 전달받고 전달할 값을 어떻게 받고 전달할 것인지에 대한 상태를 부모에서 작성
부모에게 전달하거나 전달받은 값은 자식 Component 디자인 내부에 작성


*/


// const ChapProps = () => {
//     // 부모 컴포넌트
//     const 부모 = () => {
//         // 자식에게 전달할 값을 작성
//         const 값전달 ="전달할 값";
//         return (
//
//             <div>
//                 <자식 매개변수 ={값전달} />
//             </div>
//         )
//     }
//
//     const 자식 = ({전달받은값}) => {
//         return(
//             <div>
//                 {전달받은값}
//                 {/* 전달받은값이 여러항목이라면 .을 이용해서 세부 항목 변수명 작성 */}
//                 {전달받은값}
//             </div>
//         )
//     }
// }

// 🧒💰👨‍👩‍👧‍👦


// Child 자식 컴포넌트 (부모에게 받은 재산을 표시)
// ㅇㅇㅇ 자식은 얼마를 받고
// ㅁㅁㅁ 자식은 얼마를 받음
const Child = ({name,inheritance}) => {
return(
    <div>
        <h2>🧒{name}의 재산 상속내역</h2>
        <p> 💰상속받은 재산 : {inheritance} 억 원</p>
    </div>
)
}

const Parent =() => {
    return(
        <div>
            <h1>👨‍👩‍👧‍👦 부모의 재산 상속</h1>
            <Child name="홍길동" inheritance={10} />
            <Child name="김철수" inheritance={5} />
            <Child name="김영희" inheritance={20} />
        </div>
    )

}
// Parent 부모 컴포넌트 (자식에게 재산을 넘겨줌)
export default Parent;