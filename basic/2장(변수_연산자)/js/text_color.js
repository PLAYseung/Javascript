// heading 변수를 선언하고 h1 태크를 저장한 형태
var heading = document.querySelector("#heading");
// h1 태크를 클릭을 하면 글자 색을 red로 설정
heading.onclick = function() {
    heading.style.color = "red";
}