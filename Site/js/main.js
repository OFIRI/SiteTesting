$(document).ready(function() {
    //Array of images which you want to show: Use path you want.
    var images=new Array("../images/buldings.jpg","../images/desktop.jpg","../images/computer.jpg");
    var nextimage=0;
    doSlideshow();

    function doSlideshow(){
        if(nextimage>=images.length){nextimage=0;}
        $('section')
            .css('background-image','url("'+images[nextimage++]+'")')
            .fadeIn(500,function(){
                setTimeout(doSlideshow,3000);
            });
    }
});