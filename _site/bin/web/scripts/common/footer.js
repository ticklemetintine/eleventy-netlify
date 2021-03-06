/*jslint browser: true, fudge: true, long: true */
/*global document, navigator */

(function () {
    "use strict";

    var wechatPopup = document.querySelector(".wechat-popup");
    var wechatCode = document.querySelector(".wechat-code");

    function weChatPopupContent() {
        if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent)) {
            if (document.documentElement.lang === "zh") {
                document.querySelector(".wechat-code .instructions").innerText = "或搜索微信号\r\ntemasek_digital，\r\n关注我们";
            } else {
                document.querySelector(".wechat-code .instructions").innerText = "Or find us on \r\nWeChat: temasek_digital";
            }
        } else if (document.documentElement.lang === "zh") {
            document.querySelector(".wechat-code .instructions").innerText = "扫描QR码，了解更多资讯";
        } else {
            document.querySelector(".wechat-code .instructions").innerText = "For more information, \r\nscan the QR code";
        }
    }

    function wechatPopupClose() {
        document.querySelector(".wechat-code button").onclick = function () {
            wechatCode.classList.remove("active");
        };
    }

    function weChatPopup() {
        wechatPopup.onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            wechatCode.classList.add("active");
            wechatPopupClose();
        };
    }

    weChatPopup();
    weChatPopupContent();

})();
