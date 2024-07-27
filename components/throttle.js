
$(()=>{
    $("#indicator").css("height", throttle/2)
    $("#indicator").css("margin-top", 50-throttle/2)
})

addEventListener("keydown", (event) => {
    if(event.code=="ShiftLeft"){
        throttle += 2
        $("#indicator").css("height", throttle/2)
        $("#indicator").css("margin-top", 50-throttle/2)
    }
    if(event.code=="ControlLeft"){
        throttle -= 2
        $("#indicator").css("height", throttle/2)
        $("#indicator").css("margin-top", 50-throttle/2)
    }
    if(throttle > 100){
        throttle=100
    }
    if(throttle<0){
        throttle=0
    }
});