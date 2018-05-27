
// Collapse btn//////////////////


document.getElementById("pointerBtn").addEventListener("click", toggleNav);

function toggleNav(){

    navSize = document.getElementById("mySidenav").style.width;
    if (navSize == 0) {
        return openNav();

    } else {
        return closeNav();

    }
};

function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
    document.getElementById("main").style.marginLeft = "220px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
};


//
// //////////////////////////Object function//////////////////////
//



$('#babyCareNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'block'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareobj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});


$('#beautyHealthNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'block'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareobj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});

$('#discountsNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'block'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareObj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});

$('#foodNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'block'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareoObj').css({
        'display' : 'none'
    });
    $('#populatObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});

$('#homeAppNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'block'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareObj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});


$('#homeCleaningNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'block'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareobj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});


$('#offerNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'block'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareObj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});



$('#officeProductNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'block'
    });
    $('#petCareObj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});


$('#petCareNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareoObj').css({
        'display' : 'block'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});


$('#popularNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareobj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'block'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});

$('#productReqNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareobj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'block'
    });
    $('#ramadanObj').css({
        'display' : 'none'
    });
    $('#home').css({
        'display' : 'none'
    });
});

$('#ramadanNav').click(function () {

    $('#babyCareObj').css({
        'display' : 'none'
    })
    $('#beautyHObj').css({
        'display' : 'none'
    });
    $('#discountObj').css({
        'display' : 'none'
    });
    $('#foodObj').css({
        'display' : 'none'
    });
    $('#homeAppObj').css({
        'display' : 'none'
    });
    $('#homeCleaningObj').css({
        'display' : 'none'
    });
    $('#offerObj').css({
        'display' : 'none'
    });
    $('#officeProductObj').css({
        'display' : 'none'
    });
    $('#petCareobj').css({
        'display' : 'none'
    });
    $('#popularObj').css({
        'display' : 'none'
    });
    $('#productReqObj').css({
        'display' : 'none'
    });
    $('#ramadanObj').css({
        'display' : 'block'
    });
    $('#home').css({
        'display' : 'none'
    });
});
