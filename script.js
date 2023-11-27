$(document).ready(function(){
    $('.accordion > li > div').click(function(){
        if($(this).next().is(':hidden')){
            $('.accordion ul').slideUp();
        }
        $(this).next().slideToggle()
    })
})