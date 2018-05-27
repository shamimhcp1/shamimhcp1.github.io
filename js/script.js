
$('#hCardBtn').click(function () {

    $('#hCardObject').css({
        'display' : 'block'
    })
    $('#vCardObject').css({
        'display' : 'none'
    });

});


$('#vCardBtn').click(function () {
    $('#vCardObject').css({
        'display' : 'block'
    })
    $('#hCardObject').css({
        'display' : 'none'
    });
});

// ----DUBALE CLICK FUNCTION----
        
$('#vCardBtn').dblclick(function(){
 $('#vCardObject').css({
        'display' : 'none'
    });
});


$('#hCardBtn').dblclick(function(){
    $('#hCardObject').css({
        'display' : 'none'
    });
})