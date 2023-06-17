// $(document).ready(() => {
//     $(".cdp-container").hide();
//     $(".reveal-btn").click(() => {
//         $(".reveal-btn").css("transform", "scale(0)");
//         setTimeout(() => {
//             $(".reveal-btn").hide();
//             $(".cdp-container").show();
//             setTimeout(() => {
//                 $(".cdp-container").css("transform", "scale(1)");
//             }, 100);
//         }, 200);
//     });
// });
// $(function () {
//     var tileSize,
//         currTile,
//         otherTile,
//         rows = 4,
//         columns = 4,
//         turns = 0,
//         i,
//         blank,
//         blankTile,
//         par = $("#cover"),
//         bTileIndex,
//         neighbourTiles = [],
//         nLen,
//         ind,
//         imgUrls = [5, 1, 7, 3, 9, 6, 11, 4, 2, 13, 10, 8, 12, 14, 15, 16];
//     // imgUrls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15];

//     function dragStart(e) {
//         currTile = this;
//     }

//     function dragEnd(e) {

//     }

//     function dragOver(e) {
//         e.preventDefault();
//     }

//     function dragEnter(e) {
//         e.preventDefault();
//     }

//     function dragLeave(e) {

//     }

//     function drop(e) {
//         otherTile = this;
//     }

//     function dragEnd(e) {
//         if (!$(otherTile).hasClass("blank")) {
//             return;
//         }

//         let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
//         let r = parseInt(currCoords[0]);
//         let c = parseInt(currCoords[1]);

//         let otherCoords = otherTile.id.split("-");
//         let r2 = parseInt(otherCoords[0]);
//         let c2 = parseInt(otherCoords[1]);

//         let moveLeft = r == r2 && c2 == c - 1;
//         let moveRight = r == r2 && c2 == c + 1;

//         let moveUp = c == c2 && r2 == r - 1;
//         let moveDown = c == c2 && r2 == r + 1;

//         let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

//         if (isAdjacent) {
//             let currImg = currTile.src;
//             let otherImg = otherTile.src;

//             currTile.src = otherImg;
//             otherTile.src = currImg;
//         }
//     }

//     // function moveImage() {
//     //     for (var i = 0; i < $(blankTile).length; i++) {
//     //         console.log(i);
//     //         var blankTileIndex,
//     //             clickedTileIndex,
//     //             id = $(this).attr("id");

//     //         blankTileIndex = $(".img").index(blankTile[i]);
//     //         clickedTileIndex = $(".img").index(this);

//     //         if (blankTileIndex == clickedTileIndex + 1 && blankTileIndex % 4 != 0) {
//     //             $("#" + id).before(blankTile[i]);
//     //         } else if (
//     //             blankTileIndex == clickedTileIndex - 1 &&
//     //             clickedTileIndex % 4 != 0
//     //         ) {
//     //             $("#" + id).after(blankTile[i]);
//     //         } else if (
//     //             blankTileIndex + 4 == clickedTileIndex ||
//     //             blankTileIndex == clickedTileIndex + 4
//     //         ) {
//     //             var prev1 = $("#" + id).prev(),
//     //                 prev2 = $(blankTile[i]).prev();

//     //             if (prev1.length == 0) par.prepend(blankTile[i]);
//     //             else $(prev1).after(blankTile[i]);

//     //             if (prev2.length == 0) par.prepend($("#" + id));
//     //             else $(prev2).after($("#" + id));
//     //         }
//     //     }
//     //     // win_check();
//     // }

//     function win_check() {
//         var images = $(".img");
//         for (var i = 0; i < 16; i++) {
//             var cur_img_no = parseInt($($(images)[i]).attr("id").slice(4, 10), 10);
//             if (cur_img_no != i + 1) return;
//         }
//         $("#cover").html('<img class="cdp-img" src="./img/core-img/cdp-old.jpg" alt="">');
//     }

//     function startApp() {
//         par.html("");

//         for (let r = 0; r < rows; r++) {
//             for (let c = 0; c < columns; c++) {
//                 var div = document.createElement("div");
//                 $(div).addClass("img");
//                 $(div).addClass("col-3");
//                 div.id = 'img-' + imgUrls[i - 1];
//                 // par.append(
//                 //     '<div class="img col-3" id="img-' +
//                 //     imgUrls[i - 1] +
//                 //     '"><img src="./img/core-img/' +
//                 //     imgUrls[i - 1] +
//                 //     '.jpg" class="img-fluid"></div>'
//                 // );

//                 //<img id="0-0" src="1.jpg">
//                 let tile = document.createElement("img");
//                 tile.id = r.toString() + "-" + c.toString();
//                 tile.src = "./img/core-img/" + imgUrls.shift() + ".jpg";
//                 tile.style.width = "100%";
//                 $(tile).addClass("img-fluid");

