    // header와 footer를 불러 오는 스트립트
    $(function(){
        $("#header").load("/html/header.html");
    });

    function goToScroll(name) {
      var location = document.querySelector("." + name).offsetTop;
      window.scrollTo({top: location, behavior: 'smooth'});
      }

