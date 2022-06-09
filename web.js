animate();

function animate(){
    let webBases = document.getElementsByClassName("web-base");
    let webItems1 = document.getElementsByClassName("web-item-1");
    let webItems2 = document.getElementsByClassName("web-item-2");
    let webItems3 = document.getElementsByClassName("web-item-3");
    let webItems4 = document.getElementsByClassName("web-item-4");

    const animateFuncs = [animate1(), animate2(), animate3(), animate4()];
    for (let i = 1; i <= 4; i++){
        animateFuncs[i];
    }

    function animate1() {
        for (let e = 0; e < webBases.length; e++){
            webBases[e].addEventListener("click", function() {
                if (webItems1[e].style.animationPlayState == "paused") {
                    webItems1[e].style.animationPlayState = "running";
                }  
                else {
                    webItems1[e].style.animationPlayState = "paused";
                }
            });    
        }
    }

    function animate2() {
        for (let e = 0; e < webBases.length; e++){
            webBases[e].addEventListener("click", function() {
                if (webItems2[e].style.animationPlayState == "paused") {
                    webItems2[e].style.animationPlayState = "running";
                }  
                else {
                    webItems2[e].style.animationPlayState = "paused";
                }
            });    
        }
    }
    // Java Web does not have a third node at this time
    function animate3() {
        for (let e = 0; e < webBases.length; e++){
            if (e == 1){
                continue;
            }
            webBases[e].addEventListener("click", function() {
                if (webItems3[e].style.animationPlayState == "paused") {
                    webItems3[e].style.animationPlayState = "running";
                }  
                else {
                    webItems3[e].style.animationPlayState = "paused";
                }
            });    
        }
    }
    // Java Web does not have a fourth node at this time
    function animate4() {
        for (let e = 0; e < webBases.length; e++){
            if (e == 1){
                continue;
            }
            webBases[e].addEventListener("click", function() {
                if (webItems4[e].style.animationPlayState == "paused") {
                    webItems4[e].style.animationPlayState = "running";
                }  
                else {
                    webItems4[e].style.animationPlayState = "paused";
                } 
            });    
        }
    }
}