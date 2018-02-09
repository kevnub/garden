// initialize paroller.js and set attributes
$("#main").paroller({ factor: '0.5', type: 'background', direction: 'vertical' });

//Recursively add number of ticket option
function ticketchoices() {
    for(var i = 1; i < 11; i++){
     $('#ticketnumber, #ticketnumber2')
         .append($("<option></option>")
                    .text(i));
    }
};
ticketchoices();

//Calculate total ticket quanitity and price
var activities = document.getElementById("ticketnumber");
activities.addEventListener("click", function() {
    var e = document.getElementById("ticketnumber");
    var e2 = document.getElementById("ticketnumber2");
    var strUser = e.options[e.selectedIndex].text;
    var strUser2 = e2.options[e2.selectedIndex].text;
    var price = parseFloat(strUser)*17.50;
    var price2 = parseFloat(strUser2)*40.00;
    var final = (price+price2).toFixed(2);
    var qty = parseInt(strUser) + parseInt(strUser2);
    document.getElementById("demo").innerHTML="<b>Quantity: </b>"+qty+"&nbsp &nbsp &nbsp &nbsp &nbsp<b> Total: </b>$"+final;
});
var activities2 = document.getElementById("ticketnumber2");
activities2.addEventListener("click", function() {
    var e = document.getElementById("ticketnumber");
    var e2 = document.getElementById("ticketnumber2");
    var strUser = e.options[e.selectedIndex].text;
    var strUser2 = e2.options[e2.selectedIndex].text;
    var price = parseFloat(strUser)*17.50;
    var price2 = parseFloat(strUser2)*40.00;
    var final = (price+price2).toFixed(2);
    var qty = parseInt(strUser) + parseInt(strUser2);
    document.getElementById("demo").innerHTML="<b>Quantity: </b>"+qty+"&nbsp &nbsp &nbsp &nbsp &nbsp<b> Total: </b>$"+final;
});

//fade in sponsors
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn", 1000);
        }
    });
}
// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.star');
});
// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.star');
});
