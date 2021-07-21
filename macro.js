//접종예약버튼
let refresh = document.getElementsByClassName("_1MCHh")[0];


//리프레쉬클릭 후, text가 대기중이 아니면, 접종예약신청을 누름
function jabja(){
    refresh.click();// 업데이트하기
let apply=document.getElementsByClassName("lwEWu")[0]; //잔여백신 신청하기 버튼의 클래스 
//잔여백신 상태표시의 클래스( ex)"대기중")
let x = document.getElementsByClassName("_2RpG_"); 
//x의 innerxText가 "잔여백신\n대기중"이렇게 되어있고, 대기중이 strong태그로 묶여있으므로 strong태그의 innerText를 읽음
let text = x[0].getElementsByTagName('strong')[0].innerText;//대기중, 0, 1, 2,3, 마감 등 잔여백신 상태는 stong태그로 묶여있음

    if(text !="대기중" && text != "0" && text != "마감"){
        apply.click();
        clearInterval(refeat);
    }
}

//2초마다 실행
refeat= setInterval(jabja,2000);