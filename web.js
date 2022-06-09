animate();

function animate(){
    let web = document.getElementById("web");
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let bootstrap = document.getElementById("bootstrap");

    const animateFuncs = [animate1(), animate2(), animate3(), animate4()];
    for (let i = 1; i <= 4; i++){
        animateFuncs[i];
    }

    function animate1() {
        web.addEventListener("click", function() {
            if (html.style.animationPlayState == "paused") {
                html.style.animationPlayState = "running";
            }  
            else {
                html.style.animationPlayState = "paused";
            }
        });
    }

    function animate2() {
        web.addEventListener("click", function() {
            if (css.style.animationPlayState == "paused") {
                css.style.animationPlayState = "running";
            }  
            else {
                css.style.animationPlayState = "paused";
            }
        });
    }

    function animate3() {
        web.addEventListener("click", function() {
            if (js.style.animationPlayState == "paused") {
                js.style.animationPlayState = "running";
            }  
            else {
                js.style.animationPlayState = "paused";
            }
        });
    }

    function animate4() {
        web.addEventListener("click", function() {
            if (bootstrap.style.animationPlayState == "paused") {
                bootstrap.style.animationPlayState = "running";
            }  
            else {
                bootstrap.style.animationPlayState = "paused";
            } 
        });
    }
}