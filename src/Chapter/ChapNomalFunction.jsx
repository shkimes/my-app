

function ChapNomalFunction(){
    function add(a,b){
        return a+b;
    }
    return(
        <div>
            <h2>기본 함수 선언 방식</h2>
            <p>2+3={add}</p>
            {/*
            매개 변수나 파라미터를 작성하지 않았다고 해서 빨간줄이 나타나거나 실행이 안되는등
            문제가 되진 않음. 리액트 실행할 때는 문제발생했다 경보 울릴것
             */}
            <p>2+3 ={add(2,3)}</p>
        </div>
    )
}