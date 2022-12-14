$(function() {
    let current = "home";

    for (let s = 1; s < $("section").parents().children().length; s++) {
        $("section").eq(s).hide();
    }
    traverse();
    /* When clicking on any of the header or footer links, the page will
       animate to change sections rather than manually go to different pages. 
    */
    function traverse() {
        $(".home").on("click", function() {
            change("home");
        });
        $(".about-me").on("click", function() {
            change("about-me");
            $("title").text("About Me - Portfolio");
        });
        $(".projects").on("click", function() {
            change("projects");
            $("title").text("Projects - Portfolio");
        });
        $(".skills-experience").on("click", function() {
            change("skills-experience");
            $("title").text("Skills & Experience - Portfolio")
        });
        $(".contact-me").on("click", function() {
            change("contact-me");
            $("title").text("Contact Me - Portfolio");
        });
    }
    /* The traversal works by fading the current section to disappear, then
       fades the section whose button was clicked to appear. */
    function change(link) {
        let linkClasses = $("." + link).attr("class").split(" ");
        console.log(linkClasses[1]);
        if (linkClasses[1] != current) {
            $("#" + current + "Section").fadeTo(1000, 0)
            $("#" + current + "Section").hide();
            $("#" + link + "Section").fadeTo(1000, 1);
            $("#" + link + "Section").show();
            current = linkClasses[1];
        }
    }
});
