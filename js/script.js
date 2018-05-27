

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
