$(function(){ //헤더 스크롤시 색상이 바뀜
    var $header = $('header');  //헤더를 변수에 넣기
    var $page = $('.main_top strong');  //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기

    $window.resize(function(){  //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
});

$window.on('scroll', function(){    //스크롤시
var scrolled = $window.scrollTop() >= pageOffsetTop;    //스크롤된 상태; true or false
$header.toggleClass('down', scrolled);  //클래스 토글
});
});


$('.slide1 > ul > li').hide(); //메인페이지(최상단) 슬라이드
$('.slide1 > ul > li:first-child').show(); 
setInterval(function(){
    $('.slide1 > ul > li:first-child').fadeOut()
    .next().fadeIn().end(1000)
    .appendTo('.slide1 > ul'); 
},4000);

const header =  document.querySelector('header')
const hamBtn = document.querySelector('.ham_btn');
const menu = document.querySelector('.gnb')

hamBtn.addEventListener('click',() =>{
    header.classList.toggle('active');
    menu.classList.toggle('active');
})


