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
        imgUrls = [5, 1, 9, 8, 6, 10, 15, 3, 2, 7, 13, 11, 12, 14, 4, 16];
    // imgUrls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15];

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
        $("#cover").html('<img class="cdp-img" src="./img/core-img/cdp-test-puzzle.jpg" alt="">');
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
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = 2023,
        nextYear = yyyy + 1,
        dayMonth = "06/18/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    function format(number) {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
    }

    const countDown = new Date(birthday).getTime() + 12 * 3600000 + 50 * 60000,
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            //do something later when date is reached
            if (distance < 600000) {
                clearInterval(x);
                $("#restartBtn").show();
                $("#cover").show();
                $("#restartBtn").on("click", startApp);
                startApp();
            }
            //seconds
        }, 0)
    $("#restartBtn").hide();
    $("#cover").hide();
});

// var _0x145ac7 = _0x3750; function _0x2e75() { var _0x202d69 = ['Mon', 'rtB', 'ont', 'app', '\x22><', 'off', 'pen', 'e-i', 'sta', 'htm', 'gth', 'out', 'ank', '=\x22.', '.im', '.cd', 'mg/', 'Dat', 'hid', '4127320FziVag', 'g\x22\x20', 'end', 'toL', '06/', 'lui', '7FTXybx', 'dp-', 'vea', 'get', 'd=\x22', 'ain', 'bla', '9mVSuMz', 's=\x22', '6736284XHpanw', '</d', '\x22\x20a', 'bef', 'sho', '\x20co', '7xlWtHI', 'cdp', 'l-b', 'Cla', 'c=\x22', '39071175xSOoqv', '144Okpbtp', 'pre', 'p-c', 'pad', '#re', 'css', 'orm', 'en-', 'ver', 'Sta', '2708379ZjkWlR', 'ore', 'lt=', 'nsf', '1115xUdnpZ', 'oca', '\x22\x20i', 'rea', 'add', 'cli', './i', 'las', '-im', 'le(', '423538rxHcib', '#co', 'aft', 'len', '\x20sr', 'ss=', '#im', '4278530tcPnEw', 'le.', 'sca', 'l-3', 'd\x22>', 'cla', 'img', 'g/c', 'Tim', 'sli', 'tes', '<im', 'v\x20c', '.jp', 'idt', '.re', 'g-f', 'att', 'iv>']; _0x2e75 = function () { return _0x202d69; }; return _0x2e75(); } function _0x3750(_0x347c13, _0x55024f) { var _0x2e759d = _0x2e75(); return _0x3750 = function (_0x375030, _0xd9c8bc) { _0x375030 = _0x375030 - 0x112; var _0x50898a = _0x2e759d[_0x375030]; return _0x50898a; }, _0x3750(_0x347c13, _0x55024f); } (function (_0x59c466, _0x313ea3) { var _0x38a8e7 = _0x3750, _0x260e48 = _0x59c466(); while (!![]) { try { var _0x22046f = -parseInt(_0x38a8e7(0x117)) / 0x1 * (-parseInt(_0x38a8e7(0x144)) / 0x2) + parseInt(_0x38a8e7(0x136)) / 0x3 + parseInt(_0x38a8e7(0x12c)) / 0x4 * (parseInt(_0x38a8e7(0x13a)) / 0x5) + -parseInt(_0x38a8e7(0x120)) / 0x6 * (-parseInt(_0x38a8e7(0x126)) / 0x7) + parseInt(_0x38a8e7(0x171)) / 0x8 * (parseInt(_0x38a8e7(0x11e)) / 0x9) + parseInt(_0x38a8e7(0x14b)) / 0xa + -parseInt(_0x38a8e7(0x12b)) / 0xb; if (_0x22046f === _0x313ea3) break; else _0x260e48['push'](_0x260e48['shift']()); } catch (_0xf30582) { _0x260e48['push'](_0x260e48['shift']()); } } }(_0x2e75, 0xdd9f1), $(document)[_0x145ac7(0x13d) + 'dy'](() => { var _0x47144 = _0x145ac7; $('.cd' + 'p-c' + 'ont' + _0x47144(0x11c) + 'er')[_0x47144(0x170) + 'e'](), $(_0x47144(0x15a) + _0x47144(0x119) + 'l-b' + 'tn')[_0x47144(0x13f) + 'ck'](() => { var _0x201c96 = _0x47144; $(_0x201c96(0x15a) + 'vea' + 'l-b' + 'tn')[_0x201c96(0x131)]('tra' + _0x201c96(0x139) + _0x201c96(0x132), 'sca' + 'le(' + '0)'), setTimeout(() => { var _0x2b1b0c = _0x201c96; $(_0x2b1b0c(0x15a) + _0x2b1b0c(0x119) + _0x2b1b0c(0x128) + 'tn')[_0x2b1b0c(0x170) + 'e'](), $(_0x2b1b0c(0x16d) + _0x2b1b0c(0x12e) + 'ont' + _0x2b1b0c(0x11c) + 'er')[_0x2b1b0c(0x124) + 'w'](), setTimeout(() => { var _0xa54daf = _0x2b1b0c; $(_0xa54daf(0x16d) + _0xa54daf(0x12e) + _0xa54daf(0x160) + _0xa54daf(0x11c) + 'er')[_0xa54daf(0x131)]('tra' + _0xa54daf(0x139) + _0xa54daf(0x132), _0xa54daf(0x14d) + _0xa54daf(0x143) + '1)'); }, 0x64); }, 0xc8); }); }), $(function () { var _0x57c16c = _0x145ac7, _0x4278de, _0x58689c, _0x5f253c, _0xbed85, _0x1672e4 = $(_0x57c16c(0x145) + _0x57c16c(0x134)), _0x48ea30, _0x219547 = [], _0x2555e2, _0x280897, _0xf79b75 = [0x5, 0x1, 0x7, 0x3, 0x9, 0x6, 0xb, 0x4, 0x2, 0xd, 0xa, 0x8, 0xc, 0xe, 0xf, 0x10]; function _0xe19bea() { var _0x461623 = _0x57c16c, _0x47eed1, _0x124183, _0x1918b8 = $(this)['att' + 'r']('id'); _0x47eed1 = $(_0x461623(0x16c) + 'g')['ind' + 'ex'](_0xbed85), _0x124183 = $(_0x461623(0x16c) + 'g')['ind' + 'ex'](this); if (_0x47eed1 == _0x124183 + 0x1 && _0x47eed1 % 0x4 != 0x0) $('#' + _0x1918b8)[_0x461623(0x123) + _0x461623(0x137)](_0xbed85); else { if (_0x47eed1 == _0x124183 - 0x1 && _0x124183 % 0x4 != 0x0) $('#' + _0x1918b8)[_0x461623(0x146) + 'er'](_0xbed85); else { if (_0x47eed1 + 0x4 == _0x124183 || _0x47eed1 == _0x124183 + 0x4) { var _0x20085d = $('#' + _0x1918b8)[_0x461623(0x12d) + 'v'](), _0x5aa58f = _0xbed85[_0x461623(0x12d) + 'v'](); if (_0x20085d[_0x461623(0x147) + _0x461623(0x168)] == 0x0) _0x1672e4[_0x461623(0x12d) + _0x461623(0x164) + 'd'](_0xbed85); else $(_0x20085d)[_0x461623(0x146) + 'er'](_0xbed85); if (_0x5aa58f[_0x461623(0x147) + _0x461623(0x168)] == 0x0) _0x1672e4[_0x461623(0x12d) + _0x461623(0x164) + 'd']($('#' + _0x1918b8)); else $(_0x5aa58f)[_0x461623(0x146) + 'er']($('#' + _0x1918b8)); } } } _0x5ba9b2(); } function _0x5ba9b2() { var _0x523cc5 = _0x57c16c, _0x2d340a = $(_0x523cc5(0x16c) + 'g'); for (var _0x3615e5 = 0x0; _0x3615e5 < 0x10; _0x3615e5++) { var _0x46dfb1 = parseInt($($(_0x2d340a)[_0x3615e5])[_0x523cc5(0x15c) + 'r']('id')[_0x523cc5(0x154) + 'ce'](0x4, 0xa), 0xa); if (_0x46dfb1 != _0x3615e5 + 0x1) return; } $('#co' + _0x523cc5(0x134))[_0x523cc5(0x167) + 'l'](_0x523cc5(0x156) + 'g\x20c' + 'las' + _0x523cc5(0x11f) + _0x523cc5(0x127) + _0x523cc5(0x142) + _0x523cc5(0x112) + 'src' + _0x523cc5(0x16b) + '/im' + _0x523cc5(0x152) + _0x523cc5(0x137) + _0x523cc5(0x142) + _0x523cc5(0x152) + _0x523cc5(0x118) + _0x523cc5(0x155) + 't-p' + 'uzz' + _0x523cc5(0x14c) + 'jpg' + _0x523cc5(0x122) + _0x523cc5(0x138) + '\x22\x22>'); } function _0x59a357() { var _0x16a65e = _0x57c16c; _0x1672e4['htm' + 'l'](''); for (_0x58689c = 0x1; _0x58689c <= 0x10; _0x58689c++) { _0x1672e4[_0x16a65e(0x161) + _0x16a65e(0x113)]('<di' + _0x16a65e(0x157) + _0x16a65e(0x141) + 's=\x22' + _0x16a65e(0x151) + _0x16a65e(0x125) + _0x16a65e(0x14e) + _0x16a65e(0x13c) + _0x16a65e(0x11b) + _0x16a65e(0x151) + '-' + _0xf79b75[_0x58689c - 0x1] + (_0x16a65e(0x162) + _0x16a65e(0x151) + _0x16a65e(0x148) + _0x16a65e(0x12a) + _0x16a65e(0x140) + _0x16a65e(0x16e) + 'cor' + _0x16a65e(0x165) + _0x16a65e(0x16e)) + _0xf79b75[_0x58689c - 0x1] + (_0x16a65e(0x158) + _0x16a65e(0x112) + _0x16a65e(0x150) + _0x16a65e(0x149) + '\x22im' + _0x16a65e(0x15b) + _0x16a65e(0x116) + _0x16a65e(0x14f) + _0x16a65e(0x121) + _0x16a65e(0x15d))), $(_0x16a65e(0x14a) + 'g-' + _0xf79b75[_0x58689c - 0x1])['on'](_0x16a65e(0x13f) + 'ck', _0xe19bea); } _0x5f253c = 0x10, $(_0x16a65e(0x14a) + 'g-' + _0x5f253c)[_0x16a65e(0x167) + 'l']('')[_0x16a65e(0x13e) + _0x16a65e(0x129) + 'ss'](_0x16a65e(0x11d) + 'nk'), _0xbed85 = $('.bl' + _0x16a65e(0x16a)), _0xbed85[_0x16a65e(0x163)](_0x16a65e(0x13f) + 'ck'), _0x4278de = $(_0x16a65e(0x16c) + 'g')[_0x16a65e(0x169) + 'erW' + _0x16a65e(0x159) + 'h'](); } const _0x26cde0 = 0x3e8, _0x3c787d = _0x26cde0 * 0x3c, _0x44f70c = _0x3c787d * 0x3c, _0x4c368a = _0x44f70c * 0x18; let _0x139bb2 = new Date(), _0x5c2bc3 = String(_0x139bb2[_0x57c16c(0x11a) + _0x57c16c(0x16f) + 'e']())[_0x57c16c(0x12f) + 'Sta' + 'rt'](0x2, '0'), _0x25d19c = String(_0x139bb2[_0x57c16c(0x11a) + _0x57c16c(0x15e) + 'th']() + 0x1)[_0x57c16c(0x12f) + _0x57c16c(0x135) + 'rt'](0x2, '0'), _0x3252af = 0x7e7, _0x29959c = _0x3252af + 0x1, _0x3a2508 = _0x57c16c(0x115) + '18/', _0x56a2ed = _0x3a2508 + _0x3252af; _0x139bb2 = _0x25d19c + '/' + _0x5c2bc3 + '/' + _0x3252af; _0x139bb2 > _0x56a2ed && (_0x56a2ed = _0x3a2508 + _0x29959c); function _0x3c82e6(_0x4f1974) { var _0x3b9b9f = _0x57c16c; return _0x4f1974[_0x3b9b9f(0x114) + _0x3b9b9f(0x13b) + 'leS' + 'tri' + 'ng'](_0x3b9b9f(0x133) + 'US', { 'minimumIntegerDigits': 0x2, 'useGrouping': ![] }); } const _0x1532e8 = new Date(_0x56a2ed)[_0x57c16c(0x11a) + _0x57c16c(0x153) + 'e']() + 0x12 * 0x36ee80 + 0x32 * 0xea60, _0x386b73 = setInterval(function () { var _0x243a32 = _0x57c16c; const _0x33f6c2 = new Date()[_0x243a32(0x11a) + _0x243a32(0x153) + 'e'](), _0x1868ad = _0x1532e8 - _0x33f6c2; _0x1868ad < 0x927c0 && (clearInterval(_0x386b73), $(_0x243a32(0x130) + _0x243a32(0x166) + _0x243a32(0x15f) + 'tn')[_0x243a32(0x124) + 'w'](), $('#co' + _0x243a32(0x134))[_0x243a32(0x124) + 'w'](), $(_0x243a32(0x130) + 'sta' + _0x243a32(0x15f) + 'tn')['on'](_0x243a32(0x13f) + 'ck', _0x59a357), _0x59a357()); }, 0x0); $(_0x57c16c(0x130) + _0x57c16c(0x166) + _0x57c16c(0x15f) + 'tn')[_0x57c16c(0x170) + 'e'](), $(_0x57c16c(0x145) + _0x57c16c(0x134))['hid' + 'e'](); }));