$(document).ready(function(){
    // 지구이미지 웹 요소 저장
    var $earth = $('#earth');
    //버튼에 이벤트 등록
    // 버튼을 클릭하면 콜백함수가 실행된다
    $('#btnStart').click(function(){
        $earth.animate({
            left : '480px'
        }, 5000); //5초 만에 left 값 480px 으로 설정하는 것 -> 애니메이션 형태가 됨
    })
})