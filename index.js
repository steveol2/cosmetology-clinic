


$("document").ready(function(){
    $("#first").waypoint(function(){
        $("#first").addClass("animate__animated animate__fadeInDown animate__slower");
    },{offset: "80%"}  );
});

$("document").ready(function(){
    $("#third").waypoint(function(){
        $("#third").addClass("animate__animated animate__fadeInDown animate__slower");
    },{offset: "80%"}  );

});




    // button bounce

  $("#bounce").hover(function() {
    doBounce($(this), 1, '5px', 300);   
});




function doBounce(element, times, distance, speed) {
    for(i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance},speed)
            .animate({marginTop: '+='+distance},speed);
    }        
}





  