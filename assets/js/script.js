function mytest(e) {
    console.log(e)
}

document.addEventListener("DOMContentLoaded", function () {
    var brazil_land = document.getElementById("path2812");
    var argentina_land = document.getElementById("path4518");
    var colombia_land = document.getElementById("co");
    var peru_land = document.getElementById("pe");
    var chile_land = document.getElementById("path6462");
    var mexico_land = document.getElementById("path2630");
    var guatemala_land = document.getElementById("gt");
    var elsalvador_land = document.getElementById("sv");
    var costarica_land = document.getElementById("cr");

    var brazil_text = document.getElementById("path2812_text");
    var argentina_text = document.getElementById("path4518_text");
    var colombia_text = document.getElementById("co_text");
    var peru_text = document.getElementById("pe_text");
    var chile_text = document.getElementById("path6462_text");
    var mexico_text = document.getElementById("path2630_text");
    var guatemala_text = document.getElementById("gt_text");
    var elsalvador_text = document.getElementById("sv_text");
    var costarica_text = document.getElementById("cr_text");

    var brazil_text_back = document.getElementById("path2812_text_back");
    var argentina_text_back = document.getElementById("path4518_text_back");
    var colombia_text_back = document.getElementById("co_text_back");
    var peru_text_back = document.getElementById("pe_text_back");
    var chile_text_back = document.getElementById("path6462_text_back");
    var mexico_text_back = document.getElementById("path2630_text_back");
    var guatemala_text_back = document.getElementById("gt_text_back");
    var elsalvador_text_back = document.getElementById("sv_text_back");
    var costarica_text_back = document.getElementById("cr_text_back");

    var social_icon = document.getElementById("social_icon");
    var facebook_icon = document.getElementById("facebook");
    var instagram_icon = document.getElementById("instagram");
    var linkedin_icon = document.getElementById("linkedin");
    var twitter_icon = document.getElementById("twitter");
    var icons = [facebook_icon, instagram_icon, linkedin_icon, twitter_icon];

    function getCoordinate(event) {
        var svg = document.getElementById('svg1926');
        var pt = svg.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        var svgPoint = pt.matrixTransform(svg.getScreenCTM().inverse());
        var targetX = svgPoint.x;
        var targetY = svgPoint.y;
        return [targetX, targetY];
    }

    brazil_land.addEventListener("click", function (event) {
        targetXY = getCoordinate(event);
        targetX = targetXY[0];
        targetY = targetXY[1];
        if (((targetX > 1438) && (targetX < 1537)) && ((targetY > 734) && (targetY < 821)))
            window.open("https://www.facebook.com", "_blank");

        else if (((targetX > 1573) && (targetX < 1667)) && ((targetY > 734) && (targetY < 821)))
            window.open("https://www.instagram.com", "_blank");

        else if (((targetX > 1703) && (targetX < 1797)) && ((targetY > 734) && (targetY < 821)))
            window.open("https://www.linkedin.com", "_blank");

        else if (((targetX > 1840) && (targetX < 1927)) && ((targetY > 734) && (targetY < 821)))
            window.open("https://www.twitter.com", "_blank");

        else if (((targetX > 1360) && (targetX < 1730)) && ((targetY > 655) && (targetY < 690)))
            window.open("https://www.30e.live", "_blank");

    });

    argentina_land.addEventListener("click", function (event) {
        targetXY = getCoordinate(event);
        targetX = targetXY[0];
        targetY = targetXY[1];
        if (((targetX > 1663) && (targetX < 1746)) && ((targetY > 1221) && (targetY < 1297)))
            window.open("https://www.facebook.com", "_blank");

        else if (((targetX > 1797) && (targetX < 1883)) && ((targetY > 1221) && (targetY < 1297)))
            window.open("https://www.instagram.com", "_blank");

        else if (((targetX > 1930) && (targetX < 2013)) && ((targetY > 1221) && (targetY < 1297)))
            window.open("https://www.linkedin.com", "_blank");

        else if (((targetX > 2064) && (targetX < 2143)) && ((targetY > 1221) && (targetY < 1297)))
            window.open("https://www.twitter.com", "_blank");

        else if (((targetX > 1576) && (targetX < 2053)) && ((targetY > 1150) && (targetY < 1200)))
            window.open("https://www.indiefolks.com.ar", "_blank");

    });

    colombia_land.addEventListener("click", function (event) {
        targetXY = getCoordinate(event);
        targetX = targetXY[0];
        targetY = targetXY[1];
        if (((targetX > 1519) && (targetX < 1591)) && ((targetY > 297) && (targetY < 369)))
            window.open("https://www.facebook.com", "_blank");

        else if (((targetX > 1638) && (targetX < 1714)) && ((targetY > 297) && (targetY < 369)))
            window.open("https://www.instagram.com", "_blank");

        else if (((targetX > 1760) && (targetX < 1829)) && ((targetY > 297) && (targetY < 369)))
            window.open("https://www.linkedin.com", "_blank");

        else if (((targetX > 1880) && (targetX < 1952)) && ((targetY > 297) && (targetY < 369)))
            window.open("https://www.twitter.com", "_blank");

        else if (((targetX > 1500) && (targetX < 1919)) && ((targetY > 230) && (targetY < 255)))
            window.open("https://www.uniónlive.com", "_blank");

    });

    mexico_land.addEventListener("click", function (event) {
        targetXY = getCoordinate(event);
        targetX = targetXY[0];
        targetY = targetXY[1];
        if (((targetX > 876) && (targetX < 955)) && ((targetY > -95) && (targetY < -12)))
            window.open("https://www.facebook.com", "_blank");
        else if (((targetX > 1006) && (targetX < 1085)) && ((targetY > -95) && (targetY < -12)))
            window.open("https://www.instagram.com", "_blank");
        else if (((targetX > 1136) && (targetX < 1222)) && ((targetY > -95) && (targetY < -12)))
            window.open("https://www.linkedin.com", "_blank");
        else if (((targetX > 1269) && (targetX < 1352)) && ((targetY > -95) && (targetY < -12)))
            window.open("https://www.twitter.com", "_blank");
        else if (((targetX > 981) && (targetX < 1428)) && ((targetY > -171) && (targetY < -142)))
            window.open("https://www.instagram.com/elow._ent/?hl=es-la", "_blank");
    });

    brazil_land.addEventListener("mouseover", function () {
        document.getElementById("path2812").classList.add("brazil_hovered");
        // element
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (brazil_land.classList.contains("brazil_hovered")) {
                brazil_text_back.style.display = "block";
                brazil_text.style.display = "block";
            }

        }, 1200);
        this.parentNode.appendChild(brazil_text_back);
        this.parentNode.appendChild(brazil_text);

        // social media icons
        facebook_icon.setAttribute("x", "810");
        instagram_icon.setAttribute("x", "840");
        linkedin_icon.setAttribute("x", "870");
        twitter_icon.setAttribute("x", "900");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "920");
            icon.setAttribute("height", "15");
            icon.setAttribute("width", "15");
        });

        setTimeout(function () {
            if (brazil_land.classList.contains("brazil_hovered"))
                social_icon.style.display = "block";
        }, 1200);
        this.parentNode.appendChild(social_icon);
        // append total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    brazil_land.addEventListener("mouseout", function () {
        document.getElementById("path2812").classList.remove("brazil_hovered");
        brazil_text.style.display = "none";
        brazil_text_back.style.display = "none";
        social_icon.style.display = "none";
    });

    argentina_land.addEventListener("mouseover", function () {
        document.getElementById("path4518").classList.add("argentina_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (argentina_land.classList.contains("argentina_hovered")) {
                argentina_text.style.display = "block";
                argentina_text_back.style.display = "block";
            }

        }, 1200);
        this.parentNode.appendChild(argentina_text_back);
        this.parentNode.appendChild(argentina_text);
        // social media icons

        facebook_icon.setAttribute("x", "785");
        instagram_icon.setAttribute("x", "815");
        linkedin_icon.setAttribute("x", "845");
        twitter_icon.setAttribute("x", "875");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "990");
            icon.setAttribute("height", "15");
            icon.setAttribute("width", "15");
        });

        setTimeout(function () {
            if (argentina_land.classList.contains("argentina_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    argentina_land.addEventListener("mouseout", function () {
        document.getElementById("path4518").classList.remove("argentina_hovered");
        argentina_text.style.display = "none";
        argentina_text_back.style.display = "none";
        social_icon.style.display = "none";
    });

    colombia_land.addEventListener("mouseover", function () {
        document.getElementById("co").classList.add("colombia_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (colombia_land.classList.contains("colombia_hovered")) {
                colombia_text.style.display = "block";
                colombia_text_back.style.display = "block";
            }

        }, 1200);
        this.parentNode.appendChild(colombia_text_back);
        this.parentNode.appendChild(colombia_text);
        // social media icons
        facebook_icon.setAttribute("x", "1570");
        instagram_icon.setAttribute("x", "1690");
        linkedin_icon.setAttribute("x", "1810");
        twitter_icon.setAttribute("x", "1930");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "300");
            icon.setAttribute("height", "60");
            icon.setAttribute("width", "60");
        });

        setTimeout(function () {
            if (colombia_land.classList.contains("colombia_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    colombia_land.addEventListener("mouseout", function () {
        document.getElementById("co").classList.remove("colombia_hovered");
        colombia_text.style.display = "none";
        colombia_text_back.style.display = "none";
        social_icon.style.display = "none";
    });

    peru_land.addEventListener("mouseover", function () {
        document.getElementById("pe").classList.add("peru_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (peru_land.classList.contains("peru_hovered")) {
                peru_text.style.display = "block";
                peru_text_back.style.display = "block";
            }

        }, 1200);

        this.parentNode.appendChild(peru_text_back);
        this.parentNode.appendChild(peru_text);
        // social media icons
        facebook_icon.setAttribute("filter", "brightness(0) invert(1)");
        instagram_icon.setAttribute("filter", "brightness(0) invert(1)");
        linkedin_icon.setAttribute("filter", "brightness(0) invert(1)");
        twitter_icon.setAttribute("filter", "brightness(0) invert(1)");

        facebook_icon.setAttribute("x", "160");
        instagram_icon.setAttribute("x", "260");
        linkedin_icon.setAttribute("x", "360");
        twitter_icon.setAttribute("x", "460");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "1100");
            icon.setAttribute("height", "60");
            icon.setAttribute("width", "60");
        });

        setTimeout(function () {
            if (peru_land.classList.contains("peru_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    peru_land.addEventListener("mouseout", function () {
        document.getElementById("pe").classList.remove("peru_hovered");
        peru_text.style.display = "none";
        peru_text_back.style.display = "none";
        social_icon.style.display = "none";
        facebook_icon.removeAttribute("filter");
        instagram_icon.removeAttribute("filter");
        linkedin_icon.removeAttribute("filter");
        twitter_icon.removeAttribute("filter");
    });

    chile_land.addEventListener("mouseover", function () {
        document.getElementById("path6462").classList.add("chile_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (chile_land.classList.contains("chile_hovered")) {
                chile_text.style.display = "block";
                chile_text_back.style.display = "block";
            }

        }, 1200);

        this.parentNode.appendChild(chile_text_back);
        this.parentNode.appendChild(chile_text);

        // social media icons

        facebook_icon.setAttribute("filter", "brightness(0) invert(1)");
        instagram_icon.setAttribute("filter", "brightness(0) invert(1)");
        linkedin_icon.setAttribute("filter", "brightness(0) invert(1)");
        twitter_icon.setAttribute("filter", "brightness(0) invert(1)");

        facebook_icon.setAttribute("x", "580");
        instagram_icon.setAttribute("x", "610");
        linkedin_icon.setAttribute("x", "640");
        twitter_icon.setAttribute("x", "670");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "1050");
            icon.setAttribute("height", "15");
            icon.setAttribute("width", "15");
        });

        setTimeout(function () {
            if (chile_land.classList.contains("chile_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    chile_land.addEventListener("mouseout", function () {
        document.getElementById("path6462").classList.remove("chile_hovered");
        chile_text.style.display = "none";
        chile_text_back.style.display = "none";
        social_icon.style.display = "none";
        facebook_icon.removeAttribute("filter");
        instagram_icon.removeAttribute("filter");
        linkedin_icon.removeAttribute("filter");
        twitter_icon.removeAttribute("filter");
    });

    mexico_land.addEventListener("mouseover", function () {
        document.getElementById("path2630").classList.add("mexico_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (mexico_land.classList.contains("mexico_hovered")) {
                mexico_text.style.display = "block";
                mexico_text_back.style.display = "block";
            }

        }, 1200);

        this.parentNode.appendChild(mexico_text_back);
        this.parentNode.appendChild(mexico_text);

        // social media icons
        facebook_icon.setAttribute("x", "620");
        instagram_icon.setAttribute("x", "650");
        linkedin_icon.setAttribute("x", "680");
        twitter_icon.setAttribute("x", "710");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "706");
            icon.setAttribute("height", "15");
            icon.setAttribute("width", "15");
        });

        setTimeout(function () {
            if (mexico_land.classList.contains("mexico_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    mexico_land.addEventListener("mouseout", function () {
        document.getElementById("path2630").classList.remove("mexico_hovered");
        mexico_text.style.display = "none";
        mexico_text_back.style.display = "none";
        social_icon.style.display = "none";
    });

    guatemala_land.addEventListener("mouseover", function () {
        document.getElementById("gt").classList.add("guatemala_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (guatemala_land.classList.contains("guatemala_hovered")) {
                guatemala_text.style.display = "block";
                guatemala_text_back.style.display = "block";
            }

        }, 1200);

        this.parentNode.appendChild(guatemala_text_back);
        this.parentNode.appendChild(guatemala_text);

        // social media icons
        facebook_icon.setAttribute("filter", "brightness(0) invert(1)");
        instagram_icon.setAttribute("filter", "brightness(0) invert(1)");
        linkedin_icon.setAttribute("filter", "brightness(0) invert(1)");
        twitter_icon.setAttribute("filter", "brightness(0) invert(1)");

        facebook_icon.setAttribute("x", "1600");
        instagram_icon.setAttribute("x", "1720");
        linkedin_icon.setAttribute("x", "1840");
        twitter_icon.setAttribute("x", "1960");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "-260");
            icon.setAttribute("height", "60");
            icon.setAttribute("width", "60");
        });

        setTimeout(function () {
            if (guatemala_land.classList.contains("guatemala_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    guatemala_land.addEventListener("mouseout", function () {
        document.getElementById("gt").classList.remove("guatemala_hovered");
        guatemala_text.style.display = "none";
        guatemala_text_back.style.display = "none";
        social_icon.style.display = "none";
        facebook_icon.removeAttribute("filter");
        instagram_icon.removeAttribute("filter");
        linkedin_icon.removeAttribute("filter");
        twitter_icon.removeAttribute("filter");
    });

    elsalvador_land.addEventListener("mouseover", function () {
        document.getElementById("sv").classList.add("elsalvador_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (elsalvador_land.classList.contains("elsalvador_hovered")) {
                elsalvador_text.style.display = "block";
                elsalvador_text_back.style.display = "block";
            }

        }, 1200);

        this.parentNode.appendChild(elsalvador_text_back);
        this.parentNode.appendChild(elsalvador_text);

        // social media icons
        facebook_icon.setAttribute("filter", "brightness(0) invert(1)");
        instagram_icon.setAttribute("filter", "brightness(0) invert(1)");
        linkedin_icon.setAttribute("filter", "brightness(0) invert(1)");
        twitter_icon.setAttribute("filter", "brightness(0) invert(1)");

        facebook_icon.setAttribute("x", "1750");
        instagram_icon.setAttribute("x", "1870");
        linkedin_icon.setAttribute("x", "1990");
        twitter_icon.setAttribute("x", "2110");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "-280");
            icon.setAttribute("height", "60");
            icon.setAttribute("width", "60");
        });

        setTimeout(function () {
            if (elsalvador_land.classList.contains("elsalvador_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    elsalvador_land.addEventListener("mouseout", function () {
        document.getElementById("sv").classList.remove("elsalvador_hovered");
        elsalvador_text.style.display = "none";
        elsalvador_text_back.style.display = "none";
        social_icon.style.display = "none";
        facebook_icon.removeAttribute("filter");
        instagram_icon.removeAttribute("filter");
        linkedin_icon.removeAttribute("filter");
        twitter_icon.removeAttribute("filter");
    });

    costarica_land.addEventListener("mouseover", function () {
        document.getElementById("cr").classList.add("costarica_hovered");
        this.parentNode.appendChild(this);
        // text
        setTimeout(function () {
            if (costarica_land.classList.contains("costarica_hovered")) {
                costarica_text.style.display = "block";
                costarica_text_back.style.display = "block";
            }

        }, 1200);

        this.parentNode.appendChild(costarica_text_back);
        this.parentNode.appendChild(costarica_text);

        // social media icons
        facebook_icon.setAttribute("filter", "brightness(0) invert(1)");
        instagram_icon.setAttribute("filter", "brightness(0) invert(1)");
        linkedin_icon.setAttribute("filter", "brightness(0) invert(1)");
        twitter_icon.setAttribute("filter", "brightness(0) invert(1)");

        facebook_icon.setAttribute("x", "180");
        instagram_icon.setAttribute("x", "280");
        linkedin_icon.setAttribute("x", "380");
        twitter_icon.setAttribute("x", "480");

        icons.forEach(function (icon) {
            icon.setAttribute("y", "1080");
            icon.setAttribute("height", "70");
            icon.setAttribute("width", "80");
        });

        setTimeout(function () {
            if (costarica_land.classList.contains("costarica_hovered"))
                social_icon.style.display = "block";
        }, 1200);

        this.parentNode.appendChild(social_icon);
        // total
        this.parentNode.parentNode.appendChild(this.parentNode);
    });

    costarica_land.addEventListener("mouseout", function () {
        document.getElementById("cr").classList.remove("costarica_hovered");
        costarica_text.style.display = "none";
        costarica_text_back.style.display = "none";
        social_icon.style.display = "none";
        facebook_icon.removeAttribute("filter");
        instagram_icon.removeAttribute("filter");
        linkedin_icon.removeAttribute("filter");
        twitter_icon.removeAttribute("filter");
    });

});