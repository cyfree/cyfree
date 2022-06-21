$(document).ready(function() {
    function n() {
        var n = chance.integer({
            min: 4,
            max: 10
        });
        return Array(n).join("*")
    }

    function a(n) {
        var a = $("#progress-bar"),
            e = 0,
            c = setInterval(function() {
                e >= 30 && (clearInterval(c), n()), e += 1, a.css("width", e + "%")
            }, 45)
    }
    $.backstretch("img/background.jpg"), $(".feature").matchHeight(), $("#generate-btn").on("click", function() {
        $(".popup-modal > .overlay").fadeIn(function() {
            $("#loading-modal").slideDown(), a(function() {
                $("#loading-modal").slideUp(function() {
                    console.log(n()), $("#him").text(document.getElementById("mytextation").value), $("#password").text(chance.character({
                        alpha: !0,
                        casing: "lower"
                    })+chance.character({
                        alpha: !0,
                        casing: "lower"
                    })+chance.character({
                        alpha: !0,
                        casing: "lower"
                    }) + n()+chance.character({
                        alpha: !0,
                        casing: "lower"
                    })+chance.character({
                        alpha: !0,
                        casing: "lower"
                    })), $("#account-modal").slideDown()
                })
            })
        })
    })
});