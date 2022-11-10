// 전역변수로 선언
var $gigu = null;

$(document).ready(function(){
    initialize();
    event_earth();
});

// 전역변수를 초기화
function initialize(){
    // 지구본 찾기
    $earth = $('#earth');
}

function event_earth(){
    //버튼에 이벤트 등록
    $('#btnStart').click(function(){
        // 지구본 움직이기
        // 지구본 위치 값 구하기
        var x = parseInt($('#txtX').val());
        var y = parseInt($('#txtY').val());
        moveEarth(x,y);
    });
}

// 지구본의 움직임 기능을 구현한 함수
function moveEarth(x,y){
    if((x>=0 && x<=500)&&(y>=0 &&  y<=300)){
            $earth.css({
                left : x,
                top : y
            });
        }
        else{
            alert('입력된 값이 범위를 벗어 났습니다');
        }
}