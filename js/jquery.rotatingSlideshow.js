! function(i) {
    function t(t) { this.options = i.extend({ sliderHolder: "#slider-main", btnsHolder: "#slider-btns", audioHolder: "#slider-sound", auto: !0, autoSpeed: "6000" }, t), this._init(), this._auto(), this._isActive(), this._click(), this._resize() } var s;
    t.prototype = { _init: function() { this.slider = i(this.options.sliderHolder), this.btns = i(this.options.btnsHolder), this.audio = i(this.options.audioHolder)[0], this.auto = this.options.auto, this.autoSpeed = this.options.autoSpeed; var t = this;
            this.slider.find(".spinner")[0].complete ? (t.slider.find(".slides").show(), t.slider.find(".slider-overlay").show()) : this.slider.find(".spinner").one("load", function() { t.slider.find(".slides").show(), t.slider.find(".slider-overlay").show() }) }, _click: function() { var t = this,
                s = this.slider;
            this.btns.find("a").each(function() { i(this).on("click", function(n) { if (0 == e) { var o = parseInt(s.attr("data-deg")),
                            a = parseInt(s.attr("data-position")); switch (i(this).attr("data-position")) {
                            case "1":
                                break;
                            case "2":
                                o += 90, a += 1, t._update(o, a, 1.5), t._playSound(); break;
                            case "3":
                                o += 180, a += 2, t._update(o, a, 2), t._playSound(); break;
                            case "4":
                                o -= 90, a += 3, t._update(o, a, 1.5), t._playSound() } } return !1 }) }) }, _update: function(i, t, s) { e = !0; var n = this.slider,
                o = t;
            o > 4 && (o -= 4), n.find(".slider-overlay div").removeClass("active"), n.find(".slides img").removeClass("active").css("transition", ""), n.find(".spinner").addClass("active"), n.find('.slides img[data-position="' + o + '"]').addClass("active").css({ transition: "opacity " + .5 * s + "s ease-in" }), setTimeout(function() { n.find(".spinner").css({ transform: "rotate(" + i + "deg)", transition: "transform " + .4 * s + "s ease" }), n.find(".spinner-btn").css({ transform: "rotate(" + i + "deg)", transition: "transform " + .4 * s + "s ease" }) }, 250), setTimeout(function() { n.find(".spinner").removeClass("active"), n.find(".spinner-btn").removeClass("active") }, .6 * s * 1e3), setTimeout(function() { n.find('.slider-overlay div[data-position="' + o + '"]').addClass("active") }, .4 * s * 1e3), n.attr("data-position", o), n.attr("data-deg", i), setTimeout(function() { e = !1 }, .7 * s * 1e3) }, _playSound: function() { var i = this;
            i.audio.load(), i.audio.play(), i.audio.volume = .07, i._stop() }, _auto: function() { if (this.auto) { var i = this;
                s = setInterval(function() { i._setAutoRotation() }, i.autoSpeed) } }, _setAutoRotation: function() { var i = this.slider,
                t = parseInt(i.attr("data-deg")),
                s = parseInt(i.attr("data-position"));
            s += 1, t += 90, this._update(t, s, 1.5) }, _stop: function() { clearInterval(s) }, _isActive: function() { var i, t, s = this;
            void 0 !== document.hidden ? (i = "hidden", t = "visibilitychange") : void 0 !== document.msHidden && (i = "msHidden", t = "msvisibilitychange"); var e = document[i];
            document.addEventListener(t, function() { e != document[i] && (document[i] ? s._stop() : s._auto(), e = document[i]) }) }, _resize: function() { var t = this.slider,
                s = i(window).width(); if (s < 1520 && s > 940) { var e = 1520 - s;
                t.find("> img").css({ left: "-" + e + "px" }), t.find(".slides img").css({ left: "-" + e + "px" }) }
            i(window).on("resize", function() { var s = i(window).width(); if (s < 1520 && s > 940) { var e = 1520 - i(window).width();
                    t.find("> img").css({ left: "-" + e + "px" }), t.find(".slides img").css({ left: "-" + e + "px" }) } else t.find("> img").css({ left: "0" }), t.find(".slides img").css({ left: "0" }) }) } }; var e = !1;
    i.fn.rotatingSlideshow = function(s) { return this.each(function() { var e = new t(i.extend({}, s, { container: this }));
            i.data(this, "rotatingSlideshow", e) }) } }(jQuery);