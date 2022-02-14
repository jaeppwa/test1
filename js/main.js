var myFullpage = new fullpage('#fullpage', {
    menu: '.gnblist',
    anchors: ['section1', 'section2', 'section3','section4','section5'],
    sectionsColor: ['#000', 'transparent', '#36bced','#0ca1cb','#f46075'],
    // 기본 설정 autoScrolling: true,//스크롤바를 스크롤 하면 한페이지씩 넘어감 
    keyboardScrolling:false,
    verticalCentered: false,
    scrollBar: true,
    navigation:true,
    autoScrolling: true,
    responsiveHeight:350, //새로 높이가 작아 졌을때는 오토스크롤링이 작동 안됨 
    normalScrollElements:'#s2',//auto스크롤을 피하는 정상 스크롤 적용 
    //scrollOverflow:true///js파일 함께 사용해야함. scroll
});
/*document.querySelector(".scroll_guide").addEventListener("click",function(){
    fullpage_api.moveSectionDown();
});눌렀을때 한단계씩*/
document.querySelector(".nextS").addEventListener("click",function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});
document.querySelector(".preS").addEventListener("click",function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});

$(".total_Mitem").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(".total_Mitem").removeClass("active");
    $(this).addClass("active");}
})

 /*var myScroll = new IScroll('.total_menu', {
        mouseWheel: true,
        scrollbars: true,
    });
    myScroll();*/

    $(".total_menu_wrap").click(function(){
    $(".total_menu_z").addClass("active");
   
}); 
$(".total_close_wrap").click(function(){
    $(".total_menu_z").removeClass("active");
   
}); 
new WOW().init();

let map;

function initMap() {

  const myLatLng= { 
    lat:36.29753639529517,
    lng:127.55878770906591}
    //lat(titude) 위도 lng 경도(longitude)
  const  map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,//경도랑 위도 변수로 만들고 안에 집어 넣어 준다
        zoom: 18,//얼만큼 확대된 상태 인지 1~20까지  
  }); //구글 API map에 들어 있는 MAP함수 실행 
  const marker = new google.maps.Marker({
    position:  myLatLng,
    map: map,
  });
 //마커실행
}
