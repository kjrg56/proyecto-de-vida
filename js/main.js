$(document).ready(function() {
    $('.tabs').tabs();
    $('.collapsible').collapsible();

    var windowHeight = $(window).height()-48;
    
    $('.tab').css('height', windowHeight + 'px');

    $('.tabs').css('background-color', '#1b5e20');

    $('.tabs > li').click(function(e){
        e.preventDefault();
        var tabPosition = $(this).attr('id');

        $.each(tabColors, function(index, color) {
            if (tabPosition == index) {
                $('.tabs').css('background-color', color.colorCode);
            }
        });
    });

});

var tabColors = [
    {
        'id': 0,
        'colorCode': '#1b5e20' 
    },
    {
        'id': 1,
        'colorCode': '#01579b' 
    },
    {
        'id': 2,
        'colorCode': '#3e2723' 
    },
    {
        'id': 3,
        'colorCode': '#b71c1c' 
    },
    {
        'id': 4,
        'colorCode': '#263238' 
    },
    {
        'id': 5,
        'colorCode': '#311b92' 
    },
    {
        'id': 6,
        'colorCode': '#bf360c' 
    },
    {
        'id': 7,
        'colorCode': '#33691e' 
    },
    {
        'id': 8,
        'colorCode': '#1a237e' 
    },
];