/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Selected papers: copy each paper into the card for its data-topic
    // (papers without one stay list-only), then let the toggle switch
    // between the chronological list and the cards
    $("#selected-list > .resume-item[data-topic]").each(function () {
        var paper = $(this).find(".resume-content").first().clone();
        paper.addClass("sp-paper");
        $('#selected-cards .sp-card[data-topic="' + $(this).data("topic") + '"]').append(paper);
    });

    $("#selected-toggle").click(function () {
        var showCards = $(this).attr("aria-pressed") !== "true";
        $("#selected-list").prop("hidden", showCards);
        $("#selected-cards").prop("hidden", !showCards);
        $(this).attr("aria-pressed", showCards).text(showCards ? "chronological" : "by topic");
    });
})(jQuery); // End of use strict
