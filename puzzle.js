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
        imgUrls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15];

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
            var cur_img_no = parseInt($($(images)[i]).attr("id").slice(4, 10), 10);
            if (cur_img_no != i + 1) return;
        }
        $("#cover").html('<img class="cdp-img" src="./img/core-img/cdp.jpg" alt="">');
    }

    function startApp() {
        par.html("");

        for (i = 1; i <= 16; i++) {
            par.append(
                '<div class="img col-3" id="img-' +
                imgUrls[i - 1] +
                '"><img src="./img/core-img/' +
                imgUrls[i - 1] +
                '.jpg" class="img-fluid"></div>'
            );
            $("#img-" + imgUrls[i - 1]).on("click", moveImage);
        }

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