//                 //DRAG FUNCTIONALITY
//                 tile.addEventListener("dragstart", dragStart);  //click an image to drag
//                 tile.addEventListener("dragover", dragOver);    //moving image around while clicked
//                 tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
//                 tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
//                 tile.addEventListener("drop", drop);        //drag an image over another image, drop the image
//                 tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

//                 div.appendChild(tile);

//                 document.getElementById("cover").append(div);

//             }
//         }

//         $("#3-3")
//             .html("")
//             .addClass("blank");

//         $("#0-0")
//             .html("")
//             .addClass("blank");

//         blankTile = $(".blank");
//         for (var i = 0; i < blankTile.length; i++) {
//             $(blankTile[i]).off("dragstart");
//             $(blankTile[i]).off("dragend");
//             $(blankTile[i]).off("dragover");
//             $(blankTile[i]).off("dragenter");
//             $(blankTile[i]).off("dragleave");
//             $(blankTile[i]).off("drop");
//         }

//         tileSize = $(".img").outerWidth();
//         console.log($(blankTile));
//     }
//     $("#restartBtn").on("click", startApp);

//     startApp();
// });

$(document).ready(() => {
    $(".cdp-container").hide();
    $(".reveal-btn").click(() => {
        $(".reveal-btn").css("transform", "scale(0)");
        setTimeout(() => {
            $(".reveal-btn").hide();
            $(".cdp-container").show();
            setTimeout(() => {
                $(".cdp-container").css("transform", "scale(1)");
            }, 100);
        }, 200);
    });
});
$(function () {
    var tileSize,
        i,
        blank,
        blankTile,
        par = $("#cover"),
        bTileIndex,
        neighbourTiles = [],
        nLen,
        ind,
        // imgUrls = [5, 1, 7, 3, 9, 6, 11, 4, 2, 13, 10, 8, 12, 14, 15, 16];
        imgUrls = [1, 2, 3, 4, 5, 11, 7, 8, 9, 10, 12, 6, 13, 14, 16, 15];

    function moveImage() {
        var blankTileIndex,
            clickedTileIndex,
            id = $(this).attr("id");

        blankTileIndex = $(".img").index(blankTile);
        clickedTileIndex = $(".img").index(this);

        if (blankTileIndex == clickedTileIndex + 1 && blankTileIndex % 4 != 0) {
            $("#" + id).before(blankTile);
        } else if (
            blankTileIndex == clickedTileIndex - 1 &&
            clickedTileIndex % 4 != 0
        ) {
            $("#" + id).after(blankTile);
        } else if (
            blankTileIndex + 4 == clickedTileIndex ||
            blankTileIndex == clickedTileIndex + 4
        ) {
            var prev1 = $("#" + id).prev(),
                prev2 = blankTile.prev();

            if (prev1.length == 0) par.prepend(blankTile);
            else $(prev1).after(blankTile);

            if (prev2.length == 0) par.prepend($("#" + id));
            else $(prev2).after($("#" + id));
        }
        win_check();
    }

    function win_check() {
        var images = $(".img");
        for (var i = 0; i < 16; i++) {
            if ($($(images)[i]).hasClass("question-mark")) continue;
            var cur_img_no = parseInt($($(images)[i]).attr("id").slice(4, 10), 10);
            if (cur_img_no != i + 1) return;
        }
        $("#cover").html('<img class="cdp-img" src="./img/core-img/cdp-test-puzzle.jpg" alt="">');
    }

    function startApp() {
        par.html("");

        for (i = 1; i <= 16; i++) {
            par.append(
                '<div class="img col-3" id="img-' +
                imgUrls[i - 1] +
                '"><img src="./img/core-img/imageonline/' +
                imgUrls[i - 1] +
                '.jpg" class="img-fluid"></div>'
            );
            $("#img-" + imgUrls[i - 1]).on("click", moveImage);
        }

        $("#img-6").addClass("question-mark");
        $("#img-6 img").attr("src", "./img/core-img/blank.png");
        $("#img-11").addClass("question-mark");
        $("#img-11 img").attr("src", "./img/core-img/blank.png");
        $("#img-12").addClass("question-mark");
        $("#img-12 img").attr("src", "./img/core-img/blank.png");

        blank = 16;
        $("#img-" + blank)
            .html("")
            .addClass("blank");

        blankTile = $(".blank");
        blankTile.off("click");

        tileSize = $(".img").outerWidth();
    }
    $("#restartBtn").on("click", startApp);

    startApp();
});

