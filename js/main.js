//searchJS
$(".search i").click(() => {
    $(".searchJs").toggleClass("toggle-serach");
    $(".from-serach").toggleClass("toggle-from");
})

$(".icon-serach").click(()=> {
    $(".icon-serach").toggleClass("toggle-search-mobile");
    $(".from-serach").toggleClass("toggle-from");
})

//bars
$(".icon-bars").click(() => {
    $(".nav-full").toggleClass("toggle-nav-mobile")
    $(".icon-bars").toggleClass("toggle-search-mobile");
})


//navJS
$(window).scroll(() => {
    if($(this).scrollTop() > 100)
    {
        $(".nav").addClass("sticky_nav")
        $(".nav-mobile").addClass("sticky_nav")
    }
    else 
    {
        $(".nav").removeClass("sticky_nav")
        $(".nav-mobile").removeClass("sticky_nav")
    }
})

console.log(window.innerWidth)