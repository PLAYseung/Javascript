var cnt =0;
var $score = null;
var $fish = null;
var play = false;
var timeID = 0;

$(document).ready(() => {
    // 요소 초기화
    init();
    // 이벤트 등록 초기화
    initEvent();
});

// 전역에서 사용할 요소 찾아오기
function init(){
    $score = $('#score');
    $fish = $('#fish');
}

// 이벤트 등록하기
function initEvent() {
    // 버튼을 누루먄 게임 시작
    $('#start').click(()=>{
        startGame();
    });
    // 물고기를 클릭을 하면 점수가 증가
    $('#fish').click(()=>{
        addScore();
    })
}

function startGame() {
    // 플래그 변수로 false 일 때, 게임을 시작할 수 있게끔 만든다
    if (play == false) {
        // 게임이 종료가 되었는지 체크하는 함수 호출
        checkEndGame();
        play = true;
        timeID = setInterval(()=>{
            moveFish();
        },1000);
    }
}

function addScore() {
    if (play == true){
        cnt++;
        $score.html(cnt);
    }
}

function moveFish() {
    // 물고기의 크기 120*70
    // 패널의 크기 600*400
    // 물고기의 x이동 영역 0~480
    // 물고기의 y이동 영역 0~330 
    var x = parseInt(Math.random()*480);
    var y = parseInt(Math.random()*330);

    $fish.css({
        left : x,
        top : y
    });
}

function checkEndGame() {
    // 게임이 5초 뒤에 종료되게끔
    setTimeout(()=>{
        play = false;
        // 물고기를 움직이는 타이머를 제거
        clearInterval(timeID);
        alert('게임종료')
    },10000);
}