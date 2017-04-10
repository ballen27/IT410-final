$(document).ready(function(){
    $('#scapeMenu li a').on('click', function(){
        $('li a.white').removeClass('white');
        $(this).addClass('white');
    });

    $('.img-modal').hide();
    $('.close-modal').on('click', function(){
        $('.img-modal').hide();
    })


    $('.img-box').on('click', function(){
        var modImg = $(this).find("img").attr("src");
        document.getElementById("modImg").src = modImg;
        $('.img-modal').fadeIn(500);
    })

});

function changeLScape(){
    document.getElementById("scape1").src = "/img/lscape1.jpg";
    document.getElementById("scape2").src = "/img/lscape2.jpg";
    document.getElementById("scape3").src = "/img/lscape3.jpg";
    document.getElementById("scape4").src = "/img/wscape.jpg";
    document.getElementById("scape5").src = "/img/wscape2.jpg";
    document.getElementById("scape6").src = "/img/wscape3.jpg";
    // document.getElementById("lscape").style.color = "white";
    // document.getElementById("wscape").style.color = "#7f7e7e";
}
function changeWScape(){
    document.getElementById("scape1").src = "/img/wscape.jpg";
    document.getElementById("scape2").src = "/img/wscape2.jpg";
    document.getElementById("scape3").src = "/img/wscape3.jpg";
    document.getElementById("scape4").src = "/img/IMG_6784.jpg";
    document.getElementById("scape5").src = "/img/IMG_6237.jpg";
    document.getElementById("scape6").src = "/img/IMG_2941-Pano-Edit.jpg";
    // document.getElementById("wscape").style.color = "white";
}
function changeCScape(){
    document.getElementById("scape1").src = "/img/cscape.jpg";
    document.getElementById("scape2").src = "/img/cscape1.jpg";
    document.getElementById("scape3").src = "/img/IMG_0498.jpg";
    document.getElementById("scape4").src = "/img/IMG_0017.jpg";
    document.getElementById("scape5").src = "/img/IMG_5518-Edit.jpg";
    document.getElementById("scape6").src = "/img/IMG_5529-Edit.jpg";
    // document.getElementById("cscape").style.color = "white";
}
// function changeSScape(){
// 	document.getElementById("scape1").src = "/img/sscape.jpg";
// 	document.getElementById("scape2").src = "/img/sscape2.jpg";
// 	document.getElementById("scape3").src = "/img/sscape3.jpg";
// 	// document.getElementById("sscape").style.color = "white";
// }

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p:first").addClass("intro");
//     });
// });

