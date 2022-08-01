$(function() {
    animate();
    /* Controls the playback of the web node animations to ensure the flow of 
       motion is smooth to users */
    function animate() {
        for (let node = 1; node <= 4; node++) {
            for (let e = 0; e < $(".web-base").length; e++){
                $(".web-base").eq(e).on("click", function() {
                    // Based on the node with the subnode
                    if (node == 3) {
                        if ($(".web-item-" + node).eq(e).css("animation-play-state") == "paused" 
                        && $(".web-item-" + node + "-1").eq(e).css("animation-play-state") == "paused") {
                            //console.log($(".web-item-" + node + "-1").eq(e).css("opacity"));
                            if (Math.round($(".web-item-" + node + "-1").eq(e).css("opacity")) + "" == "0") {
                                //console.log("1");
                                $(".web-item-" + node).eq(e).css("animation-play-state", "running");
                                setTimeout(function() {
                                    $(".web-item-" + node).eq(e).css("animation-play-state", "paused");
                                    $(".web-item-" + node + "-1").eq(e).css("animation-play-state", "running");
                                }, 1000);
                                setTimeout(function() {
                                    $(".web-item-" + node + "-1").eq(e).css("animation-play-state", "paused");
                                }, 2000);
                            }
                            else {
                                //console.log("2");
                                $(".web-item-" + node + "-1").eq(e).css("animation-play-state", "running");
                                setTimeout(function() {
                                    $(".web-item-" + node + "-1").eq(e).css("animation-play-state", "paused");
                                    $(".web-item-" + node).eq(e).css("animation-play-state", "running");
                                }, 1000);
                                setTimeout(function() {
                                    $(".web-item-" + node).eq(e).css("animation-play-state", "paused");
                                }, 2000);
                            }      
                        }        
                    }
                    else {
                        if ($(".web-item-" + node).eq(e).css("animation-play-state") == "paused") {
                            $(".web-item-" + node).eq(e).css("animation-play-state", "running");
                            setTimeout(function() {
                                $(".web-item-" + node).eq(e).css("animation-play-state", "paused");
                            }, 1000);    
                        }    
                    }
                });    
            }
        }
    }
});
