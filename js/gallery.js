$(function() { $.fn.imagesLoaded = function(e) { var i = this.find("img"),
            a = i.length,
            l = this,
            r = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

        function s() { e.call(l, i) } return a || s(), i.on("load error", function e() {--a <= 0 && this.src !== r && (setTimeout(s), i.off("load error", e)) }).each(function() { if (this.complete || void 0 === this.complete) { var e = this.src;
                this.src = r, this.src = e } }), this }; var e, i, a, l, r, s, n, t, d = $("#rg-gallery"),
        o = d.find("div.es-carousel-wrapper"),
        c = o.find("ul > li"),
        f = c.length;
    Gallery = (e = 0, i = "carousel", a = !1, l = function() { o.show().elastislide({ imageW: 65, onClick: function(i) { if (a) return !1;
                a = !0, t(i), e = i.index() } }), o.elastislide("setCurrent", e) }, r = function() { var e = $('<a href="#" class="rg-view-full"></a>'),
            a = $('<a href="#" class="rg-view-thumbs rg-view-selected"></a>');
        d.prepend($('<div class="rg-view"/>').append(e).append(a)), e.on("click.rgGallery", function(l) { return "carousel" === i && o.elastislide("destroy"), o.hide(), e.addClass("rg-view-selected"), a.removeClass("rg-view-selected"), i = "fullview", !1 }), a.on("click.rgGallery", function(r) { return l(), a.addClass("rg-view-selected"), e.removeClass("rg-view-selected"), i = "carousel", !1 }), "fullview" === i && e.trigger("click") }, s = function() { if ($("#img-wrapper-tmpl").tmpl({ itemsCount: f }).appendTo(d), f > 1) { var e = d.find("a.rg-image-nav-prev"),
                i = d.find("a.rg-image-nav-next"),
                a = d.find("div.rg-image");
            e.on("click.rgGallery", function(e) { return n("left"), !1 }), i.on("click.rgGallery", function(e) { return n("right"), !1 }), a.touchwipe({ wipeLeft: function() { n("right") }, wipeRight: function() { n("left") }, preventDefaultEvents: !1 }), $(document).on("keyup.rgGallery", function(e) { 39 == e.keyCode ? n("right") : 37 == e.keyCode && n("left") }) } }, n = function(i) { if (a) return !1;
        a = !0, "right" === i ? e + 1 >= f ? e = 0 : ++e : "left" === i && (e - 1 < 0 ? e = f - 1 : --e), t(c.eq(e)) }, { init: function() { c.add('<img src="images/ajax-loader.gif"/><img src="images/black.png"/>').imagesLoaded(function() { r(), s(), t(c.eq(e)) }), "carousel" === i && l() }, addItems: function(e) { o.find("ul").append(e), c = c.add($(e)), f = c.length, o.elastislide("add", e) }, showImage: t = function(l) { if (!(l.length <= 0)) { var r = d.find("div.rg-loading").show();
                c.removeClass("selected"), l.addClass("selected"); var s, n = l.find("img"),
                    t = n.data("large"),
                    f = n.data("preview"),
                    g = n.data("description");
                (s = t).indexOf("youtube") > -1 || s.indexOf("vimeo") > -1 || s.indexOf("mp4") > -1 ? (d.find("div.rg-image").empty().addClass("row").append('<iframe class="col-xs-12 col-sm-12" src="' + t + '"/>'), g && d.find("div.rg-caption").addClass("col-xs-12 col-sm-12").show().children("p").empty().append(g), r.hide(), "carousel" === i && (o.elastislide("reload"), o.elastislide("setCurrent", e)), a = !1) : $("<img/>").load(function() { f && f.length > 0 ? d.find("div.rg-image").empty().addClass("row").append('<a href="' + t + '" rel="nofollow" target="_blank"> <img class="col-xs-12 col-sm-12" src="' + f + '"/> </a>') : d.find("div.rg-image").empty().addClass("row").append('<img class="col-xs-12 col-sm-12" src="' + t + '"/>'), g && d.find("div.rg-caption").addClass("col-xs-12 col-sm-12").show().children("p").empty().append(g), r.hide(), "carousel" === i && (o.elastislide("reload"), o.elastislide("setCurrent", e)), a = !1 }).attr("src", t) } } }), Gallery.init() });