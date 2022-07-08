$(function() {
    const animateFuncs = [animate1(), animate2(), animate3(), animate4()];
    for (let i = 1; i <= 4; i++){
        animateFuncs[i];
    }
    /* The else statements in the animate functions are used to ensure the 
       animations work as intended. */
    function animate1() {
        for (let e = 0; e < $(".web-base").length; e++){
            $(".web-base").eq(e).on("click", function() {
                if ($(".web-item-1").eq(e).css("animation-play-state") == "paused") {
                    $(".web-item-1").eq(e).css("animation-play-state", "running");
                    setTimeout(function() {
                        $(".web-item-1").eq(e).css("animation-play-state", "paused");
                    }, 1000);
                }
                else {
                    $(".web-item-1").eq(e).css("animation-play-state", "paused");
                }  
            });    
        }
    }

    function animate2() {
        for (let e = 0; e < $(".web-base").length; e++){
            $(".web-base").eq(e).on("click", function() {
                if ($(".web-item-2").eq(e).css("animation-play-state") == "paused") {
                    $(".web-item-2").eq(e).css("animation-play-state", "running");
                    setTimeout(function() {
                        $(".web-item-2").eq(e).css("animation-play-state", "paused");
                    }, 1000);
                }
                else {
                    $(".web-item-2").eq(e).css("animation-play-state", "paused");
                }  
            });    
        }
    }
    // Java Web does not have a third node at this time
    function animate3() {
        for (let e = 0; e < $(".web-base").length; e++){
            if (e == 1) {
                continue;
            }
            $(".web-base").eq(e).on("click", function() {
                if ($(".web-item-3").eq(e).css("animation-play-state") == "paused") {
                    $(".web-item-3").eq(e).css("animation-play-state", "running");
                    setTimeout(function(){
                        $(".web-item-3").eq(e).css("animation-play-state", "paused");
                    }, 1000);
                }  
                else {
                    $(".web-item-3").eq(e).css("animation-play-state", "paused");
                }
            });    
        }
    }
    // Java Web does not have a fourth node at this time
    function animate4() {
        for (let e = 0; e < $(".web-base").length; e++){
            if (e == 1) {
                continue;
            }
            $(".web-base").eq(e).on("click", function() {
                if ($(".web-item-4").eq(e).css("animation-play-state") == "paused") {
                    $(".web-item-4").eq(e).css("animation-play-state", "running");
                    setTimeout(function() {
                        $(".web-item-4").eq(e).css("animation-play-state", "paused");
                    }, 1000);
                }  
                else {
                    $(".web-item-4").eq(e).css("animation-play-state", "paused");
                }
            });    
        }
    }
});