// function _0x2688(_0x2470d8,_0x55b99e){var _0x38219d=_0x3821();return _0x2688=function(_0x2688e1,_0x133f35){_0x2688e1=_0x2688e1-0xf7;var _0x3a2ebe=_0x38219d[_0x2688e1];return _0x3a2ebe;},_0x2688(_0x2470d8,_0x55b99e);}var _0xfd4042=_0x2688;function _0x3821(){var _0x30c82d=['.im','sta','mg/','=\x22\x22','75882UXGmdb','v\x20c','ank','-im','c=\x22','ore','off','#im','./i','pen','le(','cla','#re','g-f','orm','pre','5037110YnjiBd','hid','s=\x22','css','455kslScc','44iNBPbq','src','idt','vea','313216chpWVs','Cla','10549392Jzpajc','</d','rtB','<im','\x22\x20i','alt','cdp','app','len','4619084jjIcqp','nsf','sca','las','.bl','aft','ss=','ont','ain','\x22im','.re','<di','.jp','sho','tra','rea','bef','ind','e-i','g/c','77bthbsV','cli','\x22><','94257GOGKUQ','dp-','iv>','att','\x20co','p-c','erW','add','ver','284715QSrZgv','\x20sr','htm','d=\x22','g\x22\x20','l-b','=\x22.','189IyucVD','img','.cd','#co'];_0x3821=function(){return _0x30c82d;};return _0x3821();}(function(_0x13108c,_0x3020cd){var _0x2531f7=_0x2688,_0x157817=_0x13108c();while(!![]){try{var _0x1438be=-parseInt(_0x2531f7(0x13f))/0x1+-parseInt(_0x2531f7(0x110))/0x2*(-parseInt(_0x2531f7(0x136))/0x3)+-parseInt(_0x2531f7(0x11f))/0x4+-parseInt(_0x2531f7(0x10f))/0x5*(parseInt(_0x2531f7(0xfb))/0x6)+-parseInt(_0x2531f7(0x116))/0x7+-parseInt(_0x2531f7(0x114))/0x8*(-parseInt(_0x2531f7(0x146))/0x9)+parseInt(_0x2531f7(0x10b))/0xa*(parseInt(_0x2531f7(0x133))/0xb);if(_0x1438be===_0x3020cd)break;else _0x157817['push'](_0x157817['shift']());}catch(_0x581851){_0x157817['push'](_0x157817['shift']());}}}(_0x3821,0xe5f90),$(document)[_0xfd4042(0x12e)+'dy'](()=>{var _0x5e1659=_0xfd4042;$('.cd'+_0x5e1659(0x13b)+_0x5e1659(0x126)+_0x5e1659(0x127)+'er')[_0x5e1659(0x10c)+'e'](),$('.re'+_0x5e1659(0x113)+_0x5e1659(0x144)+'tn')[_0x5e1659(0x134)+'ck'](()=>{var _0x2b7733=_0x5e1659;$('.re'+_0x2b7733(0x113)+'l-b'+'tn')[_0x2b7733(0x10e)](_0x2b7733(0x12d)+_0x2b7733(0x120)+_0x2b7733(0x109),'sca'+'le('+'0)'),setTimeout(()=>{var _0x567810=_0x2b7733;$(_0x567810(0x129)+'vea'+'l-b'+'tn')[_0x567810(0x10c)+'e'](),$('.cd'+_0x567810(0x13b)+_0x567810(0x126)+_0x567810(0x127)+'er')[_0x567810(0x12c)+'w'](),setTimeout(()=>{var _0x82e7ee=_0x567810;$(_0x82e7ee(0x148)+_0x82e7ee(0x13b)+_0x82e7ee(0x126)+_0x82e7ee(0x127)+'er')[_0x82e7ee(0x10e)]('tra'+_0x82e7ee(0x120)+_0x82e7ee(0x109),_0x82e7ee(0x121)+_0x82e7ee(0x105)+'1)');},0x64);},0xc8);});}),$(function(){var _0x425063=_0xfd4042,_0xbe19d8,_0x223e6f,_0x1566f0,_0x3fc671,_0x19e733=$(_0x425063(0x149)+_0x425063(0x13e)),_0x364935,_0x12af55=[],_0x380e33,_0x2cc4bc,_0x1d7330=[0x5,0x1,0x7,0x3,0x9,0x6,0xb,0x4,0x2,0xd,0xa,0x8,0xc,0xe,0xf,0x10];function _0x2cd36e(){var _0x329c95=_0x425063,_0x218fd6,_0x25353e,_0x3054c0=$(this)[_0x329c95(0x139)+'r']('id');_0x218fd6=$(_0x329c95(0xf7)+'g')[_0x329c95(0x130)+'ex'](_0x3fc671),_0x25353e=$('.im'+'g')['ind'+'ex'](this);if(_0x218fd6==_0x25353e+0x1&&_0x218fd6%0x4!=0x0)$('#'+_0x3054c0)[_0x329c95(0x12f)+_0x329c95(0x100)](_0x3fc671);else{if(_0x218fd6==_0x25353e-0x1&&_0x25353e%0x4!=0x0)$('#'+_0x3054c0)['aft'+'er'](_0x3fc671);else{if(_0x218fd6+0x4==_0x25353e||_0x218fd6==_0x25353e+0x4){var _0x5c822e=$('#'+_0x3054c0)['pre'+'v'](),_0x1dbe04=_0x3fc671[_0x329c95(0x10a)+'v']();if(_0x5c822e[_0x329c95(0x11e)+'gth']==0x0)_0x19e733[_0x329c95(0x10a)+_0x329c95(0x104)+'d'](_0x3fc671);else $(_0x5c822e)[_0x329c95(0x124)+'er'](_0x3fc671);if(_0x1dbe04['len'+'gth']==0x0)_0x19e733[_0x329c95(0x10a)+_0x329c95(0x104)+'d']($('#'+_0x3054c0));else $(_0x1dbe04)[_0x329c95(0x124)+'er']($('#'+_0x3054c0));}}}_0x2a8b7e();}function _0x2a8b7e(){var _0x15151a=_0x425063,_0x50c88d=$(_0x15151a(0xf7)+'g');for(var _0x1c5ca6=0x0;_0x1c5ca6<0x10;_0x1c5ca6++){var _0x13b593=parseInt($($(_0x50c88d)[_0x1c5ca6])[_0x15151a(0x139)+'r']('id')['sli'+'ce'](0x4,0xa),0xa);if(_0x13b593!=_0x1c5ca6+0x1)return;}$(_0x15151a(0x149)+_0x15151a(0x13e))[_0x15151a(0x141)+'l'](_0x15151a(0x119)+'g\x20c'+'las'+_0x15151a(0x10d)+_0x15151a(0x11c)+_0x15151a(0xfe)+_0x15151a(0x143)+_0x15151a(0x111)+_0x15151a(0x145)+'/im'+_0x15151a(0x132)+_0x15151a(0x100)+_0x15151a(0xfe)+_0x15151a(0x132)+_0x15151a(0x137)+'old'+_0x15151a(0x12b)+_0x15151a(0x143)+_0x15151a(0x11b)+_0x15151a(0xfa)+'>');}function _0x26c6d3(){var _0x39d9a0=_0x425063;_0x19e733[_0x39d9a0(0x141)+'l']('');for(_0x223e6f=0x1;_0x223e6f<=0x10;_0x223e6f++){_0x19e733[_0x39d9a0(0x11d)+'end'](_0x39d9a0(0x12a)+_0x39d9a0(0xfc)+_0x39d9a0(0x122)+_0x39d9a0(0x10d)+_0x39d9a0(0x147)+_0x39d9a0(0x13a)+'l-3'+_0x39d9a0(0x11a)+_0x39d9a0(0x142)+_0x39d9a0(0x147)+'-'+_0x1d7330[_0x223e6f-0x1]+(_0x39d9a0(0x135)+_0x39d9a0(0x147)+_0x39d9a0(0x140)+_0x39d9a0(0xff)+_0x39d9a0(0x103)+_0x39d9a0(0xf9)+'cor'+_0x39d9a0(0x131)+_0x39d9a0(0xf9))+_0x1d7330[_0x223e6f-0x1]+(_0x39d9a0(0x12b)+'g\x22\x20'+_0x39d9a0(0x106)+_0x39d9a0(0x125)+_0x39d9a0(0x128)+_0x39d9a0(0x108)+'lui'+'d\x22>'+_0x39d9a0(0x117)+_0x39d9a0(0x138))),$(_0x39d9a0(0x102)+'g-'+_0x1d7330[_0x223e6f-0x1])['on'](_0x39d9a0(0x134)+'ck',_0x2cd36e);}_0x1566f0=0x10,$(_0x39d9a0(0x102)+'g-'+_0x1566f0)[_0x39d9a0(0x141)+'l']('')[_0x39d9a0(0x13d)+_0x39d9a0(0x115)+'ss']('bla'+'nk'),_0x3fc671=$(_0x39d9a0(0x123)+_0x39d9a0(0xfd)),_0x3fc671[_0x39d9a0(0x101)]('cli'+'ck'),_0xbe19d8=$('.im'+'g')['out'+_0x39d9a0(0x13c)+_0x39d9a0(0x112)+'h']();}$(_0x425063(0x107)+_0x425063(0xf8)+_0x425063(0x118)+'tn')['on'](_0x425063(0x134)+'ck',_0x26c6d3),_0x26c6d3();}));