


const ChapArrowFunction = () => {
    const add =(a,b) => {
        return a+b;
    }
    // return 에서 a +b; 단일 코드만 작성하기 때문에 {} 와 return 을 사용가능
    const add2 = (a,b) => a+b;
    return (
        <div>
            <h2> 화살표 함수 선언 방식 </h2>
            <p>2+3 = {add(2,3)}</p>
            <p>2+3 = {add2(2,3)}</p>
        </div>
    )
}