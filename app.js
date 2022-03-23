(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }


    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }


    /**
      * Mobile nav toggle
      */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
        $('#header').toggleClass('top-zindex')

        $('body').toggleClass('noscroll')
    })




})()


$list = $('#navbarlist')

$(window).scroll(function () {
    if ($collapseshown) {
        $measures()


    }
})

function $measures() {
    $listheight = $list.outerHeight(true);
    $scroll = $(window).scrollTop();
    $fromnavdistance = $('#header').offset().top;
    $availble = ($fromnavdistance - $scroll);
    $spacebelow = $(window).height() - $(header)[0].getBoundingClientRect().bottom;
    $movelist()
}

function $movelist() {
    if ($availble >= $listheight && $list.hasClass("down") && $spacebelow < $listheight) {
        $list.removeClass("down");
    }
    else if ($spacebelow >= $listheight || $availble < $listheight) {
        $list.addClass("down");
    }
}

$("#navbarlist,#serv3").click(function (e) {
    e.stopPropagation();
});
$collapseshown = false;
$list.on('show.bs.collapse', function () {
    $collapseshown = true;
    $measures()

})


$(document).click(function () {
    if ($collapseshown) {
        $closelist()
    }
});

function $closenavmobile() {
    $('#navbar').toggleClass('navbar-mobile')
    $('#header').toggleClass('top-zindex')
    $('.mobile-nav-toggle').toggleClass('bi-list')
    $('.mobile-nav-toggle').toggleClass('bi-x')
    $('body').toggleClass('noscroll')

}

$('.alink').click(function () {
    $closelist()
})
$activ = $('#herol,#aboutl,#serv3,#serv,#contl')
$activ.click(function () {
    if ($(".mobile-nav-toggle").is(":visible")) {
        $closenavmobile()
    }

})


$list2 = $('#collapse2')
$list3 = $('#collapse3')
$list4 = $('#collapse4')

function $closelist() {
    if ($list.hasClass("show")) {
        new bootstrap.Collapse($list, {
            hide: true
        })
    }

    if ($list2.hasClass("show")) {
        new bootstrap.Collapse($list2, {
            hide: true
        })
    }

    if ($list3.hasClass("show")) {
        new bootstrap.Collapse($list3, {
            hide: true
        })
    }

    if ($list4.hasClass("show")) {
        new bootstrap.Collapse($list4, {
            hide: true
        })
    }
}

$('#serv3').click(function (e) {
    e.preventDefault();
})

$(window).resize(function () {
    if ($(".mobile-nav-toggle").is(":visible")) {
        $closelist()
    }
    if (!$(".mobile-nav-toggle").is(":visible") && $('#navbar').hasClass('navbar-mobile')) {
        $closenavmobile()
    }
})


