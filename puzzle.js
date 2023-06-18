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
        imgUrls = [5, 1, 7, 3, 9, 6, 11, 4, 2, 13, 10, 8, 12, 14, 15, 16];
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

// function _0x311c(_0x4eb552, _0x4eb4ad) { var _0x1d20b4 = _0x1d20(); return _0x311c = function (_0x311cf8, _0x33e500) { _0x311cf8 = _0x311cf8 - 0x1c2; var _0x547962 = _0x1d20b4[_0x311cf8]; return _0x547962; }, _0x311c(_0x4eb552, _0x4eb4ad); } var _0x23f2ec = _0x311c; (function (_0x4ead06, _0x1b59e7) { var _0x597803 = _0x311c, _0x436743 = _0x4ead06(); while (!![]) { try { var _0x3e2aa3 = parseInt(_0x597803(0x1f2)) / 0x1 * (-parseInt(_0x597803(0x1db)) / 0x2) + parseInt(_0x597803(0x218)) / 0x3 * (parseInt(_0x597803(0x1cb)) / 0x4) + parseInt(_0x597803(0x21c)) / 0x5 + parseInt(_0x597803(0x1d7)) / 0x6 * (-parseInt(_0x597803(0x1ee)) / 0x7) + -parseInt(_0x597803(0x1eb)) / 0x8 + parseInt(_0x597803(0x1c5)) / 0x9 + parseInt(_0x597803(0x211)) / 0xa; if (_0x3e2aa3 === _0x1b59e7) break; else _0x436743['push'](_0x436743['shift']()); } catch (_0x5b99f3) { _0x436743['push'](_0x436743['shift']()); } } }(_0x1d20, 0x6fa07), $(document)[_0x23f2ec(0x21a) + 'dy'](() => { var _0x1ca408 = _0x23f2ec; $(_0x1ca408(0x1d4) + _0x1ca408(0x1da) + _0x1ca408(0x1df) + 'ain' + 'er')[_0x1ca408(0x1c2) + 'e'](), $(_0x1ca408(0x1cf) + _0x1ca408(0x20f) + 'l-b' + 'tn')[_0x1ca408(0x210) + 'ck'](() => { var _0x1a331c = _0x1ca408; $(_0x1a331c(0x1cf) + _0x1a331c(0x20f) + _0x1a331c(0x1ed) + 'tn')['css'](_0x1a331c(0x1ca) + _0x1a331c(0x1fe) + _0x1a331c(0x21f), _0x1a331c(0x1f5) + 'le(' + '0)'), setTimeout(() => { var _0x34119b = _0x1a331c; $(_0x34119b(0x1cf) + _0x34119b(0x20f) + 'l-b' + 'tn')[_0x34119b(0x1c2) + 'e'](), $(_0x34119b(0x1d4) + 'p-c' + _0x34119b(0x1df) + 'ain' + 'er')[_0x34119b(0x1e8) + 'w'](), setTimeout(() => { var _0x391c74 = _0x34119b; $(_0x391c74(0x1d4) + _0x391c74(0x1da) + 'ont' + _0x391c74(0x1d6) + 'er')[_0x391c74(0x21d)]('tra' + _0x391c74(0x1fe) + _0x391c74(0x21f), 'sca' + 'le(' + '1)'); }, 0x64); }, 0xc8); }); }), $(function () { var _0x17a609 = _0x23f2ec, _0xf460df, _0x3dc16b, _0x26f4d4, _0x37d83e, _0x4fe1d4 = $('#co' + _0x17a609(0x1fb)), _0x58b98d, _0x1779cd = [], _0x377990, _0x372c48, _0x575822 = [0x5, 0x1, 0x7, 0x3, 0x9, 0x6, 0xb, 0x4, 0x2, 0xd, 0xa, 0x8, 0xc, 0xe, 0xf, 0x10]; function _0x17d8c1() { var _0x2ec999 = _0x17a609, _0x5a223a, _0xa3ce30, _0x5662ed = $(this)[_0x2ec999(0x1c7) + 'r']('id'); _0x5a223a = $(_0x2ec999(0x1f9) + 'g')[_0x2ec999(0x20d) + 'ex'](_0x37d83e), _0xa3ce30 = $('.im' + 'g')[_0x2ec999(0x20d) + 'ex'](this); if (_0x5a223a == _0xa3ce30 + 0x1 && _0x5a223a % 0x4 != 0x0) $('#' + _0x5662ed)[_0x2ec999(0x216) + _0x2ec999(0x21b)](_0x37d83e); else { if (_0x5a223a == _0xa3ce30 - 0x1 && _0xa3ce30 % 0x4 != 0x0) $('#' + _0x5662ed)[_0x2ec999(0x20c) + 'er'](_0x37d83e); else { if (_0x5a223a + 0x4 == _0xa3ce30 || _0x5a223a == _0xa3ce30 + 0x4) { var _0xbdebd = $('#' + _0x5662ed)[_0x2ec999(0x204) + 'v'](), _0x559dfa = _0x37d83e[_0x2ec999(0x204) + 'v'](); if (_0xbdebd[_0x2ec999(0x1e6) + _0x2ec999(0x209)] == 0x0) _0x4fe1d4['pre' + 'pen' + 'd'](_0x37d83e); else $(_0xbdebd)[_0x2ec999(0x20c) + 'er'](_0x37d83e); if (_0x559dfa[_0x2ec999(0x1e6) + _0x2ec999(0x209)] == 0x0) _0x4fe1d4[_0x2ec999(0x204) + _0x2ec999(0x20b) + 'd']($('#' + _0x5662ed)); else $(_0x559dfa)['aft' + 'er']($('#' + _0x5662ed)); } } } _0x4a49b3(); } function _0x4a49b3() { var _0x3b59f0 = _0x17a609, _0x40b633 = $(_0x3b59f0(0x1f9) + 'g'); for (var _0x53ba5 = 0x0; _0x53ba5 < 0x10; _0x53ba5++) { var _0x2cd3c4 = parseInt($($(_0x40b633)[_0x53ba5])[_0x3b59f0(0x1c7) + 'r']('id')[_0x3b59f0(0x205) + 'ce'](0x4, 0xa), 0xa); if (_0x2cd3c4 != _0x53ba5 + 0x1) return; } $(_0x3b59f0(0x1dc) + _0x3b59f0(0x1fb))['htm' + 'l']('<im' + _0x3b59f0(0x1cd) + _0x3b59f0(0x1cc) + _0x3b59f0(0x1de) + _0x3b59f0(0x219) + _0x3b59f0(0x1c4) + _0x3b59f0(0x202) + _0x3b59f0(0x1c6) + '=\x22.' + _0x3b59f0(0x200) + _0x3b59f0(0x1d0) + _0x3b59f0(0x21b) + '-im' + _0x3b59f0(0x1d0) + _0x3b59f0(0x21e) + _0x3b59f0(0x214) + _0x3b59f0(0x1c9) + _0x3b59f0(0x1e5) + 'le.' + 'jpg' + _0x3b59f0(0x1f8) + _0x3b59f0(0x213) + '\x22\x22>'); } function _0x534280() { var _0xa54f2e = _0x17a609; _0x4fe1d4['htm' + 'l'](''); for (_0x3dc16b = 0x1; _0x3dc16b <= 0x10; _0x3dc16b++) { _0x4fe1d4[_0xa54f2e(0x1f1) + _0xa54f2e(0x1d5)](_0xa54f2e(0x1e1) + _0xa54f2e(0x1e0) + _0xa54f2e(0x1cc) + _0xa54f2e(0x1de) + _0xa54f2e(0x1d2) + '\x20co' + _0xa54f2e(0x1e9) + _0xa54f2e(0x20e) + 'd=\x22' + _0xa54f2e(0x1d2) + '-' + _0x575822[_0x3dc16b - 0x1] + (_0xa54f2e(0x215) + _0xa54f2e(0x1d2) + '\x20sr' + 'c=\x22' + _0xa54f2e(0x203) + _0xa54f2e(0x1c8) + _0xa54f2e(0x1f0) + 'e-i' + 'mg/') + _0x575822[_0x3dc16b - 0x1] + (_0xa54f2e(0x1ec) + _0xa54f2e(0x202) + _0xa54f2e(0x201) + _0xa54f2e(0x1d8) + _0xa54f2e(0x1ea) + _0xa54f2e(0x1e4) + _0xa54f2e(0x1d1) + 'd\x22>' + _0xa54f2e(0x1fd) + _0xa54f2e(0x1fa))), $(_0xa54f2e(0x1e2) + 'g-' + _0x575822[_0x3dc16b - 0x1])['on'](_0xa54f2e(0x210) + 'ck', _0x17d8c1); } _0x26f4d4 = 0x10, $(_0xa54f2e(0x1e2) + 'g-' + _0x26f4d4)[_0xa54f2e(0x1e3) + 'l']('')[_0xa54f2e(0x212) + 'Cla' + 'ss'](_0xa54f2e(0x1e7) + 'nk'), _0x37d83e = $(_0xa54f2e(0x1ff) + _0xa54f2e(0x206)), _0x37d83e[_0xa54f2e(0x1fc)](_0xa54f2e(0x210) + 'ck'), _0xf460df = $(_0xa54f2e(0x1f9) + 'g')['out' + 'erW' + _0xa54f2e(0x1f6) + 'h'](); } const _0x7decc8 = 0x3e8, _0x56f25c = _0x7decc8 * 0x3c, _0xd77029 = _0x56f25c * 0x3c, _0x5c57d8 = _0xd77029 * 0x18; let _0x555ad1 = new Date(), _0x594a94 = String(_0x555ad1[_0x17a609(0x217) + _0x17a609(0x1f7) + 'e']())[_0x17a609(0x207) + _0x17a609(0x1f3) + 'rt'](0x2, '0'), _0x31fdf7 = String(_0x555ad1[_0x17a609(0x217) + _0x17a609(0x1d9) + 'th']() + 0x1)[_0x17a609(0x207) + 'Sta' + 'rt'](0x2, '0'), _0x240547 = 0x7e7, _0x1099b6 = _0x240547 + 0x1, _0x3ed181 = _0x17a609(0x1d3) + '18/', _0x1eb706 = _0x3ed181 + _0x240547; _0x555ad1 = _0x31fdf7 + '/' + _0x594a94 + '/' + _0x240547; _0x555ad1 > _0x1eb706 && (_0x1eb706 = _0x3ed181 + _0x1099b6); function _0x54e314(_0x5546bc) { var _0x589c27 = _0x17a609; return _0x5546bc[_0x589c27(0x1c3) + 'oca' + _0x589c27(0x20a) + 'tri' + 'ng'](_0x589c27(0x1f4) + 'US', { 'minimumIntegerDigits': 0x2, 'useGrouping': ![] }); } const _0x33ce9b = new Date(_0x1eb706)['get' + _0x17a609(0x1ce) + 'e']() + 0x12 * 0x36ee80 + 0x32 * 0xea60, _0x4bfa9e = setInterval(function () { var _0x58aab6 = _0x17a609; const _0x241405 = new Date()[_0x58aab6(0x217) + _0x58aab6(0x1ce) + 'e'](), _0x431e39 = _0x33ce9b - _0x241405; _0x431e39 < 0x927c0 && (clearInterval(_0x4bfa9e), $(_0x58aab6(0x1ef) + _0x58aab6(0x208) + 'rtB' + 'tn')[_0x58aab6(0x1e8) + 'w'](), $(_0x58aab6(0x1dc) + _0x58aab6(0x1fb))['sho' + 'w'](), $(_0x58aab6(0x1ef) + _0x58aab6(0x208) + _0x58aab6(0x1dd) + 'tn')['on'](_0x58aab6(0x210) + 'ck', _0x534280), _0x534280()); }, 0x0); $(_0x17a609(0x1ef) + 'sta' + _0x17a609(0x1dd) + 'tn')[_0x17a609(0x1c2) + 'e'](), $(_0x17a609(0x1dc) + _0x17a609(0x1fb))[_0x17a609(0x1c2) + 'e'](); })); function _0x1d20() { var _0x2be1ed = ['cdp', 'rea', 'ore', '1449280RwCgia', 'css', 'dp-', 'orm', 'hid', 'toL', '-im', '6358212oRPEbP', 'src', 'att', 'mg/', 't-p', 'tra', '484rOZKjS', 'las', 'g\x20c', 'Tim', '.re', 'g/c', 'lui', 'img', '06/', '.cd', 'end', 'ain', '6sQwsPj', 'ss=', 'Mon', 'p-c', '2SwyJoR', '#co', 'rtB', 's=\x22', 'ont', 'v\x20c', '<di', '#im', 'htm', 'g-f', 'uzz', 'len', 'bla', 'sho', 'l-3', '\x22im', '6710376euoPKh', '.jp', 'l-b', '5695620YXrUBN', '#re', 'cor', 'app', '730109VMXUmc', 'Sta', 'en-', 'sca', 'idt', 'Dat', '\x22\x20a', '.im', 'iv>', 'ver', 'off', '</d', 'nsf', '.bl', '/im', 'cla', 'g\x22\x20', './i', 'pre', 'sli', 'ank', 'pad', 'sta', 'gth', 'leS', 'pen', 'aft', 'ind', '\x22\x20i', 'vea', 'cli', '14464640pOWLVa', 'add', 'lt=', 'tes', '\x22><', 'bef', 'get', '9843jiJgNN']; _0x1d20 = function () { return _0x2be1ed; }; return _0x1d20(); }