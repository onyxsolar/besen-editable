var cookieconsent = function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    return i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                i.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 53)
}([function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map((function(t) {
                var i = function(e, t) {
                    var i = e[1] || ""
                      , n = e[3];
                    if (!n)
                        return i;
                    if (t && "function" == typeof btoa) {
                        var o = (s = n,
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */")
                          , a = n.sources.map((function(e) {
                            return "/*# sourceURL=" + n.sourceRoot + e + " */"
                        }
                        ));
                        return [i].concat(a).concat([o]).join("\n")
                    }
                    var s;
                    return [i].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + i + "}" : i
            }
            )).join("")
        }
        ,
        t.i = function(e, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, o = 0; o < this.length; o++) {
                var a = this[o][0];
                null != a && (n[a] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var s = e[o];
                null != s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"),
                t.push(s))
            }
        }
        ,
        t
    }
}
, function(e, t, i) {
    var n, o, a = {}, s = (n = function() {
        return window && document && document.all && !window.atob
    }
    ,
    function() {
        return void 0 === o && (o = n.apply(this, arguments)),
        o
    }
    ), r = function(e, t) {
        return t ? t.querySelector(e) : document.querySelector(e)
    }, c = function(e) {
        var t = {};
        return function(e, i) {
            if ("function" == typeof e)
                return e();
            if (void 0 === t[e]) {
                var n = r.call(this, e, i);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                    try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                t[e] = n
            }
            return t[e]
        }
    }(), l = null, p = 0, d = [], u = i(40);
    function _(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i]
              , o = a[n.id];
            if (o) {
                o.refs++;
                for (var s = 0; s < o.parts.length; s++)
                    o.parts[s](n.parts[s]);
                for (; s < n.parts.length; s++)
                    o.parts.push(g(n.parts[s], t))
            } else {
                var r = [];
                for (s = 0; s < n.parts.length; s++)
                    r.push(g(n.parts[s], t));
                a[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: r
                }
            }
        }
    }
    function m(e, t) {
        for (var i = [], n = {}, o = 0; o < e.length; o++) {
            var a = e[o]
              , s = t.base ? a[0] + t.base : a[0]
              , r = {
                css: a[1],
                media: a[2],
                sourceMap: a[3]
            };
            n[s] ? n[s].parts.push(r) : i.push(n[s] = {
                id: s,
                parts: [r]
            })
        }
        return i
    }
    function k(e, t) {
        var i = c(e.insertInto);
        if (!i)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = d[d.length - 1];
        if ("top" === e.insertAt)
            n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild),
            d.push(t);
        else if ("bottom" === e.insertAt)
            i.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = c(e.insertAt.before, i);
            i.insertBefore(t, o)
        }
    }
    function v(e) {
        if (null === e.parentNode)
            return !1;
        e.parentNode.removeChild(e);
        var t = d.indexOf(e);
        t >= 0 && d.splice(t, 1)
    }
    function f(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce) {
            var n = function() {
                0;
                return i.nc
            }();
            n && (e.attrs.nonce = n)
        }
        return b(t, e.attrs),
        k(e, t),
        t
    }
    function b(e, t) {
        Object.keys(t).forEach((function(i) {
            e.setAttribute(i, t[i])
        }
        ))
    }
    function g(e, t) {
        var i, n, o, a;
        if (t.transform && e.css) {
            if (!(a = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css)))
                return function() {}
                ;
            e.css = a
        }
        if (t.singleton) {
            var s = p++;
            i = l || (l = f(t)),
            n = x.bind(null, i, s, !1),
            o = x.bind(null, i, s, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function(e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                e.attrs.rel = "stylesheet",
                b(t, e.attrs),
                k(e, t),
                t
            }(t),
            n = z.bind(null, i, t),
            o = function() {
                v(i),
                i.href && URL.revokeObjectURL(i.href)
            }
            ) : (i = f(t),
            n = w.bind(null, i),
            o = function() {
                v(i)
            }
            );
        return n(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                n(e = t)
            } else
                o()
        }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {},
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
        var i = m(e, t);
        return _(i, t),
        function(e) {
            for (var n = [], o = 0; o < i.length; o++) {
                var s = i[o];
                (r = a[s.id]).refs--,
                n.push(r)
            }
            e && _(m(e, t), t);
            for (o = 0; o < n.length; o++) {
                var r;
                if (0 === (r = n[o]).refs) {
                    for (var c = 0; c < r.parts.length; c++)
                        r.parts[c]();
                    delete a[r.id]
                }
            }
        }
    }
    ;
    var h, y = (h = [],
    function(e, t) {
        return h[e] = t,
        h.filter(Boolean).join("\n")
    }
    );
    function x(e, t, i, n) {
        var o = i ? "" : n.css;
        if (e.styleSheet)
            e.styleSheet.cssText = y(t, o);
        else {
            var a = document.createTextNode(o)
              , s = e.childNodes;
            s[t] && e.removeChild(s[t]),
            s.length ? e.insertBefore(a, s[t]) : e.appendChild(a)
        }
    }
    function w(e, t) {
        var i = t.css
          , n = t.media;
        if (n && e.setAttribute("media", n),
        e.styleSheet)
            e.styleSheet.cssText = i;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i))
        }
    }
    function z(e, t, i) {
        var n = i.css
          , o = i.sourceMap
          , a = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || a) && (n = u(n)),
        o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var s = new Blob([n],{
            type: "text/css"
        })
          , r = e.href;
        e.href = URL.createObjectURL(s),
        r && URL.revokeObjectURL(r)
    }
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Active","always_active":"Always active","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactive","nb_agree":"I agree","nb_changep":"Change my preferences","nb_ok":"OK","nb_reject":"I decline","nb_text":"We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.","nb_title":"We use cookies","pc_fnct_text_1":"Functionality cookies","pc_fnct_text_2":"These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.","pc_fnct_text_3":"For example, we may use functionality cookies to remember your language preferences or remember your login details.","pc_minfo_text_1":"More information","pc_minfo_text_2":"For any queries in relation to our policy on cookies and your choices, please contact us.","pc_minfo_text_3":"To find out more, please visit our <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"Save my preferences","pc_sncssr_text_1":"Strictly necessary cookies","pc_sncssr_text_2":"These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.","pc_sncssr_text_3":"Without these cookies, we cannot provide you certain services on our website.","pc_title":"Cookies Preferences Center","pc_trck_text_1":"Tracking cookies","pc_trck_text_2":"These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.","pc_trck_text_3":"For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you.","pc_trck_text_4":"The information collected through these tracking and performance cookies do not identify any individual visitor.","pc_trgt_text_1":"Targeting and advertising cookies","pc_trgt_text_2":"These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.","pc_trgt_text_3":"These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser\'s activities across their network of websites.","pc_trgt_text_4":"If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.","pc_yprivacy_text_1":"Your privacy is important to us","pc_yprivacy_text_2":"Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).","pc_yprivacy_text_3":"You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.","pc_yprivacy_title":"Your privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Active","always_active":"Always active","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactive","nb_agree":"I agree","nb_changep":"Change my preferences","nb_ok":"OK","nb_reject":"I decline","nb_text":"We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalised content and targeted ads, to analyse our website traffic, and to understand where our visitors are coming from.","nb_title":"We use cookies","pc_fnct_text_1":"Functionality cookies","pc_fnct_text_2":"These cookies are used to provide you with a more personalised experience on our website and to remember choices you make when you use our website.","pc_fnct_text_3":"For example, we may use functionality cookies to remember your language preferences or remember your login details.","pc_minfo_text_1":"More information","pc_minfo_text_2":"For any queries in relation to our policy on cookies and your choices, please contact us.","pc_minfo_text_3":"To find out more, please visit our <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"Save my preferences","pc_sncssr_text_1":"Strictly necessary cookies","pc_sncssr_text_2":"These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.","pc_sncssr_text_3":"Without these cookies, we cannot provide you certain services on our website.","pc_title":"Cookies Preferences Centre","pc_trck_text_1":"Tracking cookies","pc_trck_text_2":"These cookies are used to collect information to analyse the traffic to our website and how visitors are using our website.","pc_trck_text_3":"For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you.","pc_trck_text_4":"The information collected through these tracking and performance cookies do not identify any individual visitor.","pc_trgt_text_1":"Targeting and advertising cookies","pc_trgt_text_2":"These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.","pc_trgt_text_3":"These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser\'s activities across their network of websites.","pc_trgt_text_4":"If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.","pc_yprivacy_text_1":"Your privacy is important to us","pc_yprivacy_text_2":"Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).","pc_yprivacy_text_3":"You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.","pc_yprivacy_title":"Your privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktiv","always_active":"Immer aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Alle akzeptieren","nb_changep":"Einstellungen ändern","nb_ok":"OK","nb_reject":"Ich lehne ab","nb_text":"Diese Website verwendet Cookies und Targeting Technologien, um Ihnen ein besseres Internet-Erlebnis zu ermöglichen und die Werbung, die Sie sehen, besser an Ihre Bedürfnisse anzupassen. Diese Technologien nutzen wir außerdem, um Ergebnisse zu messen, um zu verstehen, woher unsere Besucher kommen oder um unsere Website weiter zu entwickeln.","nb_title":"Ihre Privatsphäre ist uns wichtig","pc_fnct_text_1":"Funktions Cookies","pc_fnct_text_2":"Diese Cookies werden verwendet, um Ihnen ein persönlicheres Erlebnis auf unserer Website zu ermöglichen und um sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben.","pc_fnct_text_3":"Beispielsweise können wir Funktions-Cookies verwenden, um Ihre Spracheinstellungen oder Ihre Anmeldedaten zu speichern.","pc_minfo_text_1":"Mehr Informationen","pc_minfo_text_2":"Bei Fragen in Bezug auf unseren Umgang mit Cookies und Ihrer Privatsphäre kontaktieren Sie uns bitte.","pc_minfo_text_3":"Details finden Sie in unserer <a href=\'%s\' target=\'_blank\'>Datenschutzrichtlinie</a>.","pc_save":"Einstellungen speichern","pc_sncssr_text_1":"Technisch notwendige Cookies","pc_sncssr_text_2":"Diese Cookies sind für die Bereitstellung von Diensten, die über unsere Website verfügbar sind, und für die Verwendung bestimmter Funktionen unserer Website von wesentlicher Bedeutung.","pc_sncssr_text_3":"Ohne diese Cookies können wir Ihnen bestimmte Dienste auf unserer Website nicht zur Verfügung stellen.","pc_title":"Cookie Einstellungen","pc_trck_text_1":"Tracking und Performance Cookies","pc_trck_text_2":"Diese Cookies werden zum Sammeln von Informationen verwendet, um den Verkehr auf unserer Website und die Nutzung unserer Website durch Besucher zu analysieren.","pc_trck_text_3":"Diese Cookies können beispielsweise nachverfolgen, wie lange Sie auf der Website verweilen oder welche Seiten Sie besuchen. So können wir verstehen, wie wir unsere Website für Sie verbessern können.","pc_trck_text_4":"Die durch diese Tracking- und Performance-Cookies gesammelten Informationen identifizieren keinen einzelnen Besucher.","pc_trgt_text_1":"Targeting und Werbung Cookies","pc_trgt_text_2":"Diese Cookies werden genutzt, um Werbung anzuzeigen, die Sie aufgrund Ihrer Surfgewohnheiten wahrscheinlich interessieren wird.","pc_trgt_text_3":"Diese Cookies, die von unseren Inhalten und / oder Werbeanbietern bereitgestellt werden, können Informationen, die sie von unserer Website gesammelt haben, mit anderen Informationen kombinieren, welche sie durch Aktivitäten Ihres Webbrowsers in Ihrem Netzwerk von Websites gesammelt haben.","pc_trgt_text_4":"Wenn Sie diese Targeting- oder Werbe-Cookies entfernen oder deaktivieren, werden weiterhin Anzeigen angezeigt. Diese sind für Sie jedoch möglicherweise nicht relevant.","pc_yprivacy_text_1":"Ihre Privatsphäre ist uns wichtig","pc_yprivacy_text_2":"Cookies sind sehr kleine Textdateien, die auf Ihrem Rechner gespeichert werden, wenn Sie eine Website besuchen. Wir verwenden Cookies für eine Reihe von Auswertungen, um damit Ihren Besuch auf unserer Website kontinuierlich verbessern zu können (z. B. damit Ihnen Ihre Login-Daten erhalten bleiben).","pc_yprivacy_text_3":"Sie können Ihre Einstellungen ändern und verschiedenen Arten von Cookies erlauben, auf Ihrem Rechner gespeichert zu werden, während Sie unsere Webseite besuchen. Sie können auf Ihrem Rechner gespeicherte Cookies ebenso weitgehend wieder entfernen. Bitte bedenken Sie aber, dass dadurch Teile unserer Website möglicherweise nicht mehr in der gedachten Art und Weise nutzbar sind.","pc_yprivacy_title":"Ihre Privatsphäre","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Datenschutzrichtlinie</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Actif","always_active":"Toujours activé","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactif","nb_agree":"J\'accepte","nb_changep":"Changer mes préférences","nb_ok":"OK","nb_reject":"Je refuse","nb_text":"Nous utilisons des cookies et d\'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site, pour vous montrer un contenu personnalisé et des publicités ciblées, pour analyser le trafic de notre site et pour comprendre la provenance de nos visiteurs.","nb_title":"Nous utilisons des cookies","pc_fnct_text_1":"Cookies de Fonctionnalité","pc_fnct_text_2":"Ces cookies servent à vous offrir une expérience plus personnalisée sur notre site Web et à mémoriser les choix que vous faites lorsque vous utilisez notre site Web.","pc_fnct_text_3":"Par exemple, nous pouvons utiliser des cookies de fonctionnalité pour mémoriser vos préférences de langue ou vos identifiants de connexion.","pc_minfo_text_1":"Plus d\'information","pc_minfo_text_2":"Pour toute question relative à notre politique en matière de cookies et à vos choix, veuillez nous contacter.","pc_minfo_text_3":"Pour en savoir plus, merci de consulter notre <a href=\'%s\' target=\'_blank\'>Politique de confidentialité</a>.","pc_save":"Sauvegarder mes préférences","pc_sncssr_text_1":"Cookies strictement nécessaires","pc_sncssr_text_2":"Ces cookies sont essentiels pour vous fournir les services disponibles sur notre site Web et vous permettre d’utiliser certaines fonctionnalités de notre site Web.","pc_sncssr_text_3":"Sans ces cookies, nous ne pouvons pas vous fournir certains services sur notre site Web.","pc_title":"Espace de Préférences des Cookies","pc_trck_text_1":"Cookies de suivi et de performance","pc_trck_text_2":"Ces cookies sont utilisés pour collecter des informations permettant d\'analyser le trafic sur notre site et la manière dont les visiteurs utilisent notre site.","pc_trck_text_3":"Par exemple, ces cookies peuvent suivre des choses telles que le temps que vous passez sur le site Web ou les pages que vous visitez, ce qui nous aide à comprendre comment nous pouvons améliorer notre site Web pour vous.","pc_trck_text_4":"Les informations collectées via ces cookies de suivi et de performance n\' identifient aucun visiteur en particulier.","pc_trgt_text_1":"Cookies de ciblage et de publicité","pc_trgt_text_2":"Ces cookies sont utilisés pour afficher des publicités susceptibles de vous intéresser en fonction de vos habitudes de navigation.","pc_trgt_text_3":"Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicité, peuvent associer des informations qu\'ils ont collectées sur notre site Web à d\'autres informations qu\'ils ont collectées de manière indépendante et concernant les activités du votre navigateur Web sur son réseau de sites Web.","pc_trgt_text_4":"Si vous choisissez de supprimer ou de désactiver ces cookies de ciblage ou de publicité, vous verrez toujours des annonces, mais elles risquent de ne pas être pertinentes.","pc_yprivacy_text_1":"Votre confidentialité est importante pour nous","pc_yprivacy_text_2":"Les cookies sont de très petits fichiers texte qui sont stockés sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies à diverses fins et pour améliorer votre expérience en ligne sur notre site Web (par exemple, pour mémoriser les informations de connexion de votre compte).","pc_yprivacy_text_3":"Vous pouvez modifier vos préférences et refuser l\'enregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez également supprimer les cookies déjà stockés sur votre ordinateur, mais gardez à l\'esprit que leur suppression peut vous empêcher d\'utiliser des éléments de notre site Web.","pc_yprivacy_title":"Votre confidentialité","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politique de confidentialité</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Activo","always_active":"Siempre activo","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactivo","nb_agree":"Aceptar","nb_changep":"Configurar","nb_ok":"OK","nb_reject":"Rechazar","nb_text":"Usamos cookies y otras técnicas de rastreo para mejorar tu experiencia de navegación en nuestra web, para mostrarte contenidos personalizados y anuncios adecuados, para analizar el tráfico en nuestra web y para comprender de donde llegan nuestros visitantes.","nb_title":"Utilizamos cookies","pc_fnct_text_1":"Cookies de funcionalidad","pc_fnct_text_2":"Estas cookies son utilizadas para proveerte una experiencia más personalizada y recordar tus elecciones en nuestra web.","pc_fnct_text_3":"Por ejemplo, podemos utilizar cookies de funcionalidad para recordar tus preferencias de idioma o tus detalles de acceso.","pc_minfo_text_1":"Más información","pc_minfo_text_2":"Para cualquier pregunta en relación con nuestra política de cookies y tus preferencias, contacta con nosotros, por favor.","pc_minfo_text_3":"Para saber más, visita nuestra página sobre la <a href=\'%s\' target=\'_blank\'>Política de privacidad</a>.","pc_save":"Guardar mis preferencias","pc_sncssr_text_1":"Cookies estrictamente necesarias","pc_sncssr_text_2":"Estos cookies son esenciales para proveerte los servicios disponibles en nuestra web y para permitirte utilizar algunas características de nuestra web.","pc_sncssr_text_3":"Sin estas cookies, no podemos proveer algunos servicios de nuestro sitio web.","pc_title":"Centro de Preferencias de Cookies","pc_trck_text_1":"Cookies de rastreo y rendimiento","pc_trck_text_2":"Estas cookies son utilizadas para recopilar información, para analizar el tráfico y la forma en que los usuarios utilizan nuestra web.","pc_trck_text_3":"Por ejemplo, estas cookies pueden recopilar datos como cuánto tiempo llevas navegado en nuestro sitio web o qué páginas visitas, cosa que nos ayuda a comprender cómo podemos mejorar nuestra web para ti.","pc_trck_text_4":"La información recopilada con estas cookies de rastreo y rendimiento no identifican a ningún visitante individual.","pc_trgt_text_1":"Cookies de seguimiento y publicidad","pc_trgt_text_2":"Estas cookies son utilizadas para enseñarte anuncios que pueden ser interesantes basados en tus costumbres de navegación.","pc_trgt_text_3":"Estas cookies, servidas por nuestros proveedores de contenido y/o de publicidad, pueden combinar la información que ellos recogieron de nuestro sitio web con otra información recopilada por ellos en relación con las actividades de su navegador a través de su red de sitios web.","pc_trgt_text_4":"Si eliges cancelar o inhabilitar las cookies de seguimiento y publicidad, seguirás viendo anuncios pero estos podrían no ser de tu interés.","pc_yprivacy_text_1":"Tu privacidad es importante para nosotros","pc_yprivacy_text_2":"Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas nuestra web. Utilizamos cookies para diferentes objetivos y para mejorar tu experiencia en nuestro sitio web (por ejemplo, para recordar tus detalles de acceso).","pc_yprivacy_text_3":"Puedes cambiar tus preferencias y rechazar que algunos tipos de cookies sean almacenados mientras estás navegando en nuestra web. También puedes cancelar cualquier cookie ya almacenada en tu navegador, pero recuerda que cancelar las cookies puede impedirte utilizar algunas partes de nuestra web.","pc_yprivacy_title":"Tu privacidad","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Política de privacidad</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Actiu","always_active":"Sempre actiu","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactiu","nb_agree":"Estic d’acord","nb_changep":"Canviar preferències","nb_ok":"OK","nb_reject":"Declino","nb_text":"Fem servir cookies i altres tecnologies de seguiment per millorar la teva experiència de navegació al nostre lloc web, per mostrar-te contingut personalitzat i anuncis interessants per a tu, per analitzar el nostre tràfic i entendre d’on venen els nostres visitants.","nb_title":"Fem servir cookies","pc_fnct_text_1":"Cookies de funcionalitat","pc_fnct_text_2":"Aquestes cookies ens permeten oferir-vos una experiència personalitzada i recordar la vostra configuració quan feu servir el nostre lloc web.","pc_fnct_text_3":"Per exemple, podem fer servir funcionalitat per recordar el vostre idioma o les vostres credencials.","pc_minfo_text_1":"Més informació","pc_minfo_text_2":"Per qualsevol pregunta relacionada amb la nostra política de cookies i les vostres opcions, si us plau contacti’ns.","pc_minfo_text_3":"Per saber més, si us plau visiti la nostra <a href=\'%s\' target=\'_blank\'>Política de privacitat</a>.","pc_save":"Guarda les meves preferències","pc_sncssr_text_1":"Cookies estrictament necessàries","pc_sncssr_text_2":"Aquestes cookies són essencials per oferir-vos el nostres serveis i funcionalitats al nostre lloc web.","pc_sncssr_text_3":"Sense aquestes cookies, no us podem oferir alguns serveis.","pc_title":"Centre de Preferències de Cookies","pc_trck_text_1":"Cookies de seguiment i rendiment","pc_trck_text_2":"Aquestes cookies es fan servir per recollir informació, analitzar el tràfic i veure com es fa servir el nostre lloc web.","pc_trck_text_3":"Per exemple, aquestes cookies podrien fer el seguiment de quant de temps visiteu el nostre web o quines pàgines visiteu les quals ens poden ajudar a entendre com millorar el lloc web per vosaltres.","pc_trck_text_4":"La informació recollida gràcies a aquestes cookies de seguiment i rendiment no us identifiquen de forma individual.","pc_trgt_text_1":"Cookies de publicitat i focalització","pc_trgt_text_2":"Aquestes cookies es fan servir per mostrar anuncis que poden ser del vostre interès basats en els vostres hàbits d’us.","pc_trgt_text_3":"Aquestes cookies, servides tal i com ho fan els nostres proveïdors de publicitat i contingut, poden combinar informació recollida al nostre lloc web amb altra informació que hagin recollit independentment relacionada amb activitat a la seva xarxa de llocs web.","pc_trgt_text_4":"Si vostè decideix eliminar o deshabilitat aquestes cookies, encara veurà publicitat però aquesta pot no ser rellevant per vostè.","pc_yprivacy_text_1":"La vostra privacitat és important per nosaltres","pc_yprivacy_text_2":"Les cookies són uns arxius de text molt petits que es guarden al vostre  ordinador quan visiteu un lloc web. Fem servir cookies per una varietat de finalitats i millorar la vostra experiència al nostre lloc web (per exemple, per recordar les vostres credencials).","pc_yprivacy_text_3":"Pot canviar les vostres preferències i rebutjar l’emmagatzematge al vostre ordinador de certs tipus de cookies mentres navega pel nostre. Pot eliminar qualsevol cookie ja emmagatzemada al vostre ordinador, però tingui en compte que eliminar cookies pot impedir que faci servir parts del nostre lloc web.","pc_yprivacy_title":"La vostra privacitat","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Política de privacitat</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Attivo","always_active":"Sempre attivo","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inattivo","nb_agree":"Accetto","nb_changep":"Cambia le mie impostazioni","nb_ok":"OK","nb_reject":"Rifiuto","nb_text":"Noi usiamo i cookies e altre tecniche di tracciamento per migliorare la tua esperienza di navigazione nel nostro sito, per mostrarti contenuti personalizzati e annunci mirati, per analizzare il traffico sul nostro sito, e per capire da dove arrivano i nostri visitatori.","nb_title":"Noi usiamo i cookies","pc_fnct_text_1":"Cookies funzionali","pc_fnct_text_2":"Questi cookies sono utilizzati per offrirti un’esperienza più personalizzata nel nostro sito e per ricordare le scelte che hai fatto mentre usavi il nostro sito.","pc_fnct_text_3":"Per esempio, possiamo usare cookies funzionali per memorizzare le tue preferenze sulla lingua o i tuoi dettagli di accesso.","pc_minfo_text_1":"Più informazioni","pc_minfo_text_2":"Per qualsiasi domanda relativa alla nostra politica sui cookies e le tue scelte, per favore contattaci.","pc_minfo_text_3":"Per saperne di più, visita per favore la nostra pagina sulla <a href=\'%s\' target=\'_blank\'>Politica sulla riservatezza</a>.","pc_save":"Salva le mie impostazioni","pc_sncssr_text_1":"Cookies strettamente necessari","pc_sncssr_text_2":"Questi cookies sono essenziali per fornirti i servizi disponibili nel nostro sito e per renderti disponibili alcune funzionalità del nostro sito web.","pc_sncssr_text_3":"Senza questi cookies, non possiamo fornirti alcuni servizi del nostro sito.","pc_title":"Centro Preferenze sui Cookies","pc_trck_text_1":"Cookies di tracciamento e prestazione","pc_trck_text_2":"Questi cookies sono utilizzati per raccogliere informazioni per analizzare il traffico verso il nostro sito e il modo in cui i visitatori utilizzano il nostro sito.","pc_trck_text_3":"Per esempio, questi cookies possono tracciare cose come quanto a lungo ti fermi nel nostro sito o le pagine che visiti, cosa che ci aiuta a capire come possiamo migliorare il nostro sito per te.","pc_trck_text_4":"Le informazioni raccolte attraverso questi cookies di tracciamento e performance non identificano alcun visitatore individuale.","pc_trgt_text_1":"Cookies di targeting e pubblicità","pc_trgt_text_2":"Questi cookies sono usati per mostrare annunci pubblicitari che possano verosimilmente essere di tuo interesse in base alle tue abitudini di navigazione.","pc_trgt_text_3":"Questi cookies, cosí come forniti dai nostri fornitori di  contenuti o annunci pubblicitari, possono combinare le informazioni che raccolgono dal nostro sito web con quelle che hanno indipendentemente raccolto in relazione all’attività del tuo browser attraverso la loro rete di siti web.","pc_trgt_text_4":"Se scegli di rimuovere o disabilitare questo tipo di cookies di targeting e pubblicità, vedrai ancora annunci pubblicitari ma potrebbero essere irrilevanti per te.","pc_yprivacy_text_1":"La tua privacy è importante per noi","pc_yprivacy_text_2":"I cookies sono dei piccolissimi file di testo che vengono memorizzati nel tuo computer quando visiti un sito web. Noi usiamo i cookies per una varietà di scopi e per migliorare la tua esperienza online nel nostro sito web (per esempio, per ricordare i tuoi dettagli di accesso).","pc_yprivacy_text_3":"Tu puoi cambiare le tue impostazioni e rifiutare che alcuni tipi di cookies vengano memorizzati sul tuo computer mentre stai navigando nel nostro sito web. Puoi anche rimuovere qualsiasi cookie già memorizzato nel tuo computer, ma ricorda che cancellare i cookies può impedirti di utilizzare alcune parti del nostro sito.","pc_yprivacy_title":"La tua privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politica sulla riservatezza</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktiv","always_active":"Alltid aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Jag accepterar","nb_changep":"Ändra mina inställningar","nb_ok":"OK","nb_reject":"Jag avböjer","nb_text":"Vi använder cookies och andra spårningsteknologier för att förbättra din surfupplevelse på vår webbplats, för att visa dig personligt innehåll och riktade annonser, för att analysera vår webbplatstrafik och för att förstå var våra besökare kommer ifrån.","nb_title":"Vi använder oss av cookies","pc_fnct_text_1":"Funktionella cookies","pc_fnct_text_2":"Dessa cookies används för att ge dig en mer personlig upplevelse på vår webbplats och för att komma ihåg val du gör när du använder vår webbplats.","pc_fnct_text_3":"Vi kan till exempel använda funktions cookies för att komma ihåg dina språkinställningar eller dina inloggningsuppgifter.","pc_minfo_text_1":"Mer information","pc_minfo_text_2":"Kontakta oss om du har frågor angående vår policy om cookies och dina val.","pc_minfo_text_3":"För att ta reda på mer, läs vår <a href=\'%s\' target=\'_blank\'>integritetspolicy</a>.","pc_save":"Spara mina inställningar","pc_sncssr_text_1":"Absolut nödvändiga cookies","pc_sncssr_text_2":"Dessa cookies är viktiga för att förse dig med tjänster som är tillgängliga via vår webbplats och för att du ska kunna använda vissa funktioner på vår webbplats.","pc_sncssr_text_3":"Utan dessa cookies kan vi inte tillhandahålla vissa tjänster på vår webbplats.","pc_title":"Cookies Inställningar","pc_trck_text_1":"Spårnings- och prestanda cookies","pc_trck_text_2":"Dessa cookies används för att samla in information för att analysera trafiken på vår webbplats och hur våra besökare använder den.","pc_trck_text_3":"Dessa cookies kan till exempel spåra hur länge du spenderar på webbplatsen eller vilka sidor du besöker vilket hjälper oss att förstå hur vi kan förbättra vår webbplats för dig.","pc_trck_text_4":"Informationen som samlas in genom dessa spårnings- och prestanda cookies identifierar ingen enskild besökare.","pc_trgt_text_1":"Inriktnings- och reklamcookies","pc_trgt_text_2":"Dessa cookies används för att visa reklam som sannolikt kommer att vara av intresse för dig baserat på dina surfvanor.","pc_trgt_text_3":"Dessa kakor, som betjänas av vårt innehåll och / eller reklamleverantörer, kan kombinera information som de samlat in från vår webbplats med annan information som de har samlat in oberoende om din webbläsares aktiviteter i deras nätverk av webbplatser.","pc_trgt_text_4":"Om du väljer att ta bort eller inaktivera dessa inriktnings- och reklamcookies kommer du fortfarande att se annonser men de kanske inte är relevanta för dig.","pc_yprivacy_text_1":"Din integritet är viktig för oss","pc_yprivacy_text_2":"Cookies är mycket små textfiler som lagras på din dator när du besöker en webbplats. Vi använder cookies till olika ändamål och för att kunna förbättra din onlineupplevelse på vår webbplats (till exempel som att komma ihåg dina inloggningsuppgifter).","pc_yprivacy_text_3":"Du kan ändra dina inställningar och avaktivera vissa typer av cookies som ska lagras på din dator när du surfar på vår webbplats. Du kan också ta bort alla cookies som redan är lagrade på din dator, men kom ihåg att radering av cookies kan hindra dig från att använda delar av vår webbplats.","pc_yprivacy_title":"Din integritet","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Integritetspolicy</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Actief","always_active":"Altijd actief","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactief","nb_agree":"Ik ga akkoord","nb_changep":"Wijzig mijn voorkeuren","nb_ok":"OK","nb_reject":"Ik weiger","nb_text":"Wij maken gebruik van cookies en andere tracking-technologieën om uw surfervaring op onze website te verbeteren, om gepersonaliseerde inhoud en advertenties te tonen, om ons websiteverkeer te analyseren en om te begrijpen waar onze bezoekers vandaan komen.","nb_title":"Wij gebruiken cookies","pc_fnct_text_1":"Functionele cookies","pc_fnct_text_2":"Deze cookies worden gebruikt om u een persoonlijkere ervaring op onze website te bieden en om keuzes te onthouden die u maakt wanneer u onze website gebruikt.","pc_fnct_text_3":"Functionele cookies worden bijvoorbeeld gebruikt om uw taalvoorkeuren of inloggegevens te onthouden.","pc_minfo_text_1":"Meer informatie","pc_minfo_text_2":"Voor vragen in verband met ons cookiebeleid en uw keuzes kan u ons contacteren.","pc_minfo_text_3":"Voor meer informatie, bezoek ons <a href=\'%s\' target=\'_blank\'>Privacybeleid</a>.","pc_save":"Sla mijn voorkeuren op","pc_sncssr_text_1":"Strikt noodzakelijke cookies","pc_sncssr_text_2":"Deze cookies zijn essentieel om u de diensten aan te bieden die beschikbaar zijn via onze website en om u in staat te stellen bepaalde functies van onze website te gebruiken.","pc_sncssr_text_3":"Zonder deze cookies kunnen we u bepaalde diensten op onze website niet aanbieden.","pc_title":"Cookie instellingen","pc_trck_text_1":"Tracking- en prestatie cookies","pc_trck_text_2":"Deze cookies worden gebruikt om informatie te verzamelen om het verkeer naar onze website te analyseren en hoe bezoekers onze website gebruiken.","pc_trck_text_3":"Deze cookies kunnen gegevens zoals hoe lang u op de website doorbrengt of de pagina\'s die u bezoekt, bijhouden. Dit helpt ons te begrijpen hoe we onze website voor u kunnen verbeteren.","pc_trck_text_4":"Individuele bezoekers kunnen niet geïdentificeerd worden aan hand van de informatie in deze cookies.","pc_trgt_text_1":"Targeting- en advertentie cookies","pc_trgt_text_2":"Deze cookies worden gebruikt om advertenties weer te geven die u waarschijnlijk interesseren op basis van uw surfgedrag.","pc_trgt_text_3":"Deze cookies, zoals aangeboden op basis van de inhoud van onze site en/of reclame aanbieders, kunnen informatie die ze van onze website hebben verzameld combineren met andere informatie die ze onafhankelijk hebben verzameld met betrekking tot de activiteiten van uw webbrowser via hun netwerk van websites.","pc_trgt_text_4":"Als u ervoor kiest deze targeting- of advertentiecookies te verwijderen of uit te schakelen, ziet u nog steeds advertenties, maar deze zijn mogelijk niet relevant voor u.","pc_yprivacy_text_1":"Uw privacy is belangrijk voor ons","pc_yprivacy_text_2":"Cookies zijn kleine tekstbestanden die bij het bezoeken van een website op uw computer worden opgeslagen. We gebruiken cookies voor verschillende doeleinden en om uw online ervaring op onze website te verbeteren (bijvoorbeeld om de inloggegevens voor uw account te onthouden).","pc_yprivacy_text_3":"U kunt uw voorkeuren wijzigen en bepaalde soorten cookies weigeren die op uw computer worden opgeslagen tijdens het browsen op onze website. U kunt ook alle cookies verwijderen die al op uw computer zijn opgeslagen, maar houd er rekening mee dat het verwijderen van cookies ertoe kan leiden dat u delen van onze website niet kunt gebruiken.","pc_yprivacy_title":"Jouw privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacybeleid</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Ativo","always_active":"Sempre ativo","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inativo","nb_agree":"Concordo","nb_changep":"Alterar as minhas preferências","nb_ok":"OK","nb_reject":"Eu recuso","nb_text":"Utilizamos cookies e outras tecnologias de medição para melhorar a sua experiência de navegação no nosso site, de forma a mostrar conteúdo personalizado, anúncios direcionados, analisar o tráfego do site e entender de onde vêm os visitantes.","nb_title":"O nosso site usa cookies","pc_fnct_text_1":"Cookies de funcionalidade","pc_fnct_text_2":"Estes cookies são usados ​​para fornecer uma experiência mais personalizada no nosso site e para lembrar as escolhas que faz ao usar o nosso site.","pc_fnct_text_3":"Por exemplo, podemos usar cookies de funcionalidade para se lembrar das suas preferências de idioma e/ ou os seus detalhes de login.","pc_minfo_text_1":"Mais Informações","pc_minfo_text_2":"Para qualquer dúvida sobre a nossa política de cookies e as suas opções, entre em contato connosco.","pc_minfo_text_3":"Para obter mais detalhes, por favor consulte a nossa <a href=\'%s\' target=\'_blank\'>Política de Privacidade</a>.","pc_save":"Guardar as minhas preferências","pc_sncssr_text_1":"Cookies estritamente necessários","pc_sncssr_text_2":"Estes cookies são essenciais para fornecer serviços disponíveis no nosso site e permitir que possa usar determinados recursos no nosso site.","pc_sncssr_text_3":"Sem estes cookies, não podemos fornecer certos serviços no nosso site.","pc_title":"Centro de preferências de cookies","pc_trck_text_1":"Cookies de medição e desempenho","pc_trck_text_2":"Estes cookies são usados ​​para coletar informações para analisar o tráfego no nosso site e entender como é que os visitantes estão a usar o nosso site.","pc_trck_text_3":"Por exemplo, estes cookies podem medir fatores como o tempo despendido no site ou as páginas visitadas, isto vai permitir entender como podemos melhorar o nosso site para os utilizadores.","pc_trck_text_4":"As informações coletadas por meio destes cookies de medição e desempenho não identificam nenhum visitante individual.","pc_trgt_text_1":"Cookies de segmentação e publicidade","pc_trgt_text_2":"Estes cookies são usados ​​para mostrar publicidade que provavelmente lhe pode interessar com base nos seus hábitos e comportamentos de navegação.","pc_trgt_text_3":"Estes cookies, servidos pelo nosso conteúdo e/ ou fornecedores de publicidade, podem combinar as informações coletadas no nosso site com outras informações coletadas independentemente relacionadas com as atividades na rede de sites do seu navegador.","pc_trgt_text_4":"Se optar por remover ou desativar estes cookies de segmentação ou publicidade, ainda verá anúncios, mas estes poderão não ser relevantes para si.","pc_yprivacy_text_1":"A sua privacidade é importante para nós","pc_yprivacy_text_2":"Cookies são pequenos arquivos de texto que são armazenados no seu computador quando visita um site. Utilizamos cookies para diversos fins e para aprimorar sua experiência no nosso site (por exemplo, para se lembrar dos detalhes de login da sua conta).","pc_yprivacy_text_3":"Pode alterar as suas preferências e recusar o armazenamento de certos tipos de cookies no seu computador enquanto navega no nosso site. Pode também remover todos os cookies já armazenados no seu computador, mas lembre-se de que a exclusão de cookies pode impedir o uso de determinadas áreas no nosso site.","pc_yprivacy_title":"A sua privacidade","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Política de Privacidade</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Päällä","always_active":"Aina päällä","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Pois päältä","nb_agree":"Hyväksyn","nb_changep":"Muuta asetuksiani","nb_ok":"OK","nb_reject":"Kieltäydyn","nb_text":"Käytämme evästeitä ja muita seurantateknologioita parantaaksemme käyttäjäkokemusta verkkosivustollamme, näyttääksemme sinulle personoituja sisältöjä ja mainoksia, analysoidaksemme verkkoliikennettä sekä lisätäksemme ymmärrystämme käyttäjiemme sijainnista.","nb_title":"Käytämme evästeitä","pc_fnct_text_1":"Toiminnallisuusevästeet","pc_fnct_text_2":"Näitä evästeitä käytetään personoidumman käyttäjäkokemuksen luomiseksi sekä valintojesi tallentamiseksi sivustollamme.","pc_fnct_text_3":"Esim. voimme käyttää toiminnallisuusevästeitä muistaaksemme kielivalintasi sekä kirjautumistietosi.","pc_minfo_text_1":"Lisätietoa","pc_minfo_text_2":"Evästeisiin liittyvissä kysymyksissä ole hyvä ja ota meihin yhteyttä.","pc_minfo_text_3":"Lue lisää <a href=\'%s\' target=\'_blank\'>Tietosuojakäytäntö</a>.","pc_save":"Tallenna asetukseni","pc_sncssr_text_1":"Tärkeät evästeet","pc_sncssr_text_2":"Nämä evästeet mahdollistavat verkkosivustomme palveluiden sekä tiettyjen ominaisuuksien käyttämisen.","pc_sncssr_text_3":"Ilman näitä evästeitä emme voi tarjota sinulle tiettyjä palveluita sivustollamme.","pc_title":"Evästeasetukset","pc_trck_text_1":"Seuranta- ja tehokkuusevästeet","pc_trck_text_2":"Näiden evästeiden avulla kerätään tietoa sivustomme liikenteestä sekä käyttötavoista.","pc_trck_text_3":"Esim. nämä evästeet voivat seurata sitä, paljonko aikaa vietät sivustollamme, mikä auttaa meitä parantamaan sivustomme käyttökokemusta jatkossa.","pc_trck_text_4":"Näiden evästeiden avulla kerätty tietoa ei voida yhdistää yksittäiseen käyttäjään.","pc_trgt_text_1":"Kohdennus- ja mainosevästeet","pc_trgt_text_2":"Näitä evästeitä käytetään näyttämään mainoksia, jotka selauskäytöksesi perusteella todennäköisesti kiinnostavat sinua.","pc_trgt_text_3":"Nämä sisältö- ja/tai mainoskumppanimme tarjoamat evästeet voivat yhdistää sivustoltamme kerättyä tietoa muilta heidän verkostoonsa kuuluvilta sivustoilta kerättyihin tietoihin.","pc_trgt_text_4":"Jos päätät poistaa tai kytkeä pois päältä nämä kohdennus- ja mainosevästeet, näet yhä mainoksia, mutta ne eivät välttämättä ole sinulle oleellisia.","pc_yprivacy_text_1":"Yksityisyytesi on meille tärkeää","pc_yprivacy_text_2":"Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteeseesi verkkosivulla vieraillessasi. Käytämme evästeitä useaan tarkoitukseen ja parantaaksesi käyttökokemustasi verkkosivustollamme (esim. muistaaksemme kirjautumistietosi).","pc_yprivacy_text_3":"Voit muuttaa asetuksiasi ja kieltää sivustoltamme tiettyjen evästetyyppien tallentamisen laitteellesi. Voit myös poistaa minkä tahansa jo tallennetun evästeen laitteeltasi, mutta huomaathan, että evästeiden poistaminen saattaa estää sinua käyttämästä osaa sivustomme sisällöstä.","pc_yprivacy_title":"Yksityisyytesi","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Tietosuojakäytäntö</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktív","always_active":"Mindig aktív","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktív","nb_agree":"Elfogadom","nb_changep":"Beállítások megváltoztatása","nb_ok":"OK","nb_reject":"Elutasítom","nb_text":"Az oldal sütiket és egyéb nyomkövető technológiákat alkalmaz, hogy javítsa a böngészési élményét, azzal hogy személyre szabott tartalmakat és célzott hirdetéseket jelenít meg, és elemzi a weboldalunk forgalmát, hogy megtudjuk honnan érkeztek a látogatóink.","nb_title":"Az oldal sütiket használ","pc_fnct_text_1":"Funkcionális sütik","pc_fnct_text_2":"Ezeket a sütiket arra használjuk, hogy személyre szabottabb élményt nyújtsunk weboldalunkon, és hogy az oldal rögzítse a webhelyünk használata során tett döntéseket.","pc_fnct_text_3":"Például arra használhatunk funkcionális sütiket, hogy emlékezzünk a nyelvi beállításokra, vagy a bejelentkezési adataira.","pc_minfo_text_1":"Egyéb információk","pc_minfo_text_2":"A sütikre vonatkozó irányelveinkkel és az Ön választásával kapcsolatosan felmerülő bármilyen kérdésével keressen meg bennünket.","pc_minfo_text_3":"Ha többet szeretne megtudni, kérjük, keresse fel a <a href=\'%s\' target=\'_blank\'>Adatvédelmi irányelvek</a>.","pc_save":"Beállítások mentése","pc_sncssr_text_1":"Feltétlenül szükséges sütik","pc_sncssr_text_2":"Ezek a sütik elengedhetetlenek a weboldalunkon elérhető szolgáltatások nyújtásához, valamint weboldalunk bizonyos funkcióinak használatához.","pc_sncssr_text_3":"A feltétlenül szükséges sütik használata nélkül weboldalunkon nem tudunk bizonyos szolgáltatásokat nyújtani Önnek.","pc_title":"Sütikre beállítási központ","pc_trck_text_1":"Követési és teljesítménnyel kapcsolatos sütik","pc_trck_text_2":"Ezeket a sütiket arra használjuk, hogy információkat gyűjtsünk weboldalunk forgalmáról és látogatóiról, webhelyünk használatának elemzéséhez.","pc_trck_text_3":"Például ezek a sütik nyomon követhetik a webhelyen töltött időt vagy a meglátogatott oldalakat, amely segít megérteni, hogyan javíthatjuk webhelyünket az Ön nagyobb megelégedettségére.","pc_trck_text_4":"Ezekkel a nyomkövető és teljesítménnyel kapcsolatos sütikkel összegyűjtött információk egyetlen személyt sem azonosítanak.","pc_trgt_text_1":"Célirányos és hirdetési sütik","pc_trgt_text_2":"Ezeket a sütiket olyan hirdetések megjelenítésére használjuk, amelyek valószínűleg érdekli Önt a böngészési szokásai alapján.","pc_trgt_text_3":"Ezek a sütik, amelyeket a tartalom és / vagy a reklámszolgáltatók szolgáltatnak, egyesíthetik a weboldalunktól gyűjtött információkat más információkkal, amelyeket önállóan összegyűjtöttek az Ön böngészőjének tevékenységeivel kapcsolatban a webhely-hálózaton keresztül.","pc_trgt_text_4":"Ha Ön úgy dönt, hogy eltávolítja vagy letiltja ezeket a célirányos vagy hirdetési sütiket, akkor is látni fogja a hirdetéseket, de lehet, hogy nem lesznek relevánsak az Ön számára.","pc_yprivacy_text_1":"Az ön adatainak védelem fontos számunkra","pc_yprivacy_text_2":"A sütik egészen kicsi szöveges fájlok, amelyeket a számítógépén tárolnak, amikor meglátogat egy weboldalt. Sütiket használunk különféle célokra, és weboldalunkon az online élmény fokozása érdekében (például a fiókjának bejelentkezési adatainak megjegyzésére).","pc_yprivacy_text_3":"Webhelyünk böngészése közben megváltoztathatja a beállításait, és elutasíthatja a számítógépén tárolni kívánt bizonyos típusú sütik használatát. A számítógépen már tárolt sütiket eltávolíthatja, de ne feledje, hogy a sütik törlése megakadályozhatja weboldalunk egyes részeinek használatát.","pc_yprivacy_title":"Az ön adatai védelme","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Adatvédelmi irányelvek</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktivno","always_active":"Uvijek aktivno","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktivno","nb_agree":"Slažem se","nb_changep":"Promjeni moje postavke","nb_ok":"OK","nb_reject":"Odbijam","nb_text":"Koristimo kolačiće i druge tehnologije praćenja da bismo poboljšali vaše korisničko iskustvo na našoj web stranici, kako bismo vam prikazali personalizirani sadržaj i ciljane oglase, analizirali promet na našoj web stranici i razumjeli odakle dolaze naši posjetitelji.","nb_title":"Mi koristimo kolačiće","pc_fnct_text_1":"Kolačići funkcionalnosti","pc_fnct_text_2":"Ovi se kolačići koriste kako bi vam pružili personalizirano korisničko iskustvo na našoj web stranici i za pamćenje izbora koje napravite kada koristite našu web stranicu.","pc_fnct_text_3":"Na primjer, možemo koristiti kolačiće funkcionalnosti da bismo zapamtili vaše jezične postavke ili upamtili vaše podatke za prijavu.","pc_minfo_text_1":"Više informacija","pc_minfo_text_2":"Za sve upite vezane uz naša pravila o kolačićima i vašim izborima, molimo da nas kontaktirate.","pc_minfo_text_3":"Da bi saznali više, posjetite naša <a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>.","pc_save":"Spremi moje postavke","pc_sncssr_text_1":"Strogo potrebni kolačići","pc_sncssr_text_2":"Ovi su kolačići neophodni za pružanje usluga dostupnih putem naše web stranice i omogućavanje korištenja određenih značajki naše web stranice.","pc_sncssr_text_3":"Bez ovih kolačića ne možemo vam pružiti određene usluge na našoj web stranici.","pc_title":"Centar za postavke kolačića","pc_trck_text_1":"Kolačići za praćenje i performanse","pc_trck_text_2":"Ovi se kolačići koriste za prikupljanje podataka za analizu prometa na našoj web stranici i za informaciju kako posjetitelji koriste našu web stranicu.","pc_trck_text_3":"Na primjer, ti kolačići mogu pratiti stvari poput dugovanja na web stranici ili stranicama koje posjetite što nam pomaže da shvatimo kako možemo poboljšati vaše korisničko iskustvo na našoj web stranici.","pc_trck_text_4":"Informacije prikupljene ovim praćenjem i kolačići izvedbe ne identificiraju nijednog pojedinačnog posjetitelja.","pc_trgt_text_1":"Kolačići za ciljano oglašavanje","pc_trgt_text_2":"Ovi se kolačići koriste za prikazivanje oglasa koji bi vas mogli zanimati na temelju vaših navika pregledavanja web stranica.","pc_trgt_text_3":"Ovi kolačići, posluženi od naših pružatelja sadržaja i / ili oglašavanja, mogu kombinirati podatke koje su prikupili s naše web stranice s drugim podacima koje su neovisno prikupili, a odnose se na aktivnosti vašeg web preglednika kroz njihovu mrežu web stranica.","pc_trgt_text_4":"Ako odlučite ukloniti ili onemogućiti ove kolačiće za ciljano oglašavanje, i dalje ćete vidjeti oglase, ali oni možda nisu relevantni za vas.","pc_yprivacy_text_1":"Vaša privatnost nam je važna","pc_yprivacy_text_2":"Kolačići su vrlo male tekstualne datoteke koje se pohranjuju na vašem računalu kada posjetite web stranicu. Mi koristimo kolačiće za različite svrhe i za poboljšanje vašeg mrežnog iskustva na našoj web stranici (na primjer, za pamćenje podataka za prijavu na vaš korisnički račun).","pc_yprivacy_text_3":"Možete promijeniti svoje postavke i odbiti određene vrste kolačića koji će se pohraniti na vašem računalu tijekom pregledavanja naše web stranice. Također možete ukloniti sve kolačiće koji su već pohranjeni na vašem računalu, ali imajte na umu da vas brisanje kolačića može spriječiti da koristite dijelove naše web stranice.","pc_yprivacy_title":"Vaša privatnost","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktivní","always_active":"Vždy aktivní","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktivní","nb_agree":"Souhlasím","nb_changep":"Upravit mé předvolby","nb_ok":"OK","nb_reject":"Odmítám","nb_text":"Tyto webové stránky používají soubory cookies a další sledovací nástroje s cílem vylepšení uživatelského prostředí, zobrazení přizpůsobeného obsahu a  reklam, analýzy návštěvnosti webových stránek a zjištění zdroje návštěvnosti.","nb_title":"Používáme soubory cookies","pc_fnct_text_1":"Cookies pro funkcionality","pc_fnct_text_2":"Tyto soubory cookie se používají k tomu, aby vám na našich webových stránkách poskytovaly personalizovaný uživatelský zážitek a aby si pamatovaly vaše volby, které jste použili při používání našich webových stránek.","pc_fnct_text_3":"Můžeme například používat soubory cookie k zapamatování vašeho jazyka nebo k zapamatování vašich přihlašovacích údajů.","pc_minfo_text_1":"Další informace","pc_minfo_text_2":"V případě jakýchkoliv dotazů  ohledně našich zásad týkajících se souborů cookie a vašich možností nás prosím kontaktujte.","pc_minfo_text_3":"Pro více informací navštivte naši stránku <a href=\'%s\' target=\'_blank\'>Zásady ochrany osobních údajů</a>.","pc_save":"Uložit mé předvolby","pc_sncssr_text_1":"Bezpodmínečně nutné soubory cookies","pc_sncssr_text_2":"Tyto soubory cookies jsou nezbytné k tomu, abychom vám mohli poskytovat služby dostupné prostřednictvím našeho webu a abychom vám umožnili používat určité funkce našeho webu.","pc_sncssr_text_3":"Bez těchto cookies vám nemůžeme na naší webové stránce poskytovat určité služby.","pc_title":"Centrum předvoleb souborů Cookies","pc_trck_text_1":"Sledovací a výkonnostní soubory cookies","pc_trck_text_2":"Tyto soubory cookies se používají ke shromažďování informací pro analýzu provozu na našich webových stránkách a sledování používání našich webových stránek uživateli.","pc_trck_text_3":"Tyto soubory cookies mohou například sledovat věci jako je doba kterou na webu trávíte, nebo stránky, které navštěvujete, což nám pomáhá pochopit, jak pro vás můžeme vylepšit náš web.","pc_trck_text_4":"Informace shromážděné prostřednictvím těchto sledovacích a výkonnostních cookies neidentifikují žádné osoby.","pc_trgt_text_1":"Cookies pro cílení a reklamu","pc_trgt_text_2":"Tyto soubory cookie se používají k zobrazování reklamy, která vás pravděpodobně bude zajímat na základě vašich zvyků při procházení.","pc_trgt_text_3":"Tyto soubory cookie, jsou požadovány námi/nebo poskytovateli reklam, mohou kombinovat informace shromážděné z našich webových stránek s dalšími informacemi, které nezávisle shromáždily z jiných webových stránek, týkající se činností vašeho internetového prohlížeče v rámci jejich reklamní sítě webových stránek.","pc_trgt_text_4":"Pokud se rozhodnete tyto soubory cookies pro cílení nebo reklamu odstranit nebo deaktivovat, budou se vám reklamy stále zobrazovat, ale nemusí pro vás být nadále personalizované a relevantní.","pc_yprivacy_text_1":"Vaše soukromí je pro nás důležité","pc_yprivacy_text_2":"Soubory cookies jsou velmi malé textové soubory, které se ukládají do vašeho zařízení při navštěvování webových stránek. Soubory Cookies používáme pro různé účely a pro vylepšení vašeho online zážitku na webové stránce (například pro zapamatování přihlašovacích údajů k vašemu účtu).","pc_yprivacy_text_3":"Při procházení našich webových stránek můžete změnit své předvolby a odmítnout určité typy cookies, které se mají ukládat do vašeho počítače. Můžete také odstranit všechny soubory cookie, které jsou již uloženy ve vašem počítači, ale mějte na paměti, že odstranění souborů cookie vám může zabránit v používání částí našeho webu.","pc_yprivacy_title":"Vaše soukromí","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Zásady ochrany osobních údajů</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktiv","always_active":"Altid aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Jeg accepterer","nb_changep":"Skift indstillinger","nb_ok":"OK","nb_reject":"Jeg nægter","nb_text":"Vi bruger cookies og andre tracking teknologier for at forbedre din oplevelse på vores website, til at vise personaliseret indhold, målrettede annoncer og til at forstå hvor vores besøgende kommer fra.","nb_title":"Vi bruger cookies","pc_fnct_text_1":"Funktions cookies","pc_fnct_text_2":"Disse cookies anvendes for at kunne give dig en personaliseret oplevelse af vores hjemmeside, og for at kunne huske valg du har truffet.","pc_fnct_text_3":"Eksempelvis kan vi bruge funktions cookies til at huske sprog-indstillinger eller dine login informationer.","pc_minfo_text_1":"Mere information","pc_minfo_text_2":"Har du spørgsmål vedr. vores cookiepolitik og dine valgmuligheder, så kontakt os venligst.","pc_minfo_text_3":"For at finde ud af mere, så læs venligst vores <a href=\'%s\' target=\'_blank\'>Fortrolighedspolitik</a>.","pc_save":"Gem mine indstillinger","pc_sncssr_text_1":"Nødvendige cookies","pc_sncssr_text_2":"Disse Cookies er essentielle for at du kan bruge vores hjemmeside.","pc_sncssr_text_3":"Uden disse cookies kan vi ikke garantere vores hjemmeside virker ordentligt.","pc_title":"Cookie indstillinger","pc_trck_text_1":"Tracking og performance cookies","pc_trck_text_2":"Disse cookies anvendes til at analysere besøg på vores hjemmeside, og hvordan du bruger vores hjemmeside.","pc_trck_text_3":"Eksempelvis kan vi tracke hvor lang tid du bruger hjemmesiden, eller hvilke sider du kigger på. Det hjælper os til at forstå hvordan vi kan forbedre hjemmesiden.","pc_trck_text_4":"Informationerne kan ikke identificere dig som individ og er derfor anonyme.","pc_trgt_text_1":"Målretning og annoncecookies","pc_trgt_text_2":"Disse cookies anvendes for at kunne vise annoncer, som sandsynligvis er interessante for dig, baseret på dine browser profil.","pc_trgt_text_3":"Disse cookies, som sættes af vores indhold og/eller annoncepartnere, kan kombinere information fra flere hjemmesider i hele det netværk som partnerne styrer.","pc_trgt_text_4":"Hvis du deaktiverer denne indstilling vil du fortsat se reklamer, men de vil ikke længere være målrettet til dig.","pc_yprivacy_text_1":"Dit privatliv er vigtigt for os","pc_yprivacy_text_2":"Cookies er en lille tekstfil, som gemmes på din computer, når du besøger et website. Vi bruger cookies til en række formål, og for at forbedre din oplevelse på vores website (eksempelvis for at huske dine login oplysninger).","pc_yprivacy_text_3":"Du kan ændre dine indstillinger og afvise forskellige typer cookies, som gemmes på din computer, når du besøger vores website. Du kan også fjerne cookies som allerede er gemt på din computer, men bemærk venligst at sletning af cookies kan betyde der er dele af hjemmesiden som ikke virker.","pc_yprivacy_title":"Dit privatliv","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Fortrolighedspolitik</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Active","always_active":"Întotdeauna active","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactive","nb_agree":"Sunt de acord","nb_changep":"Vreau să schimb setările","nb_ok":"OK","nb_reject":"Refuz","nb_text":"Folosim cookie-uri și alte tehnologii de urmărire pentru a îmbunătăți experiența ta de navigare pe website-ul nostru, pentru afișa conținut și reclame personalizate, pentru a analiza traficul de pe website-ul nostru și pentru a înțelege de unde vin vizitatorii noștri.","nb_title":"Folosim cookie-uri","pc_fnct_text_1":"Cookie-uri funcționale","pc_fnct_text_2":"Aceste cookie-uri sunt folosite pentru a-ți asigura o experiență personalizată pe website-ul nostru și pentru salvarea alegerilor pe care le faci când folosești website-ul nostru.","pc_fnct_text_3":"De exemplu, putem folosi cookie-uri funcționale pentru a salva preferințele tale legate de limba website-ului nostru sau datele de logare.","pc_minfo_text_1":"Mai multe informații","pc_minfo_text_2":"Pentru mai multe informații cu privire la politica noastră de cookie-uri și preferințele tale, te rugăm să ne contactezi.","pc_minfo_text_3":"Pentru a afla mai multe, te rugăm să citești <a href=\'%s\' target=\'_blank\'>Politica noastră de confidențialitate</a>.","pc_save":"Salvează","pc_sncssr_text_1":"Cookie-uri strict necesare","pc_sncssr_text_2":"Aceste cookie-uri sunt esențiale pentru a putea beneficia de serviciile disponibile pe website-ul nostru.","pc_sncssr_text_3":"Fără aceste cookie-uri nu poți folosi anumite funcționalități ale website-ului nostru.","pc_title":"Preferințe pentru Cookie-uri","pc_trck_text_1":"Cookie-uri de analiză și performanță","pc_trck_text_2":"Acest tip de cookie-uri sunt folosite pentru a colecta informații în vederea analizării traficului pe website-ul nostru și modul în care vizitatorii noștri folosesc website-ul.","pc_trck_text_3":"De exemplu, aceste cookie-uri pot urmări cât timp petreci pe website sau paginile pe care le vizitezi, ceea ce ne ajută să înțelegem cum putem îmbunătăți website-ul pentru tine.","pc_trck_text_4":"Informațiile astfel colectate nu identifică individual vizitatorii.","pc_trgt_text_1":"Cookie-uri pentru marketing și publicitate","pc_trgt_text_2":"Aceste cookie-uri sunt folosite pentru a-ți afișa reclame cât mai pe interesul tău, în funcție de obiceiurile tale de navigare.","pc_trgt_text_3":"Aceste cookie-uri, așa cum sunt afișate de furnizori noștri de conținut și/sau publicitate, pot combina informații de pe website-ul nostru cu alte informații pe care furnizori noștri le-au colectat în mod independent cu privire la activitatea ta în rețeaua lor de website-uri.","pc_trgt_text_4":"Dacă alegi să ștergi sau să dezactivezi aceste cookie-uri tot vei vedea reclame, dar se poate ca aceste reclame să nu fie relevante pentru tine.","pc_yprivacy_text_1":"Confidențialitatea ta este importantă pentru noi","pc_yprivacy_text_2":"Cookie-urile sunt fișiere text foarte mici ce sunt salvate în browser-ul tău atunci când vizitezi un website. Folosim cookie-uri pentru mai multe scopuri, dar și pentru a îți oferi cea mai bună experiență de utilizare posibilă (de exemplu, să reținem datele tale de logare în cont).","pc_yprivacy_text_3":"Îți poți modifica preferințele și poți refuza ca anumite tipuri de cookie-uri să nu fie salvate în browser în timp ce navigezi pe website-ul nostru. Deasemenea poți șterge cookie-urile salvate deja în browser, dar reține că este posibil să nu poți folosi anumite părți ale website-ul nostru în acest caz.","pc_yprivacy_title":"Confidențialitatea ta","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politica noastră de confidențialitate</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktívne","always_active":"Vždy aktívne","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktívne","nb_agree":"Súhlasím","nb_changep":"Zmeniť moje nastavenia","nb_ok":"OK","nb_reject":"Odmietam","nb_text":"Súbory cookie a ďalšie technológie sledovania používame na zlepšenie vášho zážitku z prehliadania našich webových stránok, na to, aby sme vám zobrazovali prispôsobený obsah a cielené reklamy, na analýzu návštevnosti našich webových stránok a na pochopenie toho, odkiaľ naši návštevníci prichádzajú.","nb_title":"Používame cookies","pc_fnct_text_1":"Funkčné cookies","pc_fnct_text_2":"Tieto súbory cookie sa používajú na to, aby vám poskytli osobnejšie prostredie na našej webovej stránke, a na zapamätanie si rozhodnutí, ktoré urobíte pri používaní našej webovej stránky.","pc_fnct_text_3":"Napríklad môžeme použiť funkčné cookies na zapamätanie vašich jazykových preferencií alebo na zapamätanie vašich prihlasovacích údajov.","pc_minfo_text_1":"Viac informácií","pc_minfo_text_2":"Ak máte akékoľvek otázky týkajúce sa našich zásad týkajúcich sa súborov cookie a vašich možností, kontaktujte nás.","pc_minfo_text_3":"Ak sa chcete dozvedieť viac, navštívte <a href=\'%s\' target=\'_blank\'>Zásady ochrany osobných údajov</a>.","pc_save":"Ulož moje predvoľby","pc_sncssr_text_1":"Nevyhnutne potrebné cookies","pc_sncssr_text_2":"Tieto súbory cookie sú nevyhnutné na to, aby sme vám mohli poskytovať služby dostupné prostredníctvom našej webovej stránky a aby ste mohli používať určité funkcie našej webovej stránky.","pc_sncssr_text_3":"Bez týchto súborov cookie vám nemôžeme poskytnúť určité služby na našom webe.","pc_title":"Centrum predvolieb cookies","pc_trck_text_1":"Sledovacie a výkonnostné cookies","pc_trck_text_2":"Tieto súbory cookie sa používajú na zhromažďovanie informácií na analýzu prenosu na našom webe a toho, ako návštevníci používajú náš web.","pc_trck_text_3":"Tieto súbory cookie môžu napríklad sledovať napríklad to, koľko času strávite na webových stránkach alebo navštívených stránkach, čo nám pomáha pochopiť, ako môžeme pre vás vylepšiť naše webové stránky.","pc_trck_text_4":"Informácie zhromaždené prostredníctvom týchto súborov cookie na sledovanie a výkonnosť neidentifikujú žiadneho jednotlivého návštevníka.","pc_trgt_text_1":"Zacielenie a reklamné cookies","pc_trgt_text_2":"Tieto súbory cookie sa používajú na zobrazovanie reklám, ktoré by vás mohli pravdepodobne zaujímať na základe vašich zvykov pri prehliadaní.","pc_trgt_text_3":"Tieto súbory cookie, ktoré slúžia pre náš obsah a/alebo poskytovateľov reklám, môžu kombinovať informácie zhromaždené z našej webovej stránky s ďalšími informáciami, ktoré nezávisle zhromaždili, týkajúce sa aktivít vášho webového prehliadača v rámci ich siete webových stránok.","pc_trgt_text_4":"Ak sa rozhodnete odstrániť alebo zakázať tieto súbory cookie pre zacielenie alebo reklamu, stále sa vám budú zobrazovať reklamy, ktoré však pre vás nemusia byť relevantné.","pc_yprivacy_text_1":"Vaše súkromie je pre nás dôležité","pc_yprivacy_text_2":"Súbory cookie sú veľmi malé textové súbory, ktoré sa ukladajú do vášho počítača pri návšteve webovej stránky. Súbory cookie používame na rôzne účely a na zlepšenie vášho online zážitku z našej webovej stránky (napríklad na zapamätanie prihlasovacích údajov vášho účtu).","pc_yprivacy_text_3":"Môžete zmeniť svoje predvoľby a odmietnuť určité typy súborov cookie, ktoré sa majú ukladať vo vašom počítači pri prehliadaní našich webových stránok. Môžete tiež odstrániť všetky súbory cookie, ktoré sú už uložené vo vašom počítači, ale nezabudnite, že vymazanie súborov cookie vám môže zabrániť v používaní častí našej webovej stránky.","pc_yprivacy_title":"Vaše súkromie","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Zásady ochrany osobných údajov</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktivni","always_active":"Vedno aktivni","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktivni","nb_agree":"Se strinjam","nb_changep":"Spremeni moje nastavitve","nb_ok":"V redu","nb_reject":"Zavračam","nb_text":"Piškotke in druge sledilne tehnologije uporabljamo za izboljšanje vaše uporabniške izkušnje med brskanjem po naši spletni strani, za  prikazovanje personaliziranih vsebin oz. targetiranih oglasov, za analizo obiskov naše spletne strani in za vpogled v to, iz kje prihajajo naši gostje.","nb_title":"Uporabljamo piškotke","pc_fnct_text_1":"Funkcionalni piškotki (ang. functionality cookies)","pc_fnct_text_2":"Ti piškotki se uporabljajo za zagotavljanje bolj personalizirane izkušnje na naši spletni strani in za shranjevanje vaših odločitev ob uporabi naše spletne strani.","pc_fnct_text_3":"Funkcionalne piškotke lahko, na primer, uporabljamo za to, da si zapomnimo vaše jezikovne nastavitve oz. podatke za vpis v vaš račun.","pc_minfo_text_1":"Več informacij","pc_minfo_text_2":"Če imate kakršnakoli vprašanja v zvezi z našim pravilnikom o piškotkih in vaših izbirah, nas prosim kontaktirajte.","pc_minfo_text_3":"Za več informacij si prosim oglejte naš <a href=\'%s\' target=\'_blank\'>Politika zasebnosti</a>.","pc_save":"Shrani moje nastavitve","pc_sncssr_text_1":"Nujno potrebni piškotki (ang. strictly necessary cookies)","pc_sncssr_text_2":"Ti piškotki so ključnega pomena pri zagotavljanju storitev, ki so na voljo na naši spletni strani, in pri omogočanju določenih funkcionalnosti naše spletne strani.","pc_sncssr_text_3":"Brez teh piškotkov vam ne moremo zagotoviti določenih storitev na naši spletni strani.","pc_title":"Nastavitve piškotkov","pc_trck_text_1":"Sledilni in izvedbeni piškotki (ang. tracking and performance cookies)","pc_trck_text_2":"Ti piškotki se uporabljajo za zbiranje podatkov za analizo obiskov naše spletne strani in vpogled v to, kako gostje uporabljajo našo spletno stran.","pc_trck_text_3":"Ti piškotki lahko, na primer, spremljajo stvari kot so to, koliko časa preživite na naši spletni strani oz. katere strani obiščete, kar nam pomaga pri razumevanju, kako lahko za vas izboljšamo spletno stran.","pc_trck_text_4":"Podatki, ki jih zbirajo ti piškotki, ne identificirajo nobenega posameznega uporabnika.","pc_trgt_text_1":"Ciljni in oglaševalski piškotki (ang. targeting and advertising cookies)","pc_trgt_text_2":"Ti piškotki se uporabljajo za prikazovanje spletnih oglasov, ki vas bodo na podlagi vaših navad pri brskanju verjetno zanimali.","pc_trgt_text_3":"Ti piškotki, ki jih uporabljajo naši oglaševalski ponudniki oz. ponudniki vsebine, lahko združujejo podatke, ki so jih zbrali na naši spletni strani, z drugimi podatki, ki so jih zbrali neodvisno v povezavi z dejavnostmi vašega spletnega brskalnika na njihovi mreži spletnih mest.","pc_trgt_text_4":"Če se odločite izbrisati oz. onemogočiti te ciljne in oglaševalske piškotke, boste še vedno videvali oglase, vendar ti morda ne bodo relevantni za vas.","pc_yprivacy_text_1":"Cenimo vašo zasebnost","pc_yprivacy_text_2":"Piškotki so majhne besedilne datoteke, ki se shranijo na vašo napravo ob obisku spletne strani. Piškotke uporabljamo v več namenov, predvsem pa za izboljšanje vaše spletne izkušnje na naši strani (na primer za shranjevanje podatkov ob vpisu v vaš račun).","pc_yprivacy_text_3":"Vaše nastavitve lahko spremenite in onemogočite določenim vrstam piškotkov, da bi se shranili na vašo napravo med brskanjem po naši spletni strani. Poleg tega lahko odstranite katerekoli piškotke, ki so že shranjeni v vaši napravi, a upoštevajte, da vam bo po izbrisu piškotkov morda onemogočeno uporabljati dele naše spletne strani.","pc_yprivacy_title":"Vaša zasebnost","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politika zasebnosti</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktywne","always_active":"Zawsze aktywne","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Nieaktywne","nb_agree":"Zgoda","nb_changep":"Zmiana ustawień","nb_ok":"OK","nb_reject":"Odmawiam","nb_text":"Używamy plików cookie i innych technologii śledzenia, aby poprawić jakość przeglądania naszej witryny, wyświetlać spersonalizowane treści i reklamy, analizować ruch w naszej witrynie i wiedzieć, skąd pochodzą nasi użytkownicy.","nb_title":"Używamy plików cookie","pc_fnct_text_1":"Funkcjonalne","pc_fnct_text_2":"Te pliki cookie służą do bardziej spersonalizowanego korzystania z naszej strony internetowej i do zapamiętywania wyborów dokonywanych podczas korzystania z naszej strony internetowej.","pc_fnct_text_3":"Na przykład możemy używać funkcjonalnych plików cookie do zapamiętywania preferencji językowych lub zapamiętywania danych logowania.","pc_minfo_text_1":"Więcej informacji","pc_minfo_text_2":"W przypadku jakichkolwiek pytań dotyczących naszej polityki dotyczącej plików cookie i Twoich wyborów, skontaktuj się z nami.","pc_minfo_text_3":"Aby dowiedzieć się więcej, odwiedź naszą <a href=\'%s\' target=\'_blank\'>Polityka prywatności</a>.","pc_save":"Zapisz ustawienia","pc_sncssr_text_1":"Niezbędne","pc_sncssr_text_2":"Te pliki cookie są niezbędne do świadczenia usług dostępnych za pośrednictwem naszej strony internetowej i umożliwienia korzystania z niektórych funkcji naszej strony internetowej.","pc_sncssr_text_3":"Bez tych plików cookie nie możemy zapewnić usług na naszej stronie internetowej.","pc_title":"Centrum ustawień cookie","pc_trck_text_1":"Śledzenie i wydajność","pc_trck_text_2":"Te pliki cookie służą do zbierania informacji w celu analizy ruchu na naszej stronie internetowej i sposobu, w jaki użytkownicy korzystają z naszej strony internetowej.","pc_trck_text_3":"Na przykład te pliki cookie mogą śledzić takie rzeczy, jak czas spędzony na stronie lub odwiedzane strony, co pomaga nam zrozumieć, w jaki sposób możemy ulepszyć naszą witrynę internetową.","pc_trck_text_4":"Informacje zebrane przez te pliki nie identyfikują żadnego konkretnego użytkownika.","pc_trgt_text_1":"Targeting i reklama","pc_trgt_text_2":"Te pliki cookie służą do wyświetlania reklam, które mogą Cię zainteresować na podstawie Twoich zwyczajów przeglądania.","pc_trgt_text_3":"Pliki te tworzone przez naszych dostawców treści i/lub reklam, mogą łączyć informacje zebrane z naszej strony z innymi informacjami, które gromadzili niezależnie w związku z działaniami przeglądarki internetowej w ich sieci witryn.","pc_trgt_text_4":"Jeśli zdecydujesz się usunąć lub wyłączyć te pliki cookie, reklamy nadal będą wyświetlane, ale mogą one nie być odpowiednie dla Ciebie.","pc_yprivacy_text_1":"Twoja prywatność jest dla nas ważna","pc_yprivacy_text_2":"Pliki cookie to bardzo małe pliki tekstowe, które są tworzone i przechowywane na komputerze użytkownika podczas odwiedzania strony internetowej. Używamy plików cookie do różnych celów, w tym do ulepszania obsługi online na naszej stronie internetowej (na przykład, aby zapamiętać dane logowania do konta).","pc_yprivacy_text_3":"Możesz zmienić swoje ustawienia i odrzucić niektóre rodzaje plików cookie, które mają być przechowywane na twoim komputerze podczas przeglądania naszej strony. Możesz również usunąć wszystkie pliki cookie już zapisane na komputerze, ale pamiętaj, że usunięcie plików cookie może uniemożliwić korzystanie z części naszej strony internetowej.","pc_yprivacy_title":"Twoja prywatność","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Polityka prywatności</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktivno","always_active":"Uvek aktivno","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktivno","nb_agree":"Slažem se","nb_changep":"Promeni moja podešavanja","nb_ok":"OK","nb_reject":"Odbijam","nb_text":"Mi koristimo kolačiće i ostale tehnologije za praćenje kako bismo unapredili vašu pretragu na našem veb sajtu, prikazali personalizovani sadržaj i ciljane reklame, analizirali posete na našem sajtu i razumeli odakle dolaze naši posetioci sajta.","nb_title":"Mi koristimo kolačiće","pc_fnct_text_1":"Funkcionalni kolačići","pc_fnct_text_2":"Ovi kolačići koriste se za pružanje personalizovanijeg iskustva na našem veb sajtu i za pamćenje izbora koje pravite kada koristite naš veb sajt.","pc_fnct_text_3":"Na primer, možemo da koristimo funkcionalne kolačiće da bismo zapamtili vaše jezičke postavke ili vaše podatke za prijavu.","pc_minfo_text_1":"Više informacija","pc_minfo_text_2":"Za bilo koja pitanja vezana za našu politiku o kolačićma i vašim izborima, molimo vas kontaktirajte nas.","pc_minfo_text_3":"Da saznate više, pogledajte našu <a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>.","pc_save":"Sačuvaj moja podešavanja","pc_sncssr_text_1":"Obavezni kolačići","pc_sncssr_text_2":"Ovi kolačići su neophodni za pružanje usluga dostupnih putem našeg veb sajta i za omogućavanje korišćenja određenih funkcija našeg veb sajta.","pc_sncssr_text_3":"Bez ovih kolačića ne možemo vam pružiti određene usluge na našem veb sajtu.","pc_title":"Centar za podešavanje kolačića","pc_trck_text_1":"Kolačići za praćenje i performanse","pc_trck_text_2":"Ovi kolačići koriste se za prikupljanje informacija za analizu saobraćaja na našem veb sajtu i kako posetioci koriste naš veb sajt.","pc_trck_text_3":"Na primer, ovi kolačići mogu pratiti stvari poput vremena koliko provodite na veb stranici ili stranicama koje posećujete što nam pomaže da shvatimo kako možemo da poboljšamo naš veb sajt.","pc_trck_text_4":"Informacije prikupljene ovim kolačićima za praćenje i performanse ne identifikuju nijednog pojedinačnog posetioca.","pc_trgt_text_1":"Kolačići za ciljanje i oglašavanje","pc_trgt_text_2":"Ovi kolačići koriste se za prikazivanje reklama koje će vas verovatno zanimati na osnovu vaših navika pregledanja.","pc_trgt_text_3":"Ovi kolačići, opsluženi od strane naših dobavljača sadržaja i / ili oglašavanja, mogu kombinovati informacije koje su sakupili sa našeg veb sajta sa drugim informacijama koje su nezavisno prikupili u vezi sa aktivnostima vašeg veb pretraživača kroz mrežu njihovih veb sajtova.","pc_trgt_text_4":"Ako odlučite da uklonite ili onemogućite ove ciljane ili reklamne kolačiće i dalje ćete videti reklame, ali one možda neće biti relevantne za vas.","pc_yprivacy_text_1":"Vaša privatnost je važna za nas","pc_yprivacy_text_2":"Kolačići su veoma mali tekstualni fajlovi koji su sačuvani na vašem računaru kada posetite veb sajt. Mi koristimo kolačiće za različite svrhe i kako bi unapredili vaše onlajn iskustvo na našem veb sajtu (na primer, kako bi zapamtili vaše pristupne podatke).","pc_yprivacy_text_3":"Vi možete promeniti vaša podešavanja i odbiti određenu vrstu kolačića koji će biti sačuvani na vašem računaru dok pregledate naš veb sajt. Takođe možete izbrisati bilo koje kolačiće koji su već sačuvani u vašem računaru, ali imajte na umu da brisanjem kolačića možete onemogućiti pristup nekim delovima našeg veb sajta.","pc_yprivacy_title":"Vaša privatnost","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktiivne","always_active":"Alati aktiivne","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Mitteaktiivne","nb_agree":"Nõustun","nb_changep":"Muuda minu eelistusi","nb_ok":"OK","nb_reject":"Keeldun","nb_text":"Me kasutame küpsiseid ja muid jälgimistehnoloogiaid, et parandada teie sirvimiskogemust meie veebisaidil, näidata teile isikupärastatud sisu ja sihitud reklaame, analüüsida meie veebisaidi liiklust ning mõista, kust meie külastajad tulevad.","nb_title":"Me kasutame küpsiseid","pc_fnct_text_1":"Funktsionaalsusküpsised","pc_fnct_text_2":"Neid küpsiseid kasutatakse selleks, et pakkuda teile isikupärastatumat kogemust meie veebisaidil ja jätta meelde valikuid, mida teete meie veebisaiti kasutades.","pc_fnct_text_3":"Näiteks võime kasutada funktsionaalsusküpsiseid, et meelde jätta teie keele-eelistused või meelde tuletada teie sisselogimisandmed.","pc_minfo_text_1":"Rohkem infot","pc_minfo_text_2":"Küsimuste korral meie küpsistepoliitika ja teie valikute kohta võtke palun meiega ühendust.","pc_minfo_text_3":"Lisainfo saamiseks, külastage palun meie <a href=\'%s\' target=\'_blank\'>Privaatsuspoliitikat</a>.","pc_save":"Salvesta minu eelistused","pc_sncssr_text_1":"Ainult hädavajalikud küpsised","pc_sncssr_text_2":"Need küpsised on vajalikud selleks, et pakkuda teile meie veebisaidi kaudu kättesaadavaid teenuseid ja võimaldada teil kasutada meie veebisaidi teatavaid funktsioone.","pc_sncssr_text_3":"Ilma nende küpsisteta ei saa me pakkuda teatud teenuseid meie veebisaidil.","pc_title":"Küpsiste eelistuste haldus","pc_trck_text_1":"Jälgimisküpsised","pc_trck_text_2":"Neid küpsiseid kasutatakse teabe kogumiseks, et analüüsida meie veebisaidi külastatavust ja seda, kuidas külastajad meie veebisaiti kasutavad.","pc_trck_text_3":"Näiteks võivad need küpsised jälgida seda, kui kaua te veebisaidil viibite või milliseid lehekülgi külastate, mis aitab meil mõista, kuidas me saame teie jaoks meie veebisaiti paremaks muuta.","pc_trck_text_4":"Nende jälgimis- ja toimivusküpsiste abil kogutud teave ei tuvasta ühtegi külastajat.","pc_trgt_text_1":"Sihtimis- ja reklaamiküpsised","pc_trgt_text_2":"Neid küpsiseid kasutatakse reklaamide näitamiseks, mis teie sirvimisharjumuste põhjal teile tõenäoliselt rohkem huvi pakuvad.","pc_trgt_text_3":"Need küpsised, mida meie sisu ja/või reklaami pakkujad pakuvad, võivad kombineerida meie veebisaidilt kogutud teavet muu teabega, mida nad on iseseisvalt kogunud seoses teie veebibrauseri tegevustega nende veebisaitide võrgustikus.","pc_trgt_text_4":"Kui otsustate eemaldada või keelata need sihtimis- või reklaamiküpsised, näete ikka reklaame, kuid need ei pruugi teile asjakohased olla.","pc_yprivacy_text_1":"Teie privaatsus on meile tähtis","pc_yprivacy_text_2":"Küpsised on väga väikesed tekstifailid, mis salvestatakse teie arvutisse, kui külastate veebisaiti. Me kasutame küpsiseid mitmesugustel eesmärkidel ja et parandada teie veebikogemust meie veebisaidil (näiteks, et meelde jätta teie konto sisselogimisandmed).","pc_yprivacy_text_3":"Te saate muuta oma eelistusi ja keelduda teatud tüüpi küpsiste salvestamisest teie arvutisse meie veebisaiti sirvides. Samuti võite eemaldada kõik küpsised, mis on juba teie arvutisse salvestatud, kuid pidage meeles, et küpsiste kustutamine võib takistada teid kasutamast meie veebisaidi teatud osi.","pc_yprivacy_title":"Teie privaatsus","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privaatsuspoliitika</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Įjungta","always_active":"Visada įjungta","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Išjungta","nb_agree":"Sutinku","nb_changep":"Keisti mano pasirinkimus","nb_ok":"Gerai","nb_reject":"Aš atsisakau","nb_text":"Mes naudojame slapukus ir kitas stebėjimo technologijas, siekdami pagerinti jūsų naršymo mūsų svetainėje patirtį, parodyti jums pritaikytą turinį ir tikslinius skelbimus, išanalizuoti mūsų svetainės srautą ir suprasti, iš kur ateina mūsų lankytojai.","nb_title":"Mes naudojame slapukus","pc_fnct_text_1":"Funkcionalumo slapukai","pc_fnct_text_2":"Šie slapukai naudojami siekiant suteikti jums asmeniškesnę patirtį mūsų svetainėje ir prisiminti pasirinkimus, kuriuos atlikote, kai naudojatės mūsų svetaine.","pc_fnct_text_3":"Pvz., Mes galime naudoti funkcinius slapukus, kad prisimintume jūsų kalbos nustatymus arba prisimintume jūsų prisijungimo duomenis.","pc_minfo_text_1":"Daugiau informacijos","pc_minfo_text_2":"Dėl bet kokių klausimų, susijusių su mūsų slapukų politika ir jūsų pasirinkimais, susisiekite su mumis.","pc_minfo_text_3":"Norėdami sužinoti daugiau, susipažinkite su mūsų <a href=\'%s\' target=\'_blank\'>Privatumo politika</a>.","pc_save":"Išsaugoti mano pasirinkimus","pc_sncssr_text_1":"Privalomi slapukai","pc_sncssr_text_2":"Šie slapukai yra būtini norint suteikti jums paslaugas, pasiekiamas mūsų svetainėje, ir leisti naudotis tam tikromis mūsų svetainės funkcijomis.","pc_sncssr_text_3":"Be šių slapukų mes negalime jums suteikti tam tikrų paslaugų mūsų svetainėje.","pc_title":"Slapukų Pasirinkimo Centras","pc_trck_text_1":"Stebėjimo ir našumo slapukai","pc_trck_text_2":"Šie slapukai naudojami rinkti informaciją, siekiant analizuoti srautą į mūsų svetainę ir tai, kaip lankytojai naudojasi mūsų svetaine.","pc_trck_text_3":"Pavyzdžiui, šie slapukai gali sekti kiek laiko praleidžiate svetainėje ar lankomuose puslapiuose, o tai padeda mums suprasti, kaip galime patobulinti savo svetainę.","pc_trck_text_4":"Informacija, surinkta naudojant šiuos stebėjimo ir našumo slapukus, neatpažįsta konkretaus lankytojo.","pc_trgt_text_1":"Tiksliniai ir reklaminiai slapukai","pc_trgt_text_2":"Šie slapukai naudojami rodyti reklamą, kuri greičiausiai jus domina, atsižvelgiant į jūsų naršymo įpročius.","pc_trgt_text_3":"Šie slapukai, kuriuos teikia mūsų turinio ir (arba) reklamos teikėjai, gali apjungti informaciją, kurią jie surinko iš mūsų svetainės, su kita informacija, kurią jie rinko nepriklausomai, apie jūsų interneto naršyklės veiklą jų svetainių tinkle.","pc_trgt_text_4":"Jei nuspręsite pašalinti arba išjungti šiuos tikslinius ar reklamavimo slapukus, vis tiek pamatysite skelbimus, tačiau jie gali būti jums neaktualūs.","pc_yprivacy_text_1":"Mums rūpi jūsų privatumas","pc_yprivacy_text_2":"Slapukai yra labai maži tekstiniai failai, kurie saugomi jūsų kompiuteryje, kai apsilankote svetainėje. Mes naudojame slapukus įvairiais tikslais ir siekdami pagerinti jūsų internetinę patirtį mūsų svetainėje (pavyzdžiui, jei norite, kad būtu įsimenami jūsų prisijungimo duomenys).","pc_yprivacy_text_3":"Naršydami mūsų svetainėje galite pakeisti savo nustatymus ir atsisakyti tam tikrų tipų slapukų, kurie bus saugomi jūsų kompiuteryje. Taip pat galite pašalinti visus slapukus, jau saugomus jūsų kompiuteryje, tačiau nepamirškite, kad ištrynę slapukus galite nepilnai naudotis mūsų svetaine.","pc_yprivacy_title":"Jūsų privatumas","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privatumo politika</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktīvs","always_active":"Vienmēr aktīvs","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktīvs","nb_agree":"Es piekrītu","nb_changep":"Mainīt manas preferences","nb_ok":"OK","nb_reject":"Es noraidu","nb_text":"Mēs izmantojam sīkdatnes un citas izsekošanas tehnoloģijas, lai uzlabotu Jūsu pārlūkošanas pieredzi mūsu vietnē, parādītu Jums personalizētu saturu un mērķētas reklāmas, analizētu mūsu vietnes datplūsmu un saprastu, no kurienes nāk mūsu apmeklētāji.","nb_title":"Mēs izmantojam sīkdatnes","pc_fnct_text_1":"Funkcionalitātes sīkdatnes","pc_fnct_text_2":"Šīs sīkdatnes tiek izmantotas, lai Jūs nodrošinātu ar personalizētu pieredzi mūsu mājaslapā un lai atcerētos izvēles, kuras veicat izmantojot mūsu mājaslapu.","pc_fnct_text_3":"Piemēram, mēs varam izmantot funkcionalitātes sīkdatnes, lai atcerētos Jūsu valodas preferences vai konta pieteikšanās datus.","pc_minfo_text_1":"Vairāk informācijas","pc_minfo_text_2":"Par jautājumiem saistītiem ar mūsu sīkdatņu politiku un Jūsu izvēlēm, lūdzu, sazinieties ar mums.","pc_minfo_text_3":"Lai uzzinātu vairāk, lūdzu apmeklējiet mūsu <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"Saglabāt manas preferences","pc_sncssr_text_1":"Strikti nepieciešamās sīkdatnes","pc_sncssr_text_2":"Šīs sīkdatnes ir nepieciešamas, lai nodrošinātu Jums pakalpojumus, kas pieejami caur mūsu mājaslapu un ļautu Jums izmantot noteiktas mūsu vietnes funkcijas.","pc_sncssr_text_3":"Bez šīm sīkdatnēm, mēs nevaram Jums nodrošināt noteiktus pakalpojumus mūsu mājaslapā.","pc_title":"Sīkdatņu Preferenču Centrs","pc_trck_text_1":"Izsekošanas sīkdatnes","pc_trck_text_2":"Šīs sīkdatnes tiek izmantotas informācijas apkopošanai, lai analizētu mūsu mājaslapas datplūsmu, un kā apmeklētāji izmanto mūsu mājaslapu.","pc_trck_text_3":"Piemēram, šīs sīkdatnes var izsekot cik daudz laika Jūs pavadāt mājaslapā vai Jūsu apmeklētās lapas, kas mums palīdz saprast, kā mēs Jums varam uzlabot mūsu mājaslapu.","pc_trck_text_4":"Informācija, kas savākta, izmantojot šīs izsekošanas un veiktspējas sīkdatnes, neidentificē nevienu atsevišķu apmeklētāju.","pc_trgt_text_1":"Mērķauditorijas atlases un reklāmas sīkdatnes","pc_trgt_text_2":"Šīs sīkdatnes tiek izmantotas, lai rādītu reklāmas, kas iespējams, Jūs interesēs, pamatojoties uz Jūsu pārlūkošanas paradumiem.","pc_trgt_text_3":"Šīs sīkdatnes, ko apkalpo mūsu satura un/vai reklāmas nodrošinātāji, var apvienot informāciju , kas savākta no mūsu mājaslapas ar citu viņu rīcībā esošo informāciju, ko viņi ir neatkarīgi apkopojuši, kas saistīta ar Jūsu tīmekļa pārlūkprogrammas darbību viņu vietņu tīklā.","pc_trgt_text_4":"Ja Jūs izvēlaties noņemt vai atspējot šīs mērķauditorijas atlases vai reklāmas sīkdatnes, Jūs joprojām redzēsiet reklāmas, bet tās var nebūt Jums aktuālas.","pc_yprivacy_text_1":"Mums ir svarīgs Jūsu privātums","pc_yprivacy_text_2":"Sīkdatnes ir ļoti mazi teksta faili, kas tiek saglabāti Jūsu datorā, kad apmeklējat mājaslapu. Mēs izmantojam sīkdatnes dažādiem mērķiem, un lai uzlabotu Jūsu tiešsaistes pieredzi mūsu mājaslapā (piemēram, lai atcerētos Jūsu konta pieteikšanās datus).","pc_yprivacy_text_3":"Jūs varat mainīt savas preferences un noraidīt noteiktus sīkfailu veidus, kas saglabātos Jūsu datorā, pārlūkojot mūsu mājaslapu. Jūs varat arī noņemt sīkfailus, kas jau ir saglabāti Jūsu datorā, taču paturiet prātā, ka sīkdatņu dzēšana var liegt Jums izmantot atsevišķas daļas no mūsu mājaslapas.","pc_yprivacy_title":"Jūsu privātums","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Активно","always_active":"Всегда активно","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Неактивно","nb_agree":"Я согласен","nb_changep":"Изменить мои предпочтения","nb_ok":"Ок","nb_reject":"Я отказываюсь","nb_text":"Мы используем файлы куки и другие технологии отслеживания для улучшения вашего просмотра на нашем веб-сайте, чтобы показывать вам персонализированный контент и таргетированную рекламу, анализировать трафик нашего веб-сайта и понимать, откуда приходят наши посетители.","nb_title":"Мы используем куки","pc_fnct_text_1":"Функциональные куки","pc_fnct_text_2":"Файлы куки используются, чтобы предоставить вам более персонализированный опыт на нашем веб-сайте и запомнить выбор, который вы делаете при использовании нашего веб-сайта.","pc_fnct_text_3":"Например, мы можем использовать функциональные файлы куки, чтобы запомнить ваши языковые предпочтения или данные для входа.","pc_minfo_text_1":"Больше информации.","pc_minfo_text_2":"По любым вопросам, касающимся нашей политики в отношении файлов куки и вашего выбора, свяжитесь с нами.","pc_minfo_text_3":"Чтобы узнать больше, посетите наш сайт <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"Сохранить мои предпочтения","pc_sncssr_text_1":"Необходимые куки","pc_sncssr_text_2":"Файлы куки необходимы для предоставления вам услуг, доступных через наш веб-сайт, и для того, чтобы вы могли использовать определенные функции нашего веб-сайта.","pc_sncssr_text_3":"Без этих файлов куки мы не можем предоставлять вам определенные функции на нашем веб-сайте.","pc_title":"Центр настроек файлов куки","pc_trck_text_1":"Отслеживание куки","pc_trck_text_2":"Файлы куки используются для сбора информации для анализа трафика на наш веб-сайт и того, как посетители используют наш веб-сайт.","pc_trck_text_3":"Например, эти файлы куки могут отслеживать такие вещи, как время, которое вы проводите на веб-сайте или посещаемые вами страницы, что помогает нам понять, как мы можем улучшить наш веб-сайт для вас.","pc_trck_text_4":"Информация, собранная с помощью файлов куки для отслеживания и производительности, не идентифицирует отдельного посетителя.","pc_trgt_text_1":"Целевые и рекламные файлы куки","pc_trgt_text_2":"Эти файлы куки используются для показа рекламы, которая может быть вам интересна в зависимости от ваших привычек просмотра.","pc_trgt_text_3":"Эти файлы куки, обслуживаемые нашими поставщиками контента и / или рекламы, могут объединять информацию, собранную ими с нашего веб-сайта, с другой информацией, которую они независимо собирали относительно действий вашего браузера в их сети веб-сайтов.","pc_trgt_text_4":"Если вы решите удалить или отключить эти целевые или рекламные файлы куки, вы все равно будете видеть рекламу, но она может не иметь отношения к вам.","pc_yprivacy_text_1":"Ваша конфиденциальность важна для нас","pc_yprivacy_text_2":"Куки - это небольшие текстовые файлы, которые сохраняются на вашем компьютере, когда Вы посещаете веб-сайт. Мы используем куки для различных целей, в том числе для того, чтобы улучшить ваше пребывание на нашем веб-сайте (например, чтобы запомнить данные для входа в вашу учетную запись).","pc_yprivacy_text_3":"Вы можете изменить свои предпочтения и отказаться от сохранения определенных типов файлов cookie на вашем компьютере во время просмотра нашего веб-сайта. Вы также можете удалить любые файлы куки, уже хранящиеся на вашем компьютере, но имейте в виду, что удаление файлов cookie может помешать вам использовать некоторые части нашего веб-сайта.","pc_yprivacy_title":"Ваша конфиденциальность","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Aktiv","always_active":"Alltid aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Godta alle","nb_changep":"Endre innstillinger","nb_ok":"OK","nb_reject":"Avvis alle","nb_text":"Vi bruker informasjonskapsler og andre sporingsteknologier for å forbedre din nettleseropplevelse på nettstedet vårt, for å vise deg personlig tilpasset innhold og målrettede annonser, for å analysere nettstedstrafikken vår og for å forstå hvor våre besøkende kommer fra.","nb_title":"Vi bruker informasjonskapsler","pc_fnct_text_1":"Funksjonalitetscookies","pc_fnct_text_2":"Disse informasjonskapslene brukes til å gi deg en mer personlig opplevelse på nettstedet vårt og til å huske valg du tar når du bruker nettstedet vårt.","pc_fnct_text_3":"For eksempel kan vi bruke funksjonalitetscookies for å huske språkinnstillingene dine eller huske påloggingsinformasjonen din.","pc_minfo_text_1":"Mer informasjon","pc_minfo_text_2":"For spørsmål angående våre retningslinjer for informasjonskapsler og dine valg, vennligst kontakt oss.","pc_minfo_text_3":"For å finne ut mer, besøk vår <a href=\'%s\' target=\'_blank\'>personvernpolicy</a>.","pc_save":"Lagre mine preferanser","pc_sncssr_text_1":"Strengt nødvendige informasjonskapsler","pc_sncssr_text_2":"Disse informasjonskapslene er viktige for å gi deg tjenester tilgjengelig via nettstedet vårt og for å gjøre det mulig for deg å bruke visse funksjoner på nettstedet vårt.","pc_sncssr_text_3":"Uten disse informasjonskapslene kan vi ikke tilby deg visse tjenester på nettstedet vårt.","pc_title":"Informasjonssenter for informasjonskapsler","pc_trck_text_1":"Sporings- og ytelses-informasjonskapsler","pc_trck_text_2":"Disse informasjonskapslene brukes til å samle inn informasjon for å analysere trafikken til nettstedet vårt og hvordan besøkende bruker nettstedet vårt","pc_trck_text_3":"Disse informasjonskapslene kan for eksempel spore ting som hvor lang tid du bruker på nettstedet eller sidene du besøker, noe som hjelper oss å forstå hvordan vi kan forbedre nettstedet vårt for deg.","pc_trck_text_4":"Informasjonen som samles inn gjennom disse sporings- og ytelseskapslene, identifiserer ikke noen individuell besøkende.","pc_trgt_text_1":"Målretting og annonsering av informasjonskapsler","pc_trgt_text_2":"Disse informasjonskapslene brukes til å vise reklame som sannsynligvis vil være av interesse for deg basert på nettleservaner.","pc_trgt_text_3":"Disse informasjonskapslene, som serveres av innholds- og / eller reklameleverandører, kan kombinere informasjon de har samlet inn fra nettstedet vårt med annen informasjon de har samlet uavhengig av nettleserens aktiviteter på tvers av nettverket av nettsteder.","pc_trgt_text_4":"Hvis du velger å fjerne eller deaktivere disse målrettings- eller annonseringskapslene, vil du fremdeles se annonser, men de er kanskje ikke relevante for deg.","pc_yprivacy_text_1":"Ditt personvern er viktig for oss","pc_yprivacy_text_2":"Informasjonskapsler er veldig små tekstfiler som lagres på datamaskinen din når du besøker et nettsted. Vi bruker informasjonskapsler for en rekke formål og for å forbedre din online opplevelse på nettstedet vårt (for eksempel for å huske påloggingsinformasjonen din).","pc_yprivacy_text_3":"Du kan endre innstillingene dine og avvise visse typer informasjonskapsler som skal lagres på datamaskinen din mens du surfer på nettstedet vårt. Du kan også fjerne alle informasjonskapsler som allerede er lagret på datamaskinen din, men husk at sletting av informasjonskapsler kan forhindre deg i å bruke deler av nettstedet vårt.","pc_yprivacy_title":"Ditt personvern","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Personvernpolicy</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"В действие са бисквитките","always_active":"Винаги в действие са бисквитките","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Неактивни бисквитки","nb_agree":"Съгласен съм","nb_changep":"Промяна на предпочитанията ми","nb_ok":"Добре","nb_reject":"Аз отказвам","nb_text":"Ние използваме бисквитки и други, проследяващи, технологии, за да подобрим сърфирането ви в нашия сайт, като ви покажем персонализирано съдържание и реклами, да анализираме трафика на нашия сайт и да разберем откъде идват нашите посетители.","nb_title":"Ние използваме бисквитки","pc_fnct_text_1":"Функционални бисквитки","pc_fnct_text_2":"Тези бисквитки се използват, за да ви осигурят още по-персонализирано изживяване на нашия уебсайт и да бъдат запомнени изборите, които сте направили, когато използвахте нашия уебсайт.","pc_fnct_text_3":"Например: може да използваме функционални бисквитки, за да запомним предпочитания ви език или да запомним детайли по влизането ви в уебсайта.","pc_minfo_text_1":"Още информация","pc_minfo_text_2":"За всякакви въпроси във връзка с нашата политика за бисквитките и вашите избори, моля, свържете се с нас.","pc_minfo_text_3":"За да научите повече, моля, посетете нашата <a href=\'%s\' target=\'_blank\'>Страница за поверителност</a>.","pc_save":"Запази предпочитанията ми","pc_sncssr_text_1":"Строго задължителни бисквитки","pc_sncssr_text_2":"Тези бисквитки са съществен елемент, който осигурява услуги, достъпни чрез нашия уебсайт и дават възможност за използване на определени функции на нашия уебсайт.","pc_sncssr_text_3":"Без тези бисквитки не можем да ви доставим определени услуги на нашия уебсайт.","pc_title":"Център за настройка на бисквитки","pc_trck_text_1":"Бисквитки за проследяване и за производителност","pc_trck_text_2":"Тези бисквитки се използват за събиране на информация за анализ на трафика към нашия уебсайт и как посетителите използват нашия уебсайт.","pc_trck_text_3":"Например, тези бисквитки могат да проследяват неща като колко време прекарвате на уебсайта или на посещаваните от вас страници, което ни помага да разберем как можем да подобрим нашия сайт за вас.","pc_trck_text_4":"Информацията, събрана чрез тези бисквитки за проследяване и производителност, не идентифицира всеки отделен посетител.","pc_trgt_text_1":"Насочване и рекламни бисквитки","pc_trgt_text_2":"Тези бисквитки се използват за показване на реклама, която вероятно ще ви заинтересова въз основа на навиците ви за сърфиране.","pc_trgt_text_3":"Тези бисквитки, обслужвани от нашите доставчици на съдържание и / или реклама, могат да комбинират информацията, която са събрали от нашия уебсайт, с друга информация, която са събрали независимо, свързана с дейностите на вашия уеб браузър в тяхната мрежа от уебсайтове.","pc_trgt_text_4":"Ако решите да премахнете или деактивирате тези бисквитки за определени потребителски групи или реклама, пак ще видите реклами, но те може да не са от подходящи за вас.","pc_yprivacy_text_1":"Вашата поверителност е важна за нас","pc_yprivacy_text_2":"Бисквитките са много малки текстови файлове, които се съхраняват на вашия компютър, когато посетите уебсайт. Ние използваме бисквитки за множество от цели и да подобрим сърфирането ви из нашия сайт (например: за да запомним детайлите на вашия акаунт за влизане).","pc_yprivacy_text_3":"Можете да промените предпочитанията си и да откажете определени видове бисквитки, които да се съхраняват на вашия компютър, докато сърфирате в нашия уебсайт. Можете също да премахнете някои бисквитки, които вече са запазени на вашия компютър, но имайте предвид, че изтриването на бисквитки може да ви попречи да използвате части от нашия уебсайт.","pc_yprivacy_title":"Вашата поверителност","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Страница за поверителност</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Ενεργό","always_active":"Πάντα ενεργό","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Ανενεργό","nb_agree":"Συμφωνώ","nb_changep":"Αλλαγή των προτιμήσεών μου","nb_ok":"OK","nb_reject":"Αρνούμαι","nb_text":"Χρησιμοποιούμε cookies και άλλες τεχνολογίες εντοπισμού για την βελτίωση της εμπειρίας περιήγησης στην ιστοσελίδα μας, για την εξατομίκευση περιεχομένου και διαφημίσεων, την παροχή λειτουργιών κοινωνικών μέσων και την ανάλυση της επισκεψιμότητάς μας.","nb_title":"Αυτή η ιστοσελίδα χρησιμοποιεί cookies","pc_fnct_text_1":"Cookies Λειτουργικότητας","pc_fnct_text_2":"Αυτά τα cookies χρησιμοποιούνται για να σας παρέχουν μία πιο προσωποποιημένη εμπειρία στην ιστοσελίδα μας και για να θυμούνται επιλογές που κάνετε όταν χρησιμοποιείτε την ιστοσελίδα μας.","pc_fnct_text_3":"Για παράδειγμα, μπορεί να χρησιμοποιήσουμε cookies λειτουργικότητας για να θυμόμαστε την επιλογή γλώσσας ή τα στοιχεία εισόδου σας.","pc_minfo_text_1":"Περισσότερες πληροφορίες","pc_minfo_text_2":"Για οποιαδήποτε απορία σε σχέση με την πολιτική μας σχετικά με τα cookies και τις επιλογές σας, παρακαλούμε να έρθετε σε επαφή μαζί μας.","pc_minfo_text_3":"Για να μάθετε περισσότερα, παρακαλούμε επισκεφθείτε την σελίδα περί <a href=\'%s\' target=\'_blank\'>Πολιτική απορρήτου</a>.","pc_save":"Αποθήκευση των προτιμήσεών μου","pc_sncssr_text_1":"Άκρως απαραίτητα cookies","pc_sncssr_text_2":"Τα απαραίτητα cookies βοηθούν στο να γίνει χρηστική μία ιστοσελίδα, επιτρέποντας βασικές λειτουργίες όπως την πλοήγηση και την πρόσβαση σε ασφαλείς περιοχές της ιστοσελίδας.","pc_sncssr_text_3":"Η ιστοσελίδα δεν μπορεί να λειτουργήσει σωστά χωρίς αυτά τα cookies.","pc_title":"Κέντρο Προτιμήσεων Cookies","pc_trck_text_1":"Cookies εντοπισμού και αποδοτικότητας","pc_trck_text_2":"Αυτά τα cookies χρησιμοποιούνται για να συλλέγουν πληροφορίες σχετικές με την ανάλυση της επισκεψιμότητας της ιστοσελίδας μας και με το πώς οι χρήστες την χρησιμοποιούν.","pc_trck_text_3":"Για παράδειγμα, αυτά τα cookies μπορεί να εντοπίσουν πόσο χρόνο αφιερώνετε στην ιστοσελίδα μας ή ποιες σελίδες της επισκέπτεστε, πράγμα που μας βοηθάει να καταλάβουμε πώς να βελτιώσουμε την ιστοσελίδα μας.","pc_trck_text_4":"Οι πληροφορίες που συλλέγονται μέσω αυτών των cookies δεν αναγνωρίζουν μεμονωμένους χρήστες.","pc_trgt_text_1":"Cookies εξατομικευμένου περιεχομένου και διαφημίσεων","pc_trgt_text_2":"Αυτά τα cookies χρησιμοποιούνται για να δείχνουν διαφημίσεις που μπορεί να σας ενδιαφέρουν με βάση τις συνήθειες περιήγησής σας στο Διαδίκτυο.","pc_trgt_text_3":"Αυτά τα cookies, παρέχονται από τους παρόχους περιεχομένου ή/και διαφημίσεων, μπορεί να συνδυάζουν πληροφορίες που συλλέγουν από την ιστοσελίδα μας με άλλες που έχουν ανεξάρτητα συλλέξει από άλλα δίκτυα ή ιστοσελίδες σχετικά με τις δραστηριότητές σας στον φυλλομετρητή σας.","pc_trgt_text_4":"Εάν επιλέξετε να αφαιρέσετε ή να απενεργοποιήσετε αυτά τα cookies, θα συνεχίσετε να βλέπετε διαφημίσεις, αλλά αυτές μπορεί να μην είναι πλέον σχετικές με τα ενδιαφέροντά σας.","pc_yprivacy_text_1":"Η ιδιωτικότητά σας είναι σημαντική για εμάς","pc_yprivacy_text_2":"Τα cookies είναι πολύ μικρά αρχεία κειμένου που αποθηκεύονται στον υπολογιστή σας όταν επισκέπτεστε μια ιστοσελίδα. Χρησιμοποιούμε cookies για διάφορους λόγους και για να βελτιώσουμε την διαδικτυακή σας εμπειρία στην ιστοσελίδα μας (π.χ., για υπενθύμιση των στοιχείων πρόσβασής σας στην ιστοσελίδα).","pc_yprivacy_text_3":"Μπορείτε να αλλάξετε τις προτιμήσεις σας και να μην επιτρέψετε σε κάποιους τύπους cookies να αποθηκευτούν στον υπολογιστή σας όσο περιηγείστε στην ιστοσελίδα μας. Μπορείτε επίσης να διαγράψετε οποιαδήποτε cookies είναι ήδη αποθηκευμένα στον υπολογιστή σας, αλλά να έχετε υπόψιν ότι διαγράφοντας cookies μπορεί να σας αποτρέψει από το να χρησιμοποιήσετε μέρη της ιστοσελίδας μας.","pc_yprivacy_title":"Η ιδιωτικότητά σας","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Πολιτική απορρήτου</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"פעיל","always_active":"תמיד פעיל","impressum":"<a href=\'%s\' target=\'_blank\'>רושם</a>","inactive":"לא פעיל","nb_agree":"אני מסכים/ה","nb_changep":"שנה את ההגדרות שלי","nb_ok":"אוקיי","nb_reject":"אני מסרב/ת","nb_text":"אנו משתמשים בעוגיות ובטכנולוגיות מעקב אחרות כדי לשפר את חווית הגלישה שלך באתר האינטרנט שלנו, כדי להציג לך תוכן מותאם אישית ומודעות ממוקדות, לנתח את התנועה באתר שלנו ולהבין מהיכן מגיעים המבקרים שלנו.","nb_title":"אנו משתמשים בעוגיות","pc_fnct_text_1":"עוגיות פונקציונליות","pc_fnct_text_2":"עוגיות אלה משמשות כדי לספק לך חוויה מותאמת אישית יותר באתר האינטרנט שלנו וכדי לזכור בחירות שאתה עושה כשאתה משתמש באתר שלנו.","pc_fnct_text_3":"לדוגמה, אנו עשויים להשתמש בעוגיות פונקציונליות כדי לזכור את העדפות השפה שלך או לזכור את פרטי ההתחברות שלך.","pc_minfo_text_1":"מידע נוסף","pc_minfo_text_2":"לכל שאלה בנוגע למדיניות שלנו בנושא קובצי עוגיות והבחירות שלך, אנא צור איתנו קשר.","pc_minfo_text_3":"למידע נוסף, בקר ב<a href=\'%s\' target=\'_blank\'>מדיניות הפרטיות</a> שלנו.","pc_save":"שמור את ההעדפות שלי","pc_sncssr_text_1":"עוגיות נחוצות בלבד","pc_sncssr_text_2":"עוגיות אלו חיוניות כדי לספק לך שירותים הזמינים דרך האתר שלנו וכדי לאפשר לך להשתמש בתכונות מסוימות של האתר שלנו.","pc_sncssr_text_3":"ללא עוגיות אלה, איננו יכולים לספק לך שירותים מסוימים באתר שלנו.","pc_title":"מרכז העדפות עוגיות","pc_trck_text_1":"עוגיות מעקב","pc_trck_text_2":"עוגיות אלו משמשות לאיסוף מידע כדי לנתח את התנועה לאתר שלנו וכיצד המבקרים משתמשים באתר שלנו.","pc_trck_text_3":"לדוגמה, קובצי עוגיות אלה עשויים לעקוב אחר דברים כגון משך הזמן שאתה מבלה באתר או הדפים שבהם אתה מבקר, מה שעוזר לנו להבין כיצד אנו יכולים לשפר עבורך את אתר האינטרנט שלנו.","pc_trck_text_4":"המידע שנאסף באמצעות עוגיות מעקב וביצועים אלה אינו מזהה אף מבקר בודד.","pc_trgt_text_1":"עוגיות מיקוד ופרסום","pc_trgt_text_2":"עוגיות אלו משמשות להצגת פרסומות שסביר להניח שיעניינו אותך בהתבסס על הרגלי הגלישה שלך.","pc_trgt_text_3":"קובצי עוגיות אלה, כפי שמוצגים על ידי ספקי התוכן ו/או הפרסום שלנו, עשויים לשלב מידע שהם אספו מהאתר שלנו עם מידע אחר שהם אספו באופן עצמאי הקשור לפעילויות של דפדפן האינטרנט שלך ברחבי רשת האתרים שלהם.","pc_trgt_text_4":"אם תבחר להסיר או להשבית את קובצי המיקוד או קובצי הפרסום הללו, עדיין תראה פרסומות אך ייתכן שהן לא יהיו רלוונטיות עבורך.","pc_yprivacy_text_1":"הפרטיות שלך חשובה לנו","pc_yprivacy_text_2":"קובצי עוגיות הם קבצי טקסט קטנים מאוד המאוחסנים במחשב שלך כאשר אתה מבקר באתר. אנו משתמשים בקובצי עוגיות למגוון מטרות וכדי לשפר את החוויה המקוונת שלך באתר האינטרנט שלנו (לדוגמה, כדי לזכור את פרטי הכניסה לחשבון שלך).","pc_yprivacy_text_3":"אתה יכול לשנות את ההעדפות שלך ולדחות סוגים מסוימים של עוגיות שישמרו במחשב שלך בזמן הגלישה באתר שלנו. אתה יכול גם להסיר קובצי עוגיות שכבר מאוחסנים במחשב שלך, אך זכור שמחיקת קובצי עוגיות עלולה למנוע ממך להשתמש בחלקים מהאתר שלנו.","pc_yprivacy_title":"הפרטיות שלך","privacy_policy":"<a href=\'%s\' target=\'_blank\'>מדיניות פרטיות</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Активні","always_active":"Завжди активні","impressum":"<a href=\'%s\' target=\'_blank\'>Імпресум</a>","inactive":"Неактивні","nb_agree":"Я погоджуюсь","nb_changep":"Змінити мої налаштування","nb_ok":"ОК","nb_reject":"Я відмовляюсь","nb_text":"Цей вебсайт використовує файли cookie та інші технології відстеження для покращення вашого досвіду перегляду з наступними цілями: для аналізу використання вебсайту та покращення його продуктивності, для забезпечення кращого користувацького досвіду на вебсайті, для увімкнення базової функціональності вебсайту, для показу реклами, яка буде більш релевантною для вас, для вимірювання вашого інтересу до наших продуктів та послуг і персоналізації маркетингових взаємодій.","nb_title":"Ми використовуємо файли cookie","pc_fnct_text_1":"Файли cookie для функціональності","pc_fnct_text_2":"Ці файли cookie використовуються для надання вам більш персоналізованого досвіду на нашому вебсайті та для запам\'ятовування виборів, які ви робите під час користування нашим сайтом.","pc_fnct_text_3":"Наприклад, ми можемо використовувати функціональні файли cookie, щоб запам\'ятати ваші мовні налаштування або деталі входу в систему.","pc_minfo_text_1":"Більше інформації","pc_minfo_text_2":"Якщо у вас є питання щодо нашої політики використання файлів cookie та ваших налаштувань, будь ласка, зв\'яжіться з нами.","pc_minfo_text_3":"Щоб дізнатися більше, будь ласка, відвідайте нашу <a href=\'%s\' target=\'_blank\'>Політику конфіденційності</a>.","pc_save":"Зберегти налаштування","pc_sncssr_text_1":"Строго необхідні файли cookie","pc_sncssr_text_2":"Ці файли cookie є необхідними для надання вам послуг через наш вебсайт і для того, щоб ви могли використовувати певні функції нашого вебсайту.","pc_sncssr_text_3":"Без цих файлів cookie ми не зможемо надати вам певні послуги на нашому вебсайті.","pc_title":"Центр налаштувань файлів cookie","pc_trck_text_1":"Файли cookie для відстеження","pc_trck_text_2":"Ці файли cookie використовуються для збору інформації для аналізу трафіку нашого вебсайту та того, як відвідувачі використовують наш вебсайт.","pc_trck_text_3":"Наприклад, ці файли cookie можуть відстежувати час, проведений на вебсайті, або сторінки, які ви відвідуєте, що допомагає нам зрозуміти, як ми можемо покращити наш сайт для вас.","pc_trck_text_4":"Інформація, зібрана за допомогою цих файлів cookie для відстеження та продуктивності, не ідентифікує жодного окремого відвідувача.","pc_trgt_text_1":"Файли cookie для таргетингу та реклами","pc_trgt_text_2":"Ці файли cookie використовуються для показу реклами, яка ймовірно зацікавить вас на основі ваших звичок перегляду.","pc_trgt_text_3":"Ці файли cookie, надані нашими постачальниками контенту та/або реклами, можуть об\'єднувати інформацію, зібрану з нашого вебсайту, з іншою інформацією, яку вони незалежно зібрали стосовно діяльності вашого веббраузера в їхній мережі вебсайтів.","pc_trgt_text_4":"Якщо ви вирішите видалити або вимкнути ці файли cookie для таргетингу або реклами, ви все одно будете бачити рекламу, але вона може бути не релевантною для вас.","pc_yprivacy_text_1":"Ваша конфіденційність важлива для нас","pc_yprivacy_text_2":"Файли cookie — це дуже маленькі текстові файли, які зберігаються на вашому комп\'ютері під час відвідування вебсайту. Ми використовуємо файли cookie для різних цілей, в тому числі для покращення вашого онлайн-досвіду на нашому вебсайті (наприклад, для запам\'ятовування ваших облікових даних для входу).","pc_yprivacy_text_3":"Ви можете змінити свої налаштування та відхилити певні типи файлів cookie, які будуть зберігатися на вашому комп\'ютері під час перегляду нашого вебсайту. Ви також можете видалити будь-які файли cookie, які вже зберігаються на вашому комп\'ютері, але пам\'ятайте, що видалення файлів cookie може завадити вам користуватися деякими частинами нашого вебсайту.","pc_yprivacy_title":"Ваша конфіденційність","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Політика конфіденційності</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Активно","always_active":"Секогаш активно","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Неактивно","nb_agree":"Се согласувам","nb_changep":"Промени ги моите преференции","nb_ok":"Се согласувам","nb_reject":"Одбивам","nb_text":"Ние користиме колачиња и други технологии за следење за да го подобриме вашето искуство со прелистувањето на нашата веб страна, за да ви прикажеме персонализирана содржина и таргетирани реклами, да го анализираме сообраќајот на нашата веб страна и да разбереме од каде доаѓаат нашите посетители.","nb_title":"Ние користиме колачиња","pc_fnct_text_1":"Колачиња за функционалност","pc_fnct_text_2":"Овие колачиња се користат за да ви овозможат поперсонализирано искуство на нашата веб страна и да ги запомнат изборите што ги правите кога ја користите нашата веб страна.","pc_fnct_text_3":"На пример, може да користиме функционални колачиња за да ги запомниме вашите јазични преференции или да ги запомниме вашите детали за најавување.","pc_minfo_text_1":"Повеќе информации","pc_minfo_text_2":"За било какви прашања во врска со нашата политика за колачиња и вашиот избор, ве молиме контактирајте не.","pc_minfo_text_3":"За да дознаете повеќе, ве молиме посетете ја нашата <a href=\'%s\' target=\'_blank\'>Политика за Приватност</a>.","pc_save":"Зачувај ги моите преференции","pc_sncssr_text_1":"Строго неопходни колачиња","pc_sncssr_text_2":"Овие колачиња се од суштинско значење за да ви овозможат услуги достапни преку нашата веб страна, и да ви овозможат да користите одредени функции на нашата веб страна.","pc_sncssr_text_3":"Без овие колачиња, ние не можеме да ви обезбедиме одредени услуги на нашата веб страна.","pc_title":"Центар за преференци за колачиња","pc_trck_text_1":"Колачиња за следење","pc_trck_text_2":"Овие колачиња се користат за собирање информации за анализа на сообраќајот кон нашата веб страна, и за тоа како посетителите ја користат нашата веб страна.","pc_trck_text_3":"Овие колачиња може да следат работи како на пример, колку време поминувате на веб страната, или страниците што ги посетувате што ни помага да разбереме како можеме да ја подобриме нашата веб страна за вас.","pc_trck_text_4":"Информациите собрани преку овие колачиња за следење и перформанси не идентификуваат поединечни посетители.","pc_trgt_text_1":"Колачиња за таргетирање и рекламирање","pc_trgt_text_2":"Овие колачиња се користат за прикажување реклами што најверојатно ќе ве интересираат врз основа на вашите навики на прелистување.","pc_trgt_text_3":"Овие колачиња, сервирани од нашата содржина и/или провајдери за рекламирање, може да ги комбинираат информациите што ги собрале од нашата веб страна со други информации што независно ги собрале во врска со активностите на вашиот веб-прелистувач низ нивната мрежа на веб страни.","pc_trgt_text_4":"Ако изберете да ги отстраните или оневозможите овие колачиња за таргетирање или рекламирање, сè уште ќе гледате реклами, но тие можеби нема да бидат релевантни за вас.","pc_yprivacy_text_1":"Вашата приватност е важна за нас","pc_yprivacy_text_2":"Колачињата се многу мали текстуални датотеки што се складираат на вашиот компјутер кога посетувате веб страна. Ние користиме колачиња за различни цели и за да го подобриме вашето онлајн искуство на нашата веб страна (на пример, за да ги запомниме деталите за најавување на вашата сметка).","pc_yprivacy_text_3":"Можете да ги промените вашите параметри и да одбиете одредени видови колачиња да се складираат на вашиот компјутер додека ја прелистувате нашата веб страна. Можете исто така да ги отстраните сите колачиња што се веќе зачувани на вашиот компјутер, но имајте во предвид дека бришењето колачиња може да ве спречи да користите делови од нашата веб страна.","pc_yprivacy_title":"Вашата приватност","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Политика за Приватност</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Gweithredol","always_active":"Yn weithredol bob tro","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Anweithredol","nb_agree":"Rwy\'n cytuno","nb_changep":"Newid fy newisiadau","nb_ok":"Iawn","nb_reject":"Rwy\'n gwrthod","nb_text":"Rydym yn defnyddio cwcis a thechnolegau tracio eraill i wella eich profiad o bori ar ein gwefan, i ddangos cynnwys wedi ei bersonoli a hysbysebion wedi\'u targedu, i ddadansoddi traffig ar ein gwefan ac i ddeall o ble daw ein hymwelwyr.","nb_title":"Rydym yn defnyddio cwcis","pc_fnct_text_1":"Cwcis swyddogaeth","pc_fnct_text_2":"Mae\'r cwcis yma yn cael eu defnyddio i ddarparu profiad mwy personol ichi ar ein gwefan, ac i gofio dewisiadau a wnewch wrth ddefnyddio ein gwefan.","pc_fnct_text_3":"Er enghraifft, gallem ddefnyddio cwcis swyddogaeth i gofio\'ch dewis iaith neu gofio\'ch manylion mewngofnodi.","pc_minfo_text_1":"Rhagor o wybodaeth","pc_minfo_text_2":"Os oes gennych chi unrhyw ymholiadau yn ymwneud â\'n polisi cwcis a\'ch dewisiadau, a wnewch chi gysylltu â ni.","pc_minfo_text_3":"I ganfod mwy, ewch at ein <a href=\'%s\' target=\'_blank\'>Polasaí Príobháideachta</a>.","pc_save":"Cadw fy newisiadau","pc_sncssr_text_1":"Cwcis hollol hanfodol","pc_sncssr_text_2":"Mae\'r cwcis yma yn hanfodol er mwyn ichi dderbyn gwasanaethau drwy ein gwefan a\'ch galluogi i ddefnyddio nodweddion penodol ar ein gwefan.","pc_sncssr_text_3":"Heb y cwcis yma, ni fedrwn ddarparu rhai gwasanaethau penodol ichi ar ein gwefan.","pc_title":"Canolfan Dewisiadau Cwcis","pc_trck_text_1":"Cwcis tracio a pherfformiad","pc_trck_text_2":"Mae\'r cwcis yma yn cael eu defnyddio i gasglu gwybodaeth a dadansoddi traffig i\'n gwefan a sut mae ymwelwyr yn defnyddio\'n gwefan.","pc_trck_text_3":"Er enghraifft, gall y cwcis yma dracio faint o amser rydych yn ei dreulio ar y wefan neu\'r tudalennau rydych yn ymweld â hwy a\'n cynorthwyo i ddeall sut y gallwn wella ein gwefan ar eich cyfer.","pc_trck_text_4":"Nid yw\'r wybodaeth a gesglir drwy\'r cwcis tracio a pherfformiad yn adnabod unrhyw ymwelydd unigol.","pc_trgt_text_1":"Cwcis targedu a hysbysebu","pc_trgt_text_2":"Mae\'r cwcis yma yn cael eu defnyddio i ddangos hysbysebion sydd yn debygol o fod o ddiddordeb i chi yn seiliedig ar eich arferion pori.","pc_trgt_text_3":"Gall y cwcis yma, fel y\'u gweinyddir gan ein darparwyr cynnwys a/neu hysbysebion, gyfuno gwybodaeth a gasglwyd ganddynt o\'n gwefan gyda gwybodaeth arall maent wedi ei chasglu\'n annibynnol yn seiliedig ar eich gweithgareddau pori ar y rhyngrwyd ar draws eu rhwydweithiau o wefannau.","pc_trgt_text_4":"Os byddwch yn dewis tynnu neu atal y cwcis targedu neu hysbysebu yma, byddwch yn parhau i weld hysbysebion ond mae\'n bosib na fyddant yn berthnasol i chi.","pc_yprivacy_text_1":"Mae eich preifatrwydd yn bwysig i ni","pc_yprivacy_text_2":"Ffeiliau testun bach eu maint yw cwcis sydd yn cael eu storio ar eich cyfrifiadur wrth ichi ymweld â gwefan. Rydym yn defnyddio cwcis i sawl diben ac i wella eich profiad ar-lein ar ein gwefan (er enghraifft, cofio eich manylion mewngofnodi i\'ch cyfrif).","pc_yprivacy_text_3":"Gallwch newid eich dewisiadau ac atal rhai mathau o gwcis rhag cael eu storio ar eich cyfrifiadur. Gallwch hefyd dynnu unrhyw gwcis sydd eisoes wedi eu storio ar eich cyfrifiadur, ond cofiwch y gall.","pc_yprivacy_title":"Eich preifatrwydd","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Polasaí Príobháideachta</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"アクティブ","always_active":"常にアクティブ","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"停止中","nb_agree":"同意","nb_changep":"設定変更","nb_ok":"承諾","nb_reject":"拒否","nb_text":"訪問者の当ウェブサイトの閲覧体験を向上させるため、パーソナライズされたコンテンツやターゲット広告を表示するため、当ウェブサイトのトラフィックを分析するため、および当ウェブサイトへの訪問者がどこから来ているかを理解するために、Cookieおよびその他の追跡技術を使用しています。","nb_title":"クッキーの使用","pc_fnct_text_1":"機能性クッキー","pc_fnct_text_2":"これらのクッキーは、当ウェブサイトでよりカスタマイズされた体験を提供するため、および当ウェブサイトを利用する際に行った選択を記憶するために使用されます。","pc_fnct_text_3":"例えば、訪問者の言語設定を記憶したり、ログイン情報を記憶するために、機能性クッキーを使用することがあります。","pc_minfo_text_1":"詳細情報","pc_minfo_text_2":"クッキーに関する方針や訪問者の選択に関連したご質問については、当方までお問い合わせください。","pc_minfo_text_3":"詳しくは、<a href=\'%s\' target=\'_blank\'>プライバシーポリシー</a> をご覧ください。","pc_save":"設定を保存","pc_sncssr_text_1":"ウェブサイトの動作に必要不可欠なクッキー","pc_sncssr_text_2":"これらのクッキーは、訪問者が当ウェブサイトを通じて利用可能なサービスを提供したり、当ウェブサイトの特定の機能を利用したりするために不可欠なものです。","pc_sncssr_text_3":"これらのクッキーをブロックした場合、当ウェブサイトでの特定のサービスを提供できません。","pc_title":"クッキー設定センター","pc_trck_text_1":"トラッキングクッキー","pc_trck_text_2":"これらのクッキーは、当ウェブサイトへのトラフィックや訪問者がどのように当ウェブサイトを利用しているかを分析するための情報を収集するために使用されます。","pc_trck_text_3":"例えば、これらのクッキーは、訪問者が当ウェブサイトに滞在した時間や訪問したページなどを追跡することがあり、これは、訪問者のために当ウェブサイトの利便性向上に役立てます。","pc_trck_text_4":"これらのトラッキングおよびパフォーマンスクッキーによって収集された情報は、特定の個人を特定することはありません。","pc_trgt_text_1":"ターゲティングおよび広告用クッキー","pc_trgt_text_2":"これらのクッキーは、訪問者の閲覧習慣に基づいて、訪問者が興味を持ちそうな広告を表示するために使用されます。","pc_trgt_text_3":"これらのクッキーは、コンテンツプロバイダーおよび/または広告プロバイダーによって提供され、当ウェブサイトから収集した情報と、そのネットワーク上での訪問者のウェブブラウザの活動に関連して独自に収集した他の情報とを組み合わせることがあります。","pc_trgt_text_4":"訪問者がこれらのターゲティングクッキーや広告用クッキーを削除または無効を選択した場合でも、広告は表示されますが、訪問者に関連したものではない可能性があります。","pc_yprivacy_text_1":"お客様のプライバシーを尊重します","pc_yprivacy_text_2":"クッキーとは、訪問者がウェブサイトにアクセスした際に訪問者のコンピュータに保存される非常に小さなテキストファイルです。当ウェブサイトは、さまざまな目的でクッキーを使用し、当ウェブサイトでの訪問者のオンライン利便性を向上させています。（例えば、訪問者のアカウントのログイン情報を記憶するためなど。）","pc_yprivacy_text_3":"訪問者は、設定を変更して、当ウェブサイトを閲覧中のコンピュータに保存される特定の種類のクッキーを拒否することができます。また、すでに訪問者のコンピュータに保存されているクッキーを削除することもできますが、クッキーを削除すると、当ウェブサイト機能の一部が利用できなくなる可能性がありますので、ご注意ください。","pc_yprivacy_title":"プライバシー","privacy_policy":"<a href=\'%s\' target=\'_blank\'>プライバシーポリシー</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"تغيير تفضيلاتي","always_active":"مفعل دائمًا","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"غير مفعل","nb_agree":"موافق","nb_changep":"تغيير تفضيلاتي","nb_ok":"فهمت","nb_reject":"أرفض","nb_text":"نحن نستخدم ملفات تعريف الارتباط وتقنيات التتبع الأخرى لتحسين تجربة التصفح الخاصة بك على موقعنا الإلكتروني ، ولإظهار المحتوى المخصص والإعلانات المستهدفة لك ، وتحليل حركة المرور على موقعنا ، وفهم من أين يأتي زوارنا.","nb_title":"نحنُ نستخدم ملفات تعريف الارتباط","pc_fnct_text_1":"ملفات تعريف الارتباط الوظيفية","pc_fnct_text_2":"تُستخدم ملفات تعريف الارتباط هذه لتزويدك بتجربة أكثر تخصيصًا على موقعنا الإلكتروني ولتذكر الخيارات التي تتخذها عند استخدامك لموقعنا.","pc_fnct_text_3":"على سبيل المثال ، قد نستخدم ملفات تعريف الارتباط الوظيفية لتذكر تفضيلات اللغة الخاصة بك أو تذكر تفاصيل تسجيل الدخول الخاصة بك.","pc_minfo_text_1":"معلومات أكثر.","pc_minfo_text_2":"لأي استفسارات تتعلق بسياستنا الخاصة بملفات تعريف الارتباط ، وخياراتك،  يرجى التواصل معنا.","pc_minfo_text_3":"<a href=\'%s\' target=\'_blank\'>\\nالخاصة بنا لمعرفة المزيد ، يرجى زيارةسياسة الخصوصية .\\n</a>","pc_save":"حفظ تفضيلاتي","pc_sncssr_text_1":"ملفات تعريف الارتباط الضرورية للغاية","pc_sncssr_text_2":"تعد ملفات تعريف الارتباط هذه ضرورية لتزويدك بالخدمات المتاحة عبر موقعنا على الويب ولتمكينك من استخدام ميزات معينة في موقعنا .","pc_sncssr_text_3":"بدون ملفات تعريف الارتباط هذه ، لا يمكننا تقديم خدمات معينة لك على موقعنا.","pc_title":"مركز تفضيلات ملفات تعريف الارتباط","pc_trck_text_1":"ملفات تعريف الارتباط للتتبع والأداء","pc_trck_text_2":"\\nتُستخدم ملفات تعريف الارتباط هذه لجمع المعلومات لتحليل حركة المرور إلى موقعنا الإلكتروني وكيفية استخدام الزوار لموقعنا.","pc_trck_text_3":"\\nعلى سبيل المثال ، قد تتعقب ملفات تعريف الارتباط هذه أشياء مثل المدة التي تقضيها على موقع الويب أو الصفحات التي تزورها مما يساعدنا على فهم كيف يمكننا تحسين موقعنا على الويب من أجلك.","pc_trck_text_4":"\\nالمعلومات التي يتم جمعها من خلال ملفات تعريف الارتباط الخاصة بالتتبع والأداء هذه لا تحدد أي زائر فردي.\\n","pc_trgt_text_1":"ملفات تعريف الارتباط الخاصة بالاستهداف والإعلان","pc_trgt_text_2":"تُستخدم ملفات تعريف الارتباط هذه لإظهار الإعلانات التي من المحتمل أن تهمك بناءً على عاداتك في التصفح.","pc_trgt_text_3":"\\nقد تدمج ملفات تعريف الارتباط هذه ، كما يقدمها المحتوى و / أو موفرو الإعلانات لدينا ، المعلومات التي جمعوها من موقعنا الإلكتروني مع المعلومات الأخرى التي جمعوها بشكل مستقل فيما يتعلق بأنشطة متصفح الويب الخاص بك عبر شبكة مواقعهم الإلكترونية.\\n","pc_trgt_text_4":"إذا اخترت إزالة أو تعطيل ملفات تعريف الارتباط الخاصة بالاستهداف أو الإعلانات ، فستظل تشاهد إعلانات ولكنها قد لا تكون ذات صلة بك.","pc_yprivacy_text_1":"خصوصيتك مهمة بالنسبة لنا","pc_yprivacy_text_2":"من الأغراض ولتعزيز تجربتك عبر الإنترنت على موقعنا (على سبيل المثال ، لتذكر تفاصيل تسجيل الدخول إلى حسابك).","pc_yprivacy_text_3":"يمكنك تغيير تفضيلاتك ورفض أنواع معينة من ملفات تعريف الارتباط ليتم تخزينها على جهاز الكمبيوتر الخاص بك أثناء تصفح موقعنا على الويب.  يمكنك أيضًا إزالة أي ملفات تعريف ارتباط مخزنة بالفعل على جهاز الكمبيوتر الخاص بك ، ولكن ضع في اعتبارك أن حذف ملفات تعريف الارتباط قد يمنعك من استخدام أجزاء من موقعنا.","pc_yprivacy_title":"خصوصيتك","privacy_policy":"<a href=\'%s\' target=\'_blank\'>\\nةسياسة الخصوصية\\n</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Etkin","always_active":"Her zaman etkin","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Etkin değil","nb_agree":"Kabul et","nb_changep":"Tercihleri değiştir","nb_ok":"Tamam","nb_reject":"Reddet","nb_text":"Web sitemizde gezinme deneyiminizi geliştirmek, size kişiselleştirilmiş içerik ve hedefli reklamlar göstermek, web sitesi trafiğimizi analiz etmek ve ziyaretçilerimizin nereden geldiğini anlamak için çerezleri ve diğer izleme teknolojilerini kullanıyoruz.","nb_title":"Çerezleri kullanıyoruz","pc_fnct_text_1":"İşlevsellik çerezleri","pc_fnct_text_2":"Bu çerezler, web sitemizde size daha kişiselleştirilmiş bir deneyim sağlamak ve web sitemizi kullanırken yaptığınız seçimleri hatırlamak için kullanılır.","pc_fnct_text_3":"Örneğin, dil tercihlerinizi veya oturum açma bilgilerinizi hatırlamak için işlevsellik tanımlama bilgilerini kullanabiliriz.","pc_minfo_text_1":"Daha fazla bilgi","pc_minfo_text_2":"Çerezlere ilişkin politikamız ve seçimlerinizle ilgili herhangi bir sorunuz için lütfen bizimle iletişime geçin","pc_minfo_text_3":"Daha fazlasını öğrenmek için lütfen <a href=\'%s\' target=\'_blank\'>Gizlilik Politikası</a> ziyaret edin.","pc_save":"Tercihleri Kaydet","pc_sncssr_text_1":"Kesinlikle gerekli çerezler","pc_sncssr_text_2":"Bu çerezler, size web sitemiz aracılığıyla sunulan hizmetleri sağlamak ve web sitemizin belirli özelliklerini kullanmanızı sağlamak için gereklidir.","pc_sncssr_text_3":"Bu çerezler olmadan, web sitemizde size belirli hizmetleri sağlayamayız.","pc_title":"Çerez Tercihleri Merkezi","pc_trck_text_1":"İzleme ve performans çerezleri","pc_trck_text_2":"Bu çerezler, web sitemize gelen trafiği ve ziyaretçilerin web sitemizi nasıl kullandığını analiz etmek için bilgi toplamak amacıyla kullanılır.","pc_trck_text_3":"Örneğin, çerezler, web sitesinde ne kadar zaman geçirdiğiniz veya ziyaret ettiğiniz sayfalar gibi şeyleri izleyebilir ve bu da web sitemizi sizin için nasıl iyileştirebileceğimizi anlamamıza yardımcı olur.","pc_trck_text_4":"Bu izleme ve performans çerezleri aracılığıyla toplanan bilgiler anonim olup herhangi bir bireysel ziyaretçiyi tanımlamaz.","pc_trgt_text_1":"Hedefleme ve reklam çerezleri","pc_trgt_text_2":"Bu çerezler, arama/gezinme alışkanlıklarınıza göre ilginizi çekebilecek reklamları göstermek için kullanılır.","pc_trgt_text_3":"Bu çerezler, içerik ve/veya reklam sağlayıcılarımız tarafından, web sitemizden topladıkları bilgileri, web tarayıcınızın kendi web siteleri ağlarındaki faaliyetleriyle ilgili olarak bağımsız olarak topladıkları diğer bilgilerle birleştirilebilir.","pc_trgt_text_4":"Bu hedefleme veya reklam çerezlerini kaldırmayı veya devre dışı bırakmayı seçerseniz, reklamları görmeye devam edersiniz, ancak bunlar sizinle alakalı olmayabilir.","pc_yprivacy_text_1":"Gizliliğiniz bizim için önemlidir","pc_yprivacy_text_2":"Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınızda depolanan çok küçük metin dosyalarıdır. Çerezleri çeşitli amaçlarla ve web sitemizdeki çevrimiçi deneyiminizi geliştirmek için (örneğin, hesap giriş bilgilerinizi hatırlamak için) kullanıyoruz.","pc_yprivacy_text_3":"Web sitemizde gezinirken tercihlerinizi değiştirebilir ve bilgisayarınızda saklanacak belirli çerez türlerini reddedebilirsiniz. Ayrıca, bilgisayarınızda depolanmış olan çerezleri de kaldırabilirsiniz, ancak çerezleri silmenin web sitemizin bölümlerini kullanmanızı engelleyebileceğini unutmayın.","pc_yprivacy_title":"Gizliliğiniz","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Gizlilik Politikası</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"啟用","always_active":"永遠啟用","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"停用","nb_agree":"我同意","nb_changep":"更改我的偏好","nb_ok":"確定","nb_reject":"我拒絕","nb_text":"我們使用cookies和其他追蹤技術來改善您在我們網站上的瀏覽體驗，對您顯示個性化的內容和有針對性的廣告，分析我們的網站流量，並了解我們的訪客來自哪裡。","nb_title":"我們使用cookies","pc_fnct_text_1":"功能性cookies","pc_fnct_text_2":"這些cookies用於在我們的網站上為您提供更加個人化的體驗，並記住您在使用我們網站時做出的選擇。","pc_fnct_text_3":"例如，我們可能使用功能性cookies來記住您的語言偏好或記住您的登入資訊。","pc_minfo_text_1":"更多資訊","pc_minfo_text_2":"如果對我們的cookies政策或您的選擇有任何疑問，請聯繫我們。","pc_minfo_text_3":"想了解更多資訊，請前往我們的<a href=\'%s\' target=\'_blank\'>隱私權政策</a>.","pc_save":"儲存我的偏好","pc_sncssr_text_1":"必要的cookies","pc_sncssr_text_2":"這些cookies對於向您提供透過我們網站的服務以及使您能夠使用我們網站的某些功能是不可或缺的。","pc_sncssr_text_3":"沒有這些cookies，我們就不能在我們的網站上為您提供某些服務。","pc_title":"Cookies偏好中心","pc_trck_text_1":"追蹤cookies","pc_trck_text_2":"這些cookies用於收集資訊，以分析我們網站的流量以及訪客如何使用我們的網站。","pc_trck_text_3":"例如，這些cookies可能會跟追蹤如您在網站上花費的時間或您造訪的頁面，這有助於我們了解如何為您改進我們的網站。","pc_trck_text_4":"透過這些追蹤和性能cookies收集的資訊不會識別任何個人訪客。","pc_trgt_text_1":"定位和廣告cookies","pc_trgt_text_2":"這些cookies被用來根據您的瀏覽習慣顯示您可能感興趣的廣告。","pc_trgt_text_3":"由我們的內容或廣告供應商提供的這些cookies，可能會將他們從我們的網站上收集的資訊和他們獨立收集的與您的瀏覽器在其網站中的活動有關的其他資訊結合起來。","pc_trgt_text_4":"如果您選擇刪除或禁用這些定位或廣告cookies，您仍然會看到廣告，但它們可能與您無關。","pc_yprivacy_text_1":"您的隱私對我們很重要","pc_yprivacy_text_2":"Cookies是非常小的文本文件，當您造訪網站時存儲在您的裝置上。我們將cookies用於各種目的，並提高您在我們網站的使用體驗（例如，記住您帳號的登入資訊）。","pc_yprivacy_text_3":"在瀏覽我們的網站時，您可以改變您的偏好，拒絕某些類型的cookies儲存在您的裝置上。您也可以刪除已經儲存在您裝置上的任何cookies，但請記住，刪除cookies可能會導致您無法使用我們網站的部分內容。","pc_yprivacy_title":"您的隱私","privacy_policy":"<a href=\'%s\' target=\'_blank\'>隱私權政策</a>"}}')
}
, function(e) {
    e.exports = JSON.parse('{"i18n":{"active":"Activats","always_active":"Totjorn activats","inactive":"Desactivats","nb_agree":"Accèpti","nb_changep":"Cambiar mas preferéncias","nb_ok":"D\'acòrdi","nb_reject":"Regèti","nb_text":"Utilizam de cookies e d’autras tecnologias de seguiment per melhorar vòstra experiéncia de navegacion sus nòstre site web, per vos afichar de contenguts personalizats, de publicitats cibladas, per analisar nòstra audiéncia e per comprendre d’ont venon nòstres visitaires.","nb_title":"Utilizam de cookies","pc_fnct_text_1":"Cookies foncionals","pc_fnct_text_2":"Aquestes cookies servisson per vos fornir una experiéncia mai personalizada sus nòstre site web e per memorizar vòstras causidas quand navegatz sus nòstre site web.","pc_fnct_text_3":"Per exemple, podèm utilizar de cookies foncionals per memorizar vòstras preferéncias lingüisticas o nos remembrar de vòstre identificant de connexion.","pc_minfo_text_1":"Mai d\'informacions","pc_minfo_text_2":"Per quina question que siá tocant nòstra politica de cookies e vòstras causidas, contactat-nos.","pc_minfo_text_3":"Per ne saber mai, consultatz nòstra <a href=\'%s\' target=\'_blank\'>Politica de confidencialitat</a>.","pc_save":"Enregistrar mas preferéncias","pc_sncssr_text_1":"Cookies formalament necessaris","pc_sncssr_text_2":"Aquestes cookies son essencials per vos fornir los servicis disponibles via nòstre site web e per vos permetre d’utilizar d’unas foncionalitats de nòstre site web.","pc_sncssr_text_3":"Sens aquestes cookies podèm pas vos provesir certans servicis sus nòstre site web.","pc_title":"Centre de preferéncias dels cookies","pc_trck_text_1":"Cookies de seguiment","pc_trck_text_2":"Aquestes cookies s’emplegan per collectar d’informacions per analisar lo trafic de nòstre site web e coma los visitaires l’utilizan.","pc_trck_text_3":"Per exemple, aquestes cookies poirián pistar las causas coma quant de temps passatz sus un site web o las paginas que consultatz, çò que nos permet de comprendre coma podèm melhorar nòstre site web per vos.","pc_trck_text_4":"Las informacions collectadas via aqueles cookies de seguiment e de performància identifican pas individualament cap de visitaire.","pc_trgt_text_1":"Cookies de ciblatge e publicitat","pc_trgt_text_2":"Aquestes cookies servisson per afichar de publicitats que vos interessaràn probablament basadas sus vòstras costumas de navegacion.","pc_trgt_text_3":"Aquestes cookies, servits per nòstres provesidors de contenguts e/o publicitats, pòdon combinar d’informacions que collèctan de nòstre site web amb d’autras informacions qu’an collectadas independentament en relacion amb las activitats de vòstre navegador a travèrs lor malhum de sites web.","pc_trgt_text_4":"Se causissètz de suprimir o desactivar aquestes cookies  publicitaris o de ciblatge, veiretz totjorn de reclamas mas seràn pas pertinentas per vos.","pc_yprivacy_text_1":"Vòstra vida privada nos impòrta","pc_yprivacy_text_2":"Los cookies son de plan pichons fichièrs tèxt que son gardas dins vòstre ordenador quand visitatz un site. Utilizam los cookies per mantuna tòca e per melhorar vòstra experiéncia en linha sus nòstre site web (per exemple, per memorizar vòstre identificant de connexion).","pc_yprivacy_text_3":"Podètz modificar vòstras preferéncias e regetar certans tipes de cookies de gardar dins vòstre ordenador en navegant sus nòstre site web. Podètz tanben suprimir quin cookie que siá ja gardat dins vòstre ordenador, mas tenètz a l\'esperit que la supression de cookies pòt empachar d’utilizar nòstre site web.","pc_yprivacy_title":"Vòstra confidencialitat"}}')
}
, function(e, t, i) {
    var n = i(39);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(1)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, "", ""])
}
, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t)
            throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e)
            return e;
        var i = t.protocol + "//" + t.host
          , n = i + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
            var o, a = t.trim().replace(/^"(.*)"$/, (function(e, t) {
                return t
            }
            )).replace(/^'(.*)'$/, (function(e, t) {
                return t
            }
            ));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? i + a : n + a.replace(/^\.\//, ""),
            "url(" + JSON.stringify(o) + ")")
        }
        ))
    }
}
, function(e, t, i) {
    var n = i(42);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(1)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, '.termsfeed-com---reset{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}.termsfeed-com---reset *,.termsfeed-com---reset *::before,.termsfeed-com---reset *::after{box-sizing:border-box}.termsfeed-com---reset a,.termsfeed-com---reset li,.termsfeed-com---reset p,.termsfeed-com---reset h1,.termsfeed-com---reset h2,.termsfeed-com---reset input,.termsfeed-com---reset button,.termsfeed-com---reset select{border-style:none;box-shadow:none;margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;outline:none}@-ms-viewport{.termsfeed-com---reset{width:device-width}}.termsfeed-com---reset [tabindex="-1"]:focus{outline:0 !important}.termsfeed-com---reset h1,.termsfeed-com---reset h2,.termsfeed-com---reset h3,.termsfeed-com---reset h4,.termsfeed-com---reset h5,.termsfeed-com---reset h6{margin-top:0;margin-bottom:0;color:#000}.termsfeed-com---reset p{margin-top:0;margin-bottom:1rem}.termsfeed-com---reset div{display:block}.termsfeed-com---reset ol,.termsfeed-com---reset ul,.termsfeed-com---reset dl{margin-top:0;margin-bottom:1rem}.termsfeed-com---reset ol ol,.termsfeed-com---reset ul ul,.termsfeed-com---reset ol ul,.termsfeed-com---reset ul ol{margin-bottom:0}.termsfeed-com---reset b,.termsfeed-com---reset strong{font-weight:bolder}.termsfeed-com---reset small{font-size:80%}.termsfeed-com---reset a{color:#007bff;text-decoration:none;background-color:rgba(0,0,0,0);-webkit-text-decoration-skip:objects}.termsfeed-com---reset a:hover{color:#0056b3;text-decoration:underline}.termsfeed-com---reset a:not([href]):not([tabindex]){color:inherit;text-decoration:none}.termsfeed-com---reset a:not([href]):not([tabindex]):hover,.termsfeed-com---reset a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}.termsfeed-com---reset a:not([href]):not([tabindex]):focus{outline:0}.termsfeed-com---reset label{display:inline-block;margin-bottom:.5rem}.termsfeed-com---reset button{border-radius:2px;padding:.5rem 1rem;outline:none;background:#dcdae5;color:#111;cursor:pointer;border:none}.termsfeed-com---reset button:focus{outline:none}.termsfeed-com---reset select{border-style:none;padding:.5rem 1rem}.termsfeed-com---reset input,.termsfeed-com---reset button,.termsfeed-com---reset select,.termsfeed-com---reset optgroup,.termsfeed-com---reset textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.termsfeed-com---reset button,.termsfeed-com---reset input{overflow:visible}.termsfeed-com---reset button,.termsfeed-com---reset select{text-transform:none}.termsfeed-com---reset button,.termsfeed-com---reset html [type=button],.termsfeed-com---reset [type=reset],.termsfeed-com---reset [type=submit]{-webkit-appearance:button}.termsfeed-com---reset button::-moz-focus-inner,.termsfeed-com---reset [type=button]::-moz-focus-inner,.termsfeed-com---reset [type=reset]::-moz-focus-inner,.termsfeed-com---reset [type=submit]::-moz-focus-inner{padding:0;border-style:none}.termsfeed-com---reset input[type=radio],.termsfeed-com---reset input[type=checkbox]{box-sizing:border-box;padding:0}.termsfeed-com---reset [hidden]{display:none !important}', ""])
}
, function(e, t, i) {
    var n = i(44);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(1)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, '.termsfeed-com---nb{overflow:auto;z-index:99999999999;font-size:16px}.termsfeed-com---nb .cc-nb-main-container{padding:3rem}.termsfeed-com---nb .cc-nb-title{font-size:24px;font-weight:600}.termsfeed-com---nb .cc-nb-text{font-size:16px;margin:0 0 1.25rem 0}.termsfeed-com---nb .cc-nb-okagree,.termsfeed-com---nb .cc-nb-reject,.termsfeed-com---nb .cc-nb-changep{font-weight:bold;font-size:14px;margin-right:.25rem !important;margin-bottom:.25rem !important}@media(max-width: 480px){.termsfeed-com---nb .cc-nb-okagree,.termsfeed-com---nb .cc-nb-reject,.termsfeed-com---nb .cc-nb-changep{display:block;width:100%}}.termsfeed-com---nb-headline{right:0;top:auto;bottom:0;left:0;max-width:100%;position:relative}@media(max-width: 320px),(max-height: 480px){.termsfeed-com---nb-headline{overflow:auto;height:200px;max-width:100%;right:0;top:auto;bottom:0;left:auto;position:fixed}}.termsfeed-com---nb-simple{right:0;top:auto;bottom:0;left:auto;max-width:50%;position:fixed}@media screen and (max-width: 600px){.termsfeed-com---nb-simple{max-width:80%}}@media(max-width: 320px),(max-height: 480px){.termsfeed-com---nb-simple{overflow:auto;height:200px;max-width:100%}}.termsfeed-com---nb-interstitial-overlay{position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.8);z-index:9999999999}.termsfeed-com---nb-interstitial{right:3vw;top:3vh;left:3vw;max-width:100%;position:fixed}@media(max-width: 320px),(max-height: 480px){.termsfeed-com---nb-interstitial{overflow:auto;height:200px;right:0;top:auto;bottom:0;left:auto;position:fixed}}.termsfeed-com---nb-standalone{position:fixed;top:0;left:0;height:100%;width:100%}@media(max-width: 320px),(max-height: 480px){.termsfeed-com---nb-standalone{overflow:auto;height:200px;max-width:100%;right:0;top:auto;bottom:0;left:auto;position:fixed}}.termsfeed-com---pc-overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:999999999999;top:0;left:0;display:none}@media screen and (max-width: 600px){.termsfeed-com---pc-overlay{overflow-y:scroll}}.termsfeed-com---pc-dialog{position:absolute;margin:30px auto;width:750px;max-width:90%;height:auto;left:0;right:0}.termsfeed-com---pc-dialog>div{width:100%}.termsfeed-com---pc-dialog .cc-pc-container{width:100%;display:flex;background:#fff;flex-direction:column}.termsfeed-com---pc-dialog .cc-pc-head{background:#fff;color:#111;display:flex;flex-direction:row;justify-content:space-between}@media screen and (max-width: 600px){.termsfeed-com---pc-dialog .cc-pc-head{flex-direction:column}}.termsfeed-com---pc-dialog .cc-pc-head-title{display:flex;padding-left:15px;flex-direction:column;justify-content:center;align-items:baseline}@media screen and (max-width: 600px){.termsfeed-com---pc-dialog .cc-pc-head-title{align-items:center;padding:15px 0 0 0}}.termsfeed-com---pc-dialog .cc-pc-head-title-text{font-size:16px;line-height:1.5;margin:0}.termsfeed-com---pc-dialog .cc-pc-head-title-headline{font-size:20px;font-weight:600;margin:0}.termsfeed-com---pc-dialog .cc-pc-head-lang{display:flex;align-items:center;padding-right:15px;min-height:80px;justify-content:center;flex-direction:row-reverse}@media screen and (max-width: 600px){.termsfeed-com---pc-dialog .cc-pc-head-lang{padding:15px 0;min-height:20px}}.termsfeed-com---pc-dialog .cc-pc-head-close{display:flex;align-items:center;justify-content:center;margin-left:15px}.termsfeed-com---pc-dialog .cc-cp-body{display:flex;flex-direction:row;align-items:stretch;background:#292929;color:#f5f5f5;border-bottom:none}@media screen and (max-width: 600px){.termsfeed-com---pc-dialog .cc-cp-body{flex-direction:column}}.termsfeed-com---pc-dialog .cc-cp-body-tabs{font-family:Arial,sans-serif !important;width:150px;margin:0;padding:0;background:#e6e6e6;min-width:150px}@media screen and (max-width: 600px){.termsfeed-com---pc-dialog .cc-cp-body-tabs{width:100%}}.termsfeed-com---pc-dialog .cc-cp-body-tabs-item{margin:0;padding:0;float:left;display:block;width:100%;color:#666;background:#e6e6e6;border-bottom:1px solid #ccc;border-right:1px solid #ccc;transition:all ease .1s;box-sizing:content-box}@media screen and (max-width: 600px){.termsfeed-com---pc-dialog .cc-cp-body-tabs-item{border-right:0}}.termsfeed-com---pc-dialog .cc-cp-body-tabs-item[active=true]{background:#292929;color:#f5f5f5}.termsfeed-com---pc-dialog .cc-cp-body-tabs-item-link{text-decoration:none;color:#666;display:block;padding:10px 5px 10px 10px;font-weight:700;font-size:12px;line-height:19px;position:relative;cursor:pointer;width:100%;text-align:left;background:none;word-wrap:break-word;white-space:break-spaces}.termsfeed-com---pc-dialog .cc-cp-body-content{background:#292929;color:#f5f5f5}.termsfeed-com---pc-dialog .cc-cp-body-content-entry{width:100%;display:none;padding:25px;box-sizing:border-box}.termsfeed-com---pc-dialog .cc-cp-body-content-entry[active=true]{display:block}.termsfeed-com---pc-dialog .cc-cp-body-content-entry-title{font-size:24px;font-weight:600}.termsfeed-com---pc-dialog .cc-cp-body-content-entry-text{font-size:16px;line-height:1.5}.termsfeed-com---pc-dialog .cc-cp-foot{background:#f2f2f2;display:flex;flex-direction:row;align-items:center;border-top:1px solid #ccc;justify-content:space-between}.termsfeed-com---pc-dialog .cc-cp-foot-byline{padding:20px 10px;font-size:14px;color:#333;display:block !important}.termsfeed-com---pc-dialog .cc-cp-foot-byline a{color:#999}.termsfeed-com---pc-dialog .cc-cp-foot-save{margin-right:10px;opacity:.9;transition:all ease .3s;font-size:14px;font-weight:bold;height:auto}.termsfeed-com---pc-dialog .cc-cp-foot-save:hover{opacity:1}.termsfeed-com---pc-dialog input[type=checkbox].cc-custom-checkbox{position:absolute;margin:2px 0 0 16px;cursor:pointer;appearance:none;border:0}.termsfeed-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label{position:relative;padding:4px 0 0 50px;line-height:2em;cursor:pointer;display:inline;font-size:14px}.termsfeed-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label:before{content:"";position:absolute;display:block;left:0;top:0;width:40px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all .3s;transition:all .3s}.termsfeed-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label:after{content:"";position:absolute;display:block;left:0px;top:0px;width:24px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all .3s;transition:all .3s}.termsfeed-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label:hover:after{box-shadow:0 0 5px rgba(0,0,0,.3)}.termsfeed-com---pc-dialog input[type=checkbox].cc-custom-checkbox:checked+label:after{margin-left:16px}.termsfeed-com---pc-dialog input[type=checkbox].cc-custom-checkbox:checked+label:before{background:#55d069}', ""])
}
, function(e, t, i) {
    var n = i(46);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(1)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, ".termsfeed-com---palette-dark.termsfeed-com---nb{background-color:#111;color:#fff}.termsfeed-com---palette-dark .cc-nb-title{color:#fff}.termsfeed-com---palette-dark .cc-nb-text{color:#fff}.termsfeed-com---palette-dark .cc-nb-text a{color:#fff;text-decoration:underline}.termsfeed-com---palette-dark .cc-nb-text a:hover{text-decoration:none}.termsfeed-com---palette-dark .cc-nb-text a:focus{box-shadow:0 0 0 2px #3dd000}.termsfeed-com---palette-dark .cc-nb-okagree{color:#000;background-color:#ff0}.termsfeed-com---palette-dark .cc-nb-okagree:focus{box-shadow:0 0 0 2px #3dd000}.termsfeed-com---palette-dark .cc-nb-reject{color:#000;background-color:#ff0}.termsfeed-com---palette-dark .cc-nb-reject:focus{box-shadow:0 0 0 2px #3dd000}.termsfeed-com---palette-dark .cc-nb-changep{background-color:#eaeaea;color:#111}.termsfeed-com---palette-dark .cc-nb-changep:focus{box-shadow:0 0 0 2px #3dd000}.termsfeed-com---palette-dark .cc-pc-container{background:#212121}.termsfeed-com---palette-dark .cc-pc-head{background:#212121;color:#fff;border-bottom:1px solid #111}.termsfeed-com---palette-dark .cc-pc-head-title-headline{color:#fff}.termsfeed-com---palette-dark .cc-pc-head-title-text{color:#fff}.termsfeed-com---palette-dark .cc-pc-head-lang select{color:#212121}.termsfeed-com---palette-dark .cc-pc-head-lang select:focus{box-shadow:0 0 0 2px #ff0}.termsfeed-com---palette-dark .cc-pc-head-close{background:none;color:#e6e6e6}.termsfeed-com---palette-dark .cc-pc-head-close:active,.termsfeed-com---palette-dark .cc-pc-head-close:focus{border:2px solid #ff0}.termsfeed-com---palette-dark .cc-cp-body{background:#292929 !important;color:#f5f5f5}.termsfeed-com---palette-dark .cc-cp-body-tabs{color:#666;background:#e6e6e6}.termsfeed-com---palette-dark .cc-cp-body-tabs-item{border-right-color:#ccc;border-bottom-color:#ccc}.termsfeed-com---palette-dark .cc-cp-body-tabs-item-link{color:#666}.termsfeed-com---palette-dark .cc-cp-body-tabs-item-link:hover{color:#666}.termsfeed-com---palette-dark .cc-cp-body-tabs-item-link:focus{box-shadow:0 0 0 2px #292929}.termsfeed-com---palette-dark .cc-cp-body-tabs-item[active=true]{background:#292929 !important}.termsfeed-com---palette-dark .cc-cp-body-tabs-item[active=true] button{color:#f5f5f5}.termsfeed-com---palette-dark .cc-cp-body-content{background:#292929 !important;color:#f5f5f5}.termsfeed-com---palette-dark .cc-cp-body-content-entry-title{color:#fff}.termsfeed-com---palette-dark .cc-cp-body-content-entry-text{color:#fff}.termsfeed-com---palette-dark .cc-cp-body-content-entry a{color:#fff;text-decoration:underline}.termsfeed-com---palette-dark .cc-cp-body-content-entry a:hover{text-decoration:none}.termsfeed-com---palette-dark .cc-cp-body-content-entry a:focus{box-shadow:0 0 0 2px #ff0}.termsfeed-com---palette-dark .cc-cp-foot{background:#212121;border-top-color:#111}.termsfeed-com---palette-dark .cc-cp-foot-byline{color:#fff}.termsfeed-com---palette-dark .cc-cp-foot-byline a:focus{box-shadow:0 0 0 2px #ff0}.termsfeed-com---palette-dark .cc-cp-foot-save{background:#ff0;color:#000}.termsfeed-com---palette-dark .cc-cp-foot-save:focus{box-shadow:0 0 0 2px #3dd000}", ""])
}
, function(e, t, i) {
    var n = i(48);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(1)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, ".termsfeed-com---palette-light.termsfeed-com---nb{background-color:#f2f2f2;color:#111}.termsfeed-com---palette-light .cc-nb-title{color:#111}.termsfeed-com---palette-light .cc-nb-text{color:#111}.termsfeed-com---palette-light .cc-nb-text a{color:#111;text-decoration:underline}.termsfeed-com---palette-light .cc-nb-text a:hover{text-decoration:none}.termsfeed-com---palette-light .cc-nb-text a:focus{box-shadow:0 0 0 2px #ff8d00}.termsfeed-com---palette-light .cc-nb-okagree{color:#fff;background-color:green}.termsfeed-com---palette-light .cc-nb-okagree:focus{box-shadow:0 0 0 2px #ff8d00}.termsfeed-com---palette-light .cc-nb-reject{color:#fff;background-color:green}.termsfeed-com---palette-light .cc-nb-reject:focus{box-shadow:0 0 0 2px #ff8d00}.termsfeed-com---palette-light .cc-nb-changep{background-color:#eaeaea;color:#111}.termsfeed-com---palette-light .cc-nb-changep:focus{box-shadow:0 0 0 2px #ff8d00}.termsfeed-com---palette-light .cc-pc-container{background:#fff}.termsfeed-com---palette-light .cc-pc-head{background:#fff;color:#111;border-bottom:1px solid #ccc}.termsfeed-com---palette-light .cc-pc-head-title-headline{color:#111}.termsfeed-com---palette-light .cc-pc-head-title-text{color:#111}.termsfeed-com---palette-light .cc-pc-head-lang select{color:#111}.termsfeed-com---palette-light .cc-pc-head-lang select:focus{box-shadow:0 0 0 2px green}.termsfeed-com---palette-light .cc-pc-head-close{background:none;color:#666}.termsfeed-com---palette-light .cc-pc-head-close:active,.termsfeed-com---palette-light .cc-pc-head-close:focus{border:2px solid green}.termsfeed-com---palette-light .cc-cp-body{background:#fbfbfb !important;color:#111}.termsfeed-com---palette-light .cc-cp-body-tabs{color:#666;background:#e6e6e6}.termsfeed-com---palette-light .cc-cp-body-tabs-item{border-right-color:#ccc;border-bottom-color:#ccc}.termsfeed-com---palette-light .cc-cp-body-tabs-item-link{color:#666}.termsfeed-com---palette-light .cc-cp-body-tabs-item-link:hover{color:#666}.termsfeed-com---palette-light .cc-cp-body-tabs-item-link:focus{box-shadow:0 0 0 2px #fbfbfb}.termsfeed-com---palette-light .cc-cp-body-tabs-item[active=true]{background:#fbfbfb !important}.termsfeed-com---palette-light .cc-cp-body-tabs-item[active=true] button{color:#111}.termsfeed-com---palette-light .cc-cp-body-content{background:#fbfbfb !important;color:#111}.termsfeed-com---palette-light .cc-cp-body-content-entry-title{color:#111}.termsfeed-com---palette-light .cc-cp-body-content-entry-text{color:#111}.termsfeed-com---palette-light .cc-cp-body-content-entry a{color:#111;text-decoration:underline}.termsfeed-com---palette-light .cc-cp-body-content-entry a:hover{text-decoration:none}.termsfeed-com---palette-light .cc-cp-body-content-entry a:focus{box-shadow:0 0 0 2px green}.termsfeed-com---palette-light .cc-cp-foot{background:#f2f2f2;border-top-color:#ccc}.termsfeed-com---palette-light .cc-cp-foot-byline{color:#111}.termsfeed-com---palette-light .cc-cp-foot-byline a:focus{box-shadow:0 0 0 2px green}.termsfeed-com---palette-light .cc-cp-foot-save{background:green;color:#fff}.termsfeed-com---palette-light .cc-cp-foot-save:focus{box-shadow:0 0 0 2px #ff8d00}", ""])
}
, function(e, t, i) {
    var n = i(50);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(1)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, ".termsfeed-com---is-hidden{display:none}.termsfeed-com---is-visible{display:block}", ""])
}
, function(e, t, i) {
    var n = i(52);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(1)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, ".termsfeed-com---nb.termsfeed-com---lang-ar,.termsfeed-com---pc-overlay.termsfeed-com---lang-ar{text-align:right}", ""])
}
, function(e, t, i) {
    "use strict";
    i.r(t),
    i.d(t, "run", (function() {
        return _e
    }
    )),
    i.d(t, "cookieConsentObject", (function() {
        return o
    }
    ));
    i(38),
    i(41),
    i(43),
    i(45),
    i(47),
    i(49),
    i(51);
    var n, o, a = function() {
        function e() {}
        return e.appendChild = function(e, t, i) {
            var n, o;
            return void 0 === i && (i = null),
            n = "string" == typeof e ? document.querySelector(e) : e,
            o = "string" == typeof t ? document.querySelector(t) : t,
            "afterbegin" === i ? n.insertAdjacentElement("afterbegin", o) : n.insertAdjacentElement("beforeend", o),
            !0
        }
        ,
        e.setCookie = function(e, t, i, n, o) {
            void 0 === o && (o = 62);
            var a = new Date;
            a.setTime(a.getTime() + 24 * o * 60 * 60 * 1e3);
            var s = "; expires=" + a.toUTCString()
              , r = "; domain=" + i
              , c = "";
            return n && (c = "; Secure"),
            document.cookie = i ? e + "=" + (t || "") + r + s + ";path=/; samesite=strict" + c : e + "=" + (t || "") + s + ";path=/; samesite=strict" + c,
            !0
        }
        ,
        e.getCookie = function(e) {
            for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                for (var o = i[n]; " " === o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 === o.indexOf(t))
                    return o.substring(t.length, o.length)
            }
            return null
        }
        ,
        e.removeCookie = function(e) {
            document.cookie = e + "=; Max-Age=-99999999;"
        }
        ,
        e.registerEvent = function(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0),
            t
        }
        ,
        e.searchObjectsArray = function(e, t, i) {
            for (var n in e) {
                if (e[n][t] === i)
                    return !0
            }
            return !1
        }
        ,
        e.magicTransform = function(e) {
            return decodeURIComponent(atob(e).split("").map((function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            }
            )).join(""))
        }
        ,
        e.isValidUrl = function(e) {
            return new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)
        }
        ,
        e.isBoolean = function(e) {
            return !1 === e || !0 === e
        }
        ,
        e.getNonceFromScriptTag = function() {
            try {
                var e = document.querySelectorAll('script[type="text/javascript"]')
                  , t = /\/cookie-consent\.js$/
                  , i = null;
                return e.forEach((function(e) {
                    t.test(e.src) && (i = e.getAttribute("data-nonce"))
                }
                )),
                i
            } catch (e) {
                return null
            }
        }
        ,
        e
    }(), s = i(2), r = i(3), c = i(4), l = i(5), p = i(6), d = i(7), u = i(8), _ = i(9), m = i(10), k = i(11), v = i(12), f = i(13), b = i(14), g = i(15), h = i(16), y = i(17), x = i(18), w = i(19), z = i(20), j = i(21), C = i(22), L = i(23), A = i(24), P = i(25), S = i(26), E = i(27), I = i(28), O = i(29), T = i(30), B = i(31), N = i(32), U = i(33), q = i(34), D = i(35), M = i(36), J = i(37), W = function() {
        function e(e) {
            this.cookieConsent = e,
            this.userLang = "en",
            this.initAvailableLanguages(),
            this.initDefaultTranslations(),
            this.detectUserLanguage()
        }
        return e.prototype.detectUserLanguage = function() {
            var e = "en";
            if (void 0 !== (e = void 0 !== navigator.languages ? navigator.languages[0] : navigator.language)) {
                if (e.indexOf("-") > 0) {
                    var t = e.split("-");
                    e = t[0]
                }
                this.cookieConsent.log("[i18n] Detected owner website language set as: " + e, "info")
            } else
                e = this.cookieConsent.ownerSiteLanguage;
            var i = e.toLowerCase.toString();
            this.availableTranslations[i] ? this.userLang = i : this.availableTranslations[this.cookieConsent.ownerSiteLanguage] ? this.userLang = this.cookieConsent.ownerSiteLanguage : this.userLang = "en"
        }
        ,
        e.prototype.initDefaultTranslations = function() {
            this.availableTranslations = {
                en: s,
                en_gb: r,
                de: c,
                fr: l,
                es: p,
                ca_es: d,
                it: u,
                sv: _,
                nl: m,
                pt: k,
                fi: v,
                hu: f,
                hr: b,
                cs: g,
                da: h,
                ro: y,
                sk: x,
                sl: w,
                pl: z,
                sr: j,
                et: C,
                lt: L,
                lv: A,
                ru: P,
                no: S,
                bg: E,
                el: I,
                he: O,
                uk: T,
                mk: B,
                cy: N,
                ja: U,
                ar: q,
                tr: D,
                zh_tw: M,
                oc: J
            },
            this.cookieConsent.log("[i18n] Default translations initialized", "info")
        }
        ,
        e.prototype.initAvailableLanguages = function() {
            this.availableLanguages = [{
                value: "en",
                title: "English"
            }, {
                value: "en_gb",
                title: "English (UK)"
            }, {
                value: "de",
                title: "German"
            }, {
                value: "fr",
                title: "French"
            }, {
                value: "es",
                title: "Spanish"
            }, {
                value: "ca_es",
                title: "Catalan"
            }, {
                value: "it",
                title: "Italian"
            }, {
                value: "sv",
                title: "Swedish"
            }, {
                value: "nl",
                title: "Dutch"
            }, {
                value: "pt",
                title: "Portuguese"
            }, {
                value: "fi",
                title: "Finnish"
            }, {
                value: "hu",
                title: "Hungarian"
            }, {
                value: "hr",
                title: "Croatian"
            }, {
                value: "cs",
                title: "Czech"
            }, {
                value: "da",
                title: "Danish"
            }, {
                value: "ro",
                title: "Romanian"
            }, {
                value: "sk",
                title: "Slovak"
            }, {
                value: "sl",
                title: "Slovenian"
            }, {
                value: "pl",
                title: "Polish"
            }, {
                value: "sr",
                title: "Serbian"
            }, {
                value: "et",
                title: "Estonian"
            }, {
                value: "lt",
                title: "Lithuanian"
            }, {
                value: "lv",
                title: "Latvian"
            }, {
                value: "ru",
                title: "Russian"
            }, {
                value: "no",
                title: "Norwegian"
            }, {
                value: "bg",
                title: "Bulgarian"
            }, {
                value: "el",
                title: "Greek"
            }, {
                value: "he",
                title: "Hebrew"
            }, {
                value: "uk",
                title: "Ukrainian"
            }, {
                value: "mk",
                title: "Macedonian"
            }, {
                value: "cy",
                title: "Welsh"
            }, {
                value: "ja",
                title: "Japanese"
            }, {
                value: "ar",
                title: "Arabic"
            }, {
                value: "tr",
                title: "Turkish"
            }, {
                value: "zh_tw",
                title: "Traditional Chinese (zh-TW)"
            }, {
                value: "oc",
                title: "Occitan"
            }],
            this.cookieConsent.log("[i18n] Default languages initialized", "info")
        }
        ,
        e.prototype.$t = function(e, t, i) {
            void 0 === i && (i = null);
            var n = this.availableTranslations[this.userLang][e][t];
            return "string" == typeof i ? n = n.replace("%s", i) : Array.isArray(i) && i.map((function(e, t) {
                var o = i[t];
                n = n.replace("%s", o)
            }
            )),
            n || ""
        }
        ,
        e
    }(), F = (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function i() {
            this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
        new i)
    }
    ), R = function(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i)
            return e;
        var n, o, a = i.call(e), s = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                s.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (i = a.return) && i.call(a)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return s
    }, V = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(R(arguments[t]));
        return e
    }, K = function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , i = t && e[t]
          , n = 0;
        if (i)
            return i.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && n >= e.length && (e = void 0),
                    {
                        value: e && e[n++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }, $ = function() {
        function e(e) {
            this.acceptedLevels = {},
            this.userAccepted = !1,
            this.consentLevelCookieName = "cookie_consent_level",
            this.consentAcceptedCookieName = "cookie_consent_user_accepted",
            this.cookieConsent = e,
            this.cookieConsent.log("CookieConsent initialized", "info"),
            this.checkIfUserAccepted(),
            this.getUserLevels()
        }
        return e.prototype.checkIfUserAccepted = function() {
            "true" === a.getCookie(this.consentAcceptedCookieName) && (this.userAccepted = !0)
        }
        ,
        e.prototype.markUserAccepted = function() {
            this.userAccepted = !0,
            !1 === this.cookieConsent.isDemo && a.setCookie(this.consentAcceptedCookieName, "true", this.cookieConsent.ownerDomain, this.cookieConsent.cookieSecure, this.cookieConsent.cookieDuration)
        }
        ,
        e.prototype.getUserLevels = function() {
            var e = a.getCookie(this.consentLevelCookieName)
              , t = {};
            try {
                t = JSON.parse(decodeURIComponent(e))
            } catch (e) {
                t = null
            }
            if (null === t)
                document.dispatchEvent(this.cookieConsent.events.cc_freshUser),
                this.acceptedLevels["strictly-necessary"] = !0,
                "implied" === this.cookieConsent.ownerConsentType ? (this.acceptedLevels.functionality = !0,
                this.acceptedLevels.tracking = !0,
                this.acceptedLevels.targeting = !0) : "express" === this.cookieConsent.ownerConsentType && (this.acceptedLevels.functionality = !1,
                this.acceptedLevels.tracking = !1,
                this.acceptedLevels.targeting = !1);
            else
                for (var i in this.cookieConsent.cookieLevels.cookieLevels) {
                    var n = this.cookieConsent.cookieLevels.cookieLevels[i].id;
                    !0 === t[n] ? this.acceptedLevels[n] = !0 : this.acceptedLevels[n] = !1
                }
            this.cookieConsent.log("Proposed accepted levels based on consent type are:", "info"),
            this.cookieConsent.log(this.acceptedLevels, "info", "table")
        }
        ,
        e.prototype.acceptAllCookieLevels = function() {
            var e = this;
            new Promise((function(t, i) {
                for (var n in e.cookieConsent.cookieLevels.cookieLevels) {
                    var o = e.cookieConsent.cookieLevels.cookieLevels[n].id;
                    e.acceptLevel(o, !1)
                }
                t(!0)
            }
            )).then((function() {
                document.dispatchEvent(e.cookieConsent.events.cc_scriptsAllLoaded),
                e.saveCookie()
            }
            ))
        }
        ,
        e.prototype.rejectAllCookieLevels = function() {
            var e = this;
            new Promise((function(t, i) {
                for (var n in e.cookieConsent.cookieLevels.cookieLevels) {
                    var o = e.cookieConsent.cookieLevels.cookieLevels[n].id;
                    "strictly-necessary" != o ? e.rejectLevel(o, !1) : "strictly-necessary" == o && e.acceptLevel(o, !1)
                }
                t(!0)
            }
            )).then((function() {
                e.saveCookie()
            }
            ))
        }
        ,
        e.prototype.loadAcceptedCookies = function() {
            for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                var t = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                !1 !== this.acceptedLevels[t] && this.cookieConsent.javascriptItems.enableScriptsByLevel(t)
            }
        }
        ,
        e.prototype.acceptLevel = function(e, t) {
            void 0 === t && (t = !0);
            this.cookieConsent.log("Accepted cookie level: " + e, "info"),
            this.acceptedLevels[e] = !0,
            t && this.saveCookie()
        }
        ,
        e.prototype.rejectLevel = function(e, t) {
            void 0 === t && (t = !0);
            this.cookieConsent.log("Rejected cookie level: " + e, "info"),
            this.acceptedLevels[e] = !1,
            t && this.saveCookie()
        }
        ,
        e.prototype.saveCookie = function() {
            var e = encodeURIComponent(JSON.stringify(this.acceptedLevels));
            a.setCookie(this.consentLevelCookieName, e, this.cookieConsent.ownerDomain, this.cookieConsent.cookieSecure, this.cookieConsent.cookieDuration),
            this.cookieConsent.log("Saved cookie with user consent level", "info");
            var t = this.cookieConsent.events.cc_userConsentSaved;
            return t.details = this.acceptedLevels,
            document.dispatchEvent(t),
            !0
        }
        ,
        e
    }(), H = function() {
        this.cc_noticeBannerShown = a.registerEvent("cc_noticeBannerShown"),
        this.cc_noticeBannerOkOrAgreePressed = a.registerEvent("cc_noticeBannerOkOrAgreePressed"),
        this.cc_noticeBannerRejectPressed = a.registerEvent("cc_noticeBannerRejectPressed"),
        this.cc_noticeBannerChangePreferencesPressed = a.registerEvent("cc_noticeBannerChangePreferencesPressed"),
        this.cc_preferencesCenterClosePressed = a.registerEvent("cc_preferencesCenterClosePressed"),
        this.cc_preferencesCenterSavePressed = a.registerEvent("cc_preferencesCenterSavePressed"),
        this.cc_userLanguageChanged = a.registerEvent("cc_userLanguageChanged"),
        this.cc_freshUser = a.registerEvent("cc_freshUser"),
        this.cc_userChangedConsent = a.registerEvent("cc_userChangedConsent"),
        this.cc_userConsentSaved = a.registerEvent("cc_userConsentSaved"),
        this.cc_scriptsAllLoaded = a.registerEvent("cc_scriptsAllLoaded"),
        this.cc_scriptsSpecificLoaded = a.registerEvent("cc_scriptsSpecificLoaded")
    }, G = function() {
        function e(e) {
            this.scripts = {},
            this.cookieConsent = e,
            this.cookieConsent.log("Cookie Consent initialized", "info"),
            this.readScripts()
        }
        return e.prototype.readScripts = function() {
            var e = document.querySelectorAll('script[type="text/plain"]');
            for (var t in e) {
                var i = e[t];
                "object" == typeof i && this._noticeScriptIfValid(i)
            }
        }
        ,
        e.prototype._noticeScriptIfValid = function(e) {
            var t = e.getAttribute("data-cookie-consent");
            !0 === a.searchObjectsArray(this.cookieConsent.cookieLevels.cookieLevels, "id", t) ? (this.cookieConsent.log("JavaScript script with valid data-cookie-consent tag found, but not loaded yet:", "info"),
            this.cookieConsent.log(e, "info"),
            void 0 === this.scripts[t] && (this.scripts[t] = []),
            this.scripts[t].push(e)) : this.cookieConsent.log("Invalid cookie-consent tag level for JavaScript script: " + t, "warning")
        }
        ,
        e.prototype.enableScriptsByLevel = function(e) {
            var t = this;
            new Promise((function(i, n) {
                var o = !1;
                if (!t.scripts[e])
                    return i(o);
                o = t.scripts[e].length > 0;
                var s = function(i) {
                    try {
                        var n = t.scripts[e][i]
                          , o = V(n.attributes)
                          , s = document.createElement("script");
                        s.setAttribute("type", "text/javascript"),
                        s.setAttribute("initial-data-cookie-consent", n.getAttribute("data-cookie-consent")),
                        null !== n.getAttribute("src") && s.setAttribute("src", n.getAttribute("src")),
                        o.reduce((function(e, t) {
                            switch (t.name) {
                            case "data-cookie-consent":
                            case "type":
                                break;
                            case "nonce":
                            case "data-nonce":
                                s.setAttribute("nonce", t.value);
                                break;
                            default:
                                s.setAttribute(t.name, t.value)
                            }
                        }
                        ), {}),
                        s.text = n.innerHTML,
                        a.appendChild("head", s),
                        n.parentNode.removeChild(n)
                    } catch (e) {
                        t.cookieConsent.log("Error while trying to enable a JavaScript script: " + e.message.toString(), "log")
                    }
                    delete t.scripts[e][i]
                };
                for (var r in t.scripts[e])
                    s(r);
                i(o)
            }
            )).then((function(i) {
                if (!0 === t.cookieConsent.forceCallbacksDispatching && t.cookieConsent.log("forceCallbacksDispatching is enabled", "log"),
                i || !0 === t.cookieConsent.forceCallbacksDispatching) {
                    var n = t.cookieConsent.events.cc_scriptsSpecificLoaded;
                    n.level = e,
                    document.dispatchEvent(n)
                }
            }
            ))
        }
        ,
        e
    }(), Z = function() {
        function e(e) {
            this.cookieConsent = e,
            this.cc_noticeBannerShown(),
            this.cc_noticeBannerOkOrAgreePressed(),
            this.cc_preferencesCenterClosePressed(),
            this.cc_noticeBannerRejectPressed(),
            this.cc_noticeBannerChangePreferencesPressed(),
            this.cc_userLanguageChanged(),
            this.cc_preferencesCenterSavePressed(),
            this.cc_freshUser(),
            this.cc_userChangedConsent(),
            this.cc_scriptsAllLoaded(),
            this.cc_userConsentSaved(),
            this.cc_scriptsSpecificLoaded()
        }
        return e.prototype.cc_noticeBannerShown = function() {
            var e = this;
            window.addEventListener("cc_noticeBannerShown", (function() {
                e.cookieConsent.log("cc_noticeBannerShown triggered", "event"),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerShown")
            }
            ))
        }
        ,
        e.prototype.cc_noticeBannerOkOrAgreePressed = function() {
            var e = this;
            document.addEventListener("cc_noticeBannerOkOrAgreePressed", (function() {
                this.userConsentTokenClass = new de(e.cookieConsent),
                e.cookieConsent.log("cc_noticeBannerOkOrAgreePressed triggered", "event"),
                e.cookieConsent.userConsent.acceptAllCookieLevels(),
                e.cookieConsent.userConsent.markUserAccepted(),
                e.cookieConsent.pageRefreshConfirmationButtons ? window.location.reload() : e.cookieConsent.userConsent.loadAcceptedCookies(),
                e.cookieConsent.noticeBannerContainer.hideNoticeBanner(),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerOkOrAgreePressed")
            }
            ))
        }
        ,
        e.prototype.cc_noticeBannerRejectPressed = function() {
            var e = this;
            window.addEventListener("cc_noticeBannerRejectPressed", (function() {
                this.userTokenClass = new de(e.cookieConsent),
                e.cookieConsent.log("cc_noticeBannerRejectPressed triggered", "event"),
                e.cookieConsent.userConsent.rejectAllCookieLevels(),
                e.cookieConsent.userConsent.markUserAccepted(),
                e.cookieConsent.noticeBannerContainer.hideNoticeBanner(),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerRejectPressed"),
                e.cookieConsent.pageRefreshConfirmationButtons && window.location.reload()
            }
            ))
        }
        ,
        e.prototype.cc_noticeBannerChangePreferencesPressed = function() {
            var e = this;
            window.addEventListener("cc_noticeBannerChangePreferencesPressed", (function() {
                e.cookieConsent.log("cc_noticeBannerChangePreferencesPressed triggered", "event"),
                e.cookieConsent.preferencesCenterContainer.showPreferencesCenter(),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerChangePreferencesPressed")
            }
            ))
        }
        ,
        e.prototype.cc_userLanguageChanged = function() {
            var e = this;
            window.addEventListener("cc_userLanguageChanged", (function() {
                e.cookieConsent.log("cc_userLanguageChanged triggered", "event"),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_userLanguageChanged")
            }
            ))
        }
        ,
        e.prototype.cc_preferencesCenterClosePressed = function() {
            var e = this;
            document.addEventListener("cc_preferencesCenterClosePressed", (function() {
                e.cookieConsent.log("cc_preferencesCenterClosePressed triggered", "event"),
                e.cookieConsent.preferencesCenterContainer.hidePreferencesCenter(),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_preferencesCenterClosePressed")
            }
            ))
        }
        ,
        e.prototype.cc_preferencesCenterSavePressed = function() {
            var e = this;
            window.addEventListener("cc_preferencesCenterSavePressed", (function() {
                e.userConsentTokenClass = new de(e.cookieConsent),
                e.cookieConsent.log("cc_preferencesCenterSavePressed triggered", "event"),
                e.cookieConsent.userConsent.markUserAccepted(),
                e.cookieConsent.userConsent.saveCookie(),
                e.cookieConsent.userConsent.loadAcceptedCookies(),
                e.cookieConsent.preferencesCenterContainer.hidePreferencesCenter(),
                e.cookieConsent.noticeBannerContainer.hideNoticeBanner(),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_preferencesCenterSavePressed"),
                e.cookieConsent.pageRefreshConfirmationButtons && window.location.reload()
            }
            ))
        }
        ,
        e.prototype.cc_freshUser = function() {
            var e = this;
            window.addEventListener("cc_freshUser", (function() {
                e.cookieConsent.log("cc_freshUser triggered", "event"),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_freshUser")
            }
            ))
        }
        ,
        e.prototype.cc_userChangedConsent = function() {
            var e = this;
            window.addEventListener("cc_userChangedConsent", (function() {
                e.cookieConsent.log("cc_userChangedConsent triggered", "event"),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_userChangedConsent")
            }
            ))
        }
        ,
        e.prototype.cc_userConsentSaved = function() {
            var e = this;
            window.addEventListener("cc_userConsentSaved", (function(t) {
                e.cookieConsent.log("cc_userConsentSaved triggered", "event"),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_userConsentSaved", t.details)
            }
            ))
        }
        ,
        e.prototype.cc_scriptsAllLoaded = function() {
            var e = this;
            window.addEventListener("cc_scriptsAllLoaded", (function() {
                e.cookieConsent.log("cc_scriptsAllLoaded triggered", "event"),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_scriptsAllLoaded")
            }
            ))
        }
        ,
        e.prototype.cc_scriptsSpecificLoaded = function() {
            var e = this;
            window.addEventListener("cc_scriptsSpecificLoaded", (function(t) {
                e.cookieConsent.log("cc_scriptsSpecificLoaded triggered", "event"),
                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_scriptsSpecificLoaded", t.level)
            }
            ))
        }
        ,
        e
    }(), Y = function() {
        function e(e, t) {
            this.cookieConsent = e,
            this.cookieConsent.log("CustomerCallbacks initialized", "info"),
            this.cookieConsent.log(t, "info"),
            this.customerCallbacksObject = t
        }
        return e.prototype.callCustomerCallbackByEvent = function(e, t) {
            void 0 === t && (t = null);
            try {
                var i = {
                    cc_noticeBannerShown: "notice_banner_loaded",
                    cc_noticeBannerOkOrAgreePressed: "i_agree_button_clicked",
                    cc_noticeBannerRejectPressed: "i_decline_button_clicked",
                    cc_noticeBannerChangePreferencesPressed: "change_my_preferences_button_clicked",
                    cc_scriptsAllLoaded: "scripts_all_loaded",
                    cc_scriptsSpecificLoaded: "scripts_specific_loaded",
                    cc_userConsentSaved: "user_consent_saved"
                }[e];
                if (this.cookieConsent.log("Calling Customer Callback: " + i, "info"),
                "function" == typeof this.customerCallbacksObject[i])
                    this.customerCallbacksObject[i](t);
                else {
                    var n = window[this.customerCallbacksObject[i]];
                    "function" == typeof n && n(t)
                }
            } catch (e) {}
        }
        ,
        e
    }(), Q = function() {
        function e(e) {
            this.cookieConsent = e,
            this.initPreferenceItems()
        }
        return e.prototype.languageChanged = function() {
            this.initPreferenceItems()
        }
        ,
        e.prototype.initPreferenceItems = function() {
            var e, t;
            this.preferenceItems = [{
                title: this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_title"),
                title_container: "title_your_privacy",
                content_container: "content_your_privacy",
                content: "<p class='cc-cp-body-content-entry-title'>" + this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_text_1") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_text_2") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_text_3") + "</p>"
            }],
            this.cookieLevels = [{
                id: "strictly-necessary",
                title: this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_1"),
                content: "<p class='cc-cp-body-content-entry-title'>" + this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_1") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_2") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_3") + "</p>"
            }, {
                id: "functionality",
                title: this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_1"),
                content: "<p class='cc-cp-body-content-entry-title'>" + this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_1") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_2") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_3") + "</p>"
            }, {
                id: "tracking",
                title: this.cookieConsent.i18n.$t("i18n", "pc_trck_text_1"),
                content: "<p class='cc-cp-body-content-entry-title'>" + this.cookieConsent.i18n.$t("i18n", "pc_trck_text_1") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_trck_text_2") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_trck_text_3") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_trck_text_4") + "</p>"
            }, {
                id: "targeting",
                title: this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_1"),
                content: "<p class='cc-cp-body-content-entry-title'>" + this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_1") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_2") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_3") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_4") + "</p>"
            }];
            try {
                for (var i = K(this.cookieLevels), n = i.next(); !n.done; n = i.next()) {
                    var o = n.value;
                    this.preferenceItems.push({
                        id: o.id,
                        title: o.title,
                        title_container: "title_" + o.id,
                        content_container: "content_" + o.id,
                        content: o.content
                    })
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (t = i.return) && t.call(i)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            this.preferenceItems.push({
                title: this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_1"),
                title_container: "title_more_information",
                content_container: "content_more_information",
                content: "<p class='cc-cp-body-content-entry-title'>" + this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_1") + "</p><p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_2") + "</p>"
            }),
            null !== this.cookieConsent.ownerWebsitePrivacyPolicyUrl && a.isValidUrl(this.cookieConsent.ownerWebsitePrivacyPolicyUrl) && (this.preferenceItems[this.preferenceItems.length - 1].content = this.preferenceItems[this.preferenceItems.length - 1].content + "<p class='cc-cp-body-content-entry-text'>" + this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_3", this.cookieConsent.ownerWebsitePrivacyPolicyUrl) + "</p>")
        }
        ,
        e
    }(), X = function() {
        function e(e) {
            this.preferencesCenterOverlay = null,
            this.cookieConsent = e
        }
        return e.prototype.listenToUserButtonToOpenPreferences = function(e) {
            var t = this
              , i = document.querySelectorAll(e);
            t.cookieConsent.log("userButton detected:", "info"),
            t.cookieConsent.log(i, "info", "table"),
            i && i.forEach((function(e) {
                e.addEventListener("click", (function() {
                    document.dispatchEvent(t.cookieConsent.events.cc_noticeBannerChangePreferencesPressed),
                    t.showPreferencesCenter()
                }
                ))
            }
            ))
        }
        ,
        e.prototype.showPreferencesCenter = function() {
            var e, t = this;
            null === this.preferencesCenterOverlay && (this.preferencesCenterOverlay = this.createPreferencesCenterOverlayAndDialog(),
            a.appendChild("body", this.preferencesCenterOverlay)),
            this.preferencesCenterOverlay.classList.add("termsfeed-com---is-visible"),
            t.cookieConsent.log("Preferences Center shown", "info"),
            this.preferencesCenterOverlay.setAttribute("role", "dialog"),
            this.preferencesCenterOverlay.setAttribute("aria-labelledby", "cc-pc-head-title-headline"),
            this.preferencesCenterOverlay.setAttribute("tabindex", "-1"),
            this.preferencesCenterOverlay.focus();
            var i = document.querySelector("#termsfeed-com---preferences-center")
              , n = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0]
              , o = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
              , s = o[o.length - 1];
            t.cookieConsent.log("preferencesCenterOverlayModal_firstFocusableElement: " + n, "info"),
            t.cookieConsent.log("preferencesCenterOverlayModal_focusableContent: " + o, "info"),
            t.cookieConsent.log("preferencesCenterOverlayModal_lastFocusableElement: " + s, "info"),
            document.addEventListener("keydown", (function(e) {
                var i, o;
                ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? document.activeElement === n && (t.cookieConsent.log("preferencesCenterOverlayModal_lastFocusableElement before focus: " + s, "info"),
                null === (i = s) || void 0 === i || i.focus(),
                e.preventDefault()) : document.activeElement === s && (t.cookieConsent.log("preferencesCenterOverlayModal_firstFocusableElement before focus: " + n, "info"),
                null === (o = n) || void 0 === o || o.focus(),
                e.preventDefault()))
            }
            )),
            t.cookieConsent.log("preferencesCenterOverlayModal_firstFocusableElement before focus: " + n, "info"),
            null === (e = n) || void 0 === e || e.focus(),
            this.preferencesCenterOverlay.classList.add("termsfeed-com---lang-" + t.cookieConsent.i18n.userLang)
        }
        ,
        e.prototype.hidePreferencesCenter = function() {
            this.preferencesCenterOverlay.classList.remove("termsfeed-com---is-visible"),
            this.cookieConsent.log("Preferences Center hidden", "info")
        }
        ,
        e.prototype.refreshPreferencesCenter = function() {
            if (null !== this.preferencesCenterOverlay)
                return this.preferencesCenterOverlay.parentNode.removeChild(this.preferencesCenterOverlay),
                this.preferencesCenterOverlay = null,
                this.showPreferencesCenter()
        }
        ,
        e.prototype.createPreferencesCenterOverlayAndDialog = function() {
            var e = this
              , t = document.createElement("div");
            t.classList.add("termsfeed-com---pc-overlay"),
            t.classList.add(e.cookieConsent.colorPalette.getClass()),
            t.classList.add("termsfeed-com---reset"),
            t.id = "termsfeed-com---preferences-center",
            t.setAttribute("id", "termsfeed-com---preferences-center");
            var i = document.createElement("div");
            i.classList.add("termsfeed-com---pc-dialog");
            var n = document.createElement("div");
            n.classList.add("cc-pc-container");
            var o = document.createElement("div");
            o.classList.add("cc-pc-head");
            var s = document.createElement("div");
            if (s.classList.add("cc-pc-head-title"),
            e.cookieConsent.ownerWebsiteName.length > 2) {
                var r = document.createElement("p");
                r.classList.add("cc-pc-head-title-text"),
                r.innerText = e.cookieConsent.ownerWebsiteName,
                a.appendChild(s, r)
            }
            var c = document.createElement("p");
            c.classList.add("cc-pc-head-title-headline"),
            c.setAttribute("id", "cc-pc-head-title-headline"),
            c.innerHTML = e.cookieConsent.i18n.$t("i18n", "pc_title"),
            a.appendChild(s, c);
            var l = document.createElement("div");
            l.classList.add("cc-pc-head-lang");
            var p = this.obtainLanguageSelector();
            a.appendChild(l, p);
            var d = document.createElement("button");
            d.classList.add("cc-pc-head-close"),
            d.innerHTML = "&#x2715;",
            d.addEventListener("click", (function() {
                document.dispatchEvent(e.cookieConsent.events.cc_preferencesCenterClosePressed)
            }
            )),
            a.appendChild(o, s),
            a.appendChild(o, l),
            !1 === e.cookieConsent.ownerPreferencesCenterCloseButtonHide && a.appendChild(l, d, "afterbegin");
            var u = document.createElement("div");
            u.classList.add("cc-cp-body");
            var _ = this.getMenuContainer()
              , m = this.getContentContainer();
            a.appendChild(u, _),
            a.appendChild(u, m);
            var k = this.getFooterContainer();
            return a.appendChild(n, o),
            a.appendChild(n, u),
            a.appendChild(n, k),
            a.appendChild(i, n),
            a.appendChild(t, i),
            t
        }
        ,
        e.prototype.obtainLanguageSelector = function() {
            var e = this
              , t = document.createElement("select");
            return t.classList.add("cc-pc-head-lang-select"),
            [].forEach.call(e.cookieConsent.i18n.availableLanguages, (function(i) {
                var n = document.createElement("option");
                n.text = i.title,
                n.value = i.value,
                e.cookieConsent.i18n.userLang === n.value && n.setAttribute("selected", "selected"),
                t.add(n)
            }
            )),
            t.addEventListener("change", (function() {
                e.cookieConsent.i18n.userLang = t.value,
                e.cookieConsent.cookieLevels.languageChanged(),
                e.refreshPreferencesCenter(),
                document.dispatchEvent(e.cookieConsent.events.cc_userLanguageChanged)
            }
            )),
            t
        }
        ,
        e.prototype.getContentContainer = function() {
            var e = this
              , t = document.createElement("div");
            t.classList.add("cc-cp-body-content");
            var i = 0;
            return e.cookieConsent.cookieLevels.preferenceItems.forEach((function(n) {
                var o = document.createElement("div");
                if (o.classList.add("cc-cp-body-content-entry"),
                o.setAttribute("id", n.content_container),
                o.setAttribute("role", "tabpanel"),
                o.setAttribute("aria-labelledby", n.title_container),
                o.setAttribute("hidden", ""),
                o.setAttribute("tabindex", "0"),
                o.setAttribute("content_layout", n.content_container),
                o.setAttribute("active", "false"),
                o.innerHTML = n.content,
                0 === i && (o.setAttribute("active", "true"),
                o.removeAttribute("hidden")),
                i++,
                n.id) {
                    var s = e._getLevelCheckbox(n);
                    a.appendChild(o, s)
                }
                a.appendChild(t, o)
            }
            )),
            t
        }
        ,
        e.prototype.getMenuContainer = function() {
            var e = this
              , t = document.createElement("ul");
            t.classList.add("cc-cp-body-tabs"),
            t.setAttribute("role", "tablist"),
            t.setAttribute("aria-label", "Menu");
            var i = 0;
            return e.cookieConsent.cookieLevels.preferenceItems.forEach((function(n) {
                var o = document.createElement("li");
                o.classList.add("cc-cp-body-tabs-item");
                var s = document.createElement("button");
                s.classList.add("cc-cp-body-tabs-item-link"),
                s.setAttribute("id", n.title_container),
                s.setAttribute("role", "tab"),
                s.setAttribute("aria-selected", "false"),
                s.setAttribute("aria-controls", n.content_container),
                s.setAttribute("tabindex", "-1"),
                s.setAttribute("t", n.content_container),
                s.innerHTML = n.title,
                0 === i && (o.setAttribute("active", "true"),
                s.setAttribute("aria-selected", "true"),
                s.setAttribute("tabindex", "0")),
                i++,
                s.addEventListener("click", (function(t) {
                    t.preventDefault(),
                    e.cookieConsent.log("Preferences Center tab item clicked: " + n.title, "info");
                    var i = document.querySelectorAll('li[active="true"]');
                    [].forEach.call(i, (function(e) {
                        e.setAttribute("active", "false"),
                        e.firstElementChild.setAttribute("aria-selected", "false"),
                        e.firstElementChild.setAttribute("tabindex", "-1")
                    }
                    )),
                    o.setAttribute("active", "true"),
                    o.firstElementChild.setAttribute("aria-selected", "true"),
                    o.firstElementChild.setAttribute("tabindex", "0");
                    try {
                        var a = document.querySelectorAll("div[content_layout]");
                        [].forEach.call(a, (function(e) {
                            e.setAttribute("active", "false"),
                            e.setAttribute("hidden", "")
                        }
                        ));
                        var s = document.querySelector('div[content_layout="' + n.content_container + '"]');
                        s.setAttribute("active", "true"),
                        s.removeAttribute("hidden")
                    } catch (t) {}
                }
                ));
                var r = 0
                  , c = document.getElementsByClassName("cc-cp-body-tabs-item-link");
                t.addEventListener("keydown", (function(e) {
                    "ArrowDown" !== e.key && "ArrowUp" !== e.key && "ArrowLeft" !== e.key && "ArrowRight" !== e.key || (c[r].setAttribute("tabindex", "-1"),
                    "ArrowDown" === e.key || "ArrowRight" === e.key ? ++r >= c.length && (r = 0) : "ArrowUp" !== e.key && "ArrowLeft" !== e.key || --r < 0 && (r = c.length - 1),
                    c[r].setAttribute("tabindex", "0"),
                    c[r].focus())
                }
                )),
                a.appendChild(o, s),
                a.appendChild(t, o)
            }
            )),
            t
        }
        ,
        e.prototype.getFooterContainer = function() {
            var e = this
              , t = document.createElement("div");
            t.classList.add("cc-cp-foot");
            var i = document.createElement("div");
            i.classList.add("cc-cp-foot-byline"),
            i.innerHTML = a.magicTransform("Q29va2llIENvbnNlbnQgYnkgPGEgaHJlZj0iaHR0cHM6Ly93d3cudGVybXNmZWVkLmNvbS9jb29raWUtY29uc2VudC8iIHRhcmdldD0iX2JsYW5rIj5UZXJtc0ZlZWQ8L2E+");
            var n = document.createElement("div");
            n.classList.add("cc-cp-foot-button");
            var o = document.createElement("button");
            return o.classList.add("cc-cp-foot-save"),
            o.innerHTML = e.cookieConsent.i18n.$t("i18n", "pc_save"),
            o.addEventListener("click", (function() {
                document.dispatchEvent(e.cookieConsent.events.cc_preferencesCenterSavePressed)
            }
            )),
            a.appendChild(n, o),
            a.appendChild(t, i),
            a.appendChild(t, n),
            t
        }
        ,
        e.prototype._getLevelCheckbox = function(e) {
            var t = this
              , i = document.createElement("div");
            if (i.classList.add("cc-custom-checkbox"),
            "strictly-necessary" !== e.id) {
                var n = t.cookieConsent.userConsent.acceptedLevels
                  , o = document.createElement("input");
                o.setAttribute("cookie_consent_toggler", "true"),
                o.setAttribute("type", "checkbox"),
                o.setAttribute("class", "cc-custom-checkbox"),
                o.setAttribute("id", e.id),
                o.setAttribute("name", e.id),
                o.setAttribute("aria-labelledby", e.id + "_label"),
                (s = document.createElement("label")).setAttribute("for", e.id),
                s.setAttribute("id", e.id + "_label"),
                n[e.id] ? (o.setAttribute("checked", "checked"),
                o.setAttribute("aria-checked", "true"),
                s.setAttribute("class", "is-active"),
                s.innerHTML = t.cookieConsent.i18n.$t("i18n", "active")) : (o.setAttribute("aria-checked", "false"),
                s.setAttribute("class", "is-inactive"),
                s.innerHTML = t.cookieConsent.i18n.$t("i18n", "inactive")),
                o.addEventListener("change", (function() {
                    var i = o.checked
                      , n = e.id
                      , a = document.querySelector('label[for="' + n + '"]');
                    t.cookieConsent.log("User changed cookie level [" + n + "], new status: " + i, "info"),
                    document.dispatchEvent(t.cookieConsent.events.cc_userChangedConsent),
                    !0 === i ? (t.cookieConsent.userConsent.acceptLevel(n, !1),
                    a.innerHTML = t.cookieConsent.i18n.$t("i18n", "active")) : (t.cookieConsent.userConsent.rejectLevel(n, !1),
                    a.innerHTML = t.cookieConsent.i18n.$t("i18n", "inactive"))
                }
                )),
                o.addEventListener("keypress", (function(e) {
                    if (" " === e.key || "Spacebar" === e.key)
                        switch (o.getAttribute("aria-checked")) {
                        case "true":
                            o.setAttribute("aria-checked", "false");
                            break;
                        case "false":
                            o.setAttribute("aria-checked", "true")
                        }
                }
                )),
                a.appendChild(i, o),
                a.appendChild(i, s)
            } else {
                var s, r = document.createElement("input");
                r.setAttribute("cookie_consent_toggler", "true"),
                r.setAttribute("type", "checkbox"),
                r.setAttribute("checked", "checked"),
                r.setAttribute("aria-checked", "true"),
                r.setAttribute("disabled", "disabled"),
                r.setAttribute("class", "cc-custom-checkbox"),
                r.setAttribute("id", e.id),
                r.setAttribute("name", e.id),
                r.setAttribute("aria-labelledby", e.id + "_label"),
                r.setAttribute("tabindex", "0"),
                (s = document.createElement("label")).setAttribute("for", e.id),
                s.setAttribute("id", e.id + "_label"),
                s.innerHTML = t.cookieConsent.i18n.$t("i18n", "always_active"),
                a.appendChild(i, r),
                a.appendChild(i, s)
            }
            return i
        }
        ,
        e
    }(), ee = function() {
        function e(e) {
            this.noticeBanner = null,
            this.noticeBannerOverlay = null,
            this.noticeBannerExtraCss = [],
            this.cookieConsent = e,
            this.noticeBannerExtraCss.push(e.colorPalette.getClass())
        }
        return e.prototype.initNoticeBanner = function() {
            var e, t;
            if (null === this.noticeBanner && (this.noticeBanner = this.createNoticeBanner()),
            t = "afterbegin" === this.cookieConsent.ownerNoticeBannerAppendContentPosition || "beforeend" === this.cookieConsent.ownerNoticeBannerAppendContentPosition ? this.cookieConsent.ownerNoticeBannerAppendContentPosition : "afterbegin",
            a.appendChild("body", this.noticeBanner, t),
            this.cookieConsent.log("Notice Banner shown " + t, "info"),
            document.dispatchEvent(this.cookieConsent.events.cc_noticeBannerShown),
            "interstitial" === this.cookieConsent.ownerNoticeBannerType || "standalone" === this.cookieConsent.ownerNoticeBannerType) {
                var i = document.querySelector("#termsfeed-com---nb")
                  , n = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0]
                  , o = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
                  , s = o[o.length - 1];
                document.addEventListener("keydown", (function(e) {
                    var t, i;
                    ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? document.activeElement === n && (null === (t = s) || void 0 === t || t.focus(),
                    e.preventDefault()) : document.activeElement === s && (null === (i = n) || void 0 === i || i.focus(),
                    e.preventDefault()))
                }
                )),
                null === (e = n) || void 0 === e || e.focus()
            }
            return !0
        }
        ,
        e.prototype.hideNoticeBanner = function() {
            try {
                this.noticeBanner.classList.add("termsfeed-com---is-hidden"),
                this.cookieConsent.log("Notice Banner hidden", "info")
            } catch (e) {}
        }
        ,
        e.prototype.createNoticeBanner = function() {
            var e, t, i = document.createElement("div");
            if (i.classList.add("termsfeed-com---reset"),
            i.classList.add("termsfeed-com---nb"),
            i.setAttribute("id", "termsfeed-com---nb"),
            i.setAttribute("role", "dialog"),
            i.setAttribute("aria-modal", "true"),
            i.setAttribute("aria-labelledby", "cc-nb-title"),
            i.setAttribute("aria-describedby", "cc-nb-text"),
            this.noticeBannerExtraCss.length)
                try {
                    for (var n = K(this.noticeBannerExtraCss), o = n.next(); !o.done; o = n.next()) {
                        var s = o.value;
                        i.classList.add(s)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
            if (i.classList.add("termsfeed-com---lang-" + this.cookieConsent.i18n.userLang),
            a.appendChild(i, this.createNoticeBannerContent()),
            "interstitial" === this.cookieConsent.ownerNoticeBannerType) {
                var r = document.createElement("div");
                return r.classList.add("termsfeed-com---nb-interstitial-overlay"),
                a.appendChild(r, i),
                r
            }
            return i
        }
        ,
        e.prototype.createNoticeBannerContent = function() {
            var e = this
              , t = document.createElement("div");
            t.classList.add("cc-nb-main-container");
            var i = document.createElement("div");
            i.classList.add("cc-nb-title-container");
            var n = document.createElement("p");
            n.classList.add("cc-nb-title"),
            n.setAttribute("id", "cc-nb-title"),
            n.innerText = e.cookieConsent.i18n.$t("i18n", "nb_title"),
            a.appendChild(i, n);
            var o = document.createElement("div");
            o.classList.add("cc-nb-text-container");
            var s = document.createElement("p");
            s.classList.add("cc-nb-text"),
            s.setAttribute("id", "cc-nb-text"),
            s.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_text");
            var r = document.createElement("span");
            r.classList.add("cc-nb-text-urls"),
            r.innerHTML = " ";
            var c = document.createElement("span");
            c.classList.add("cc-nb-text-urls-privacy"),
            c.setAttribute("role", "link");
            var l = document.createElement("span");
            l.classList.add("cc-nb-text-urls-impressum"),
            l.setAttribute("role", "link");
            var p = document.createElement("span");
            p.classList.add("cc-nb-text-urls-separator"),
            p.innerHTML = " | ",
            e.cookieConsent.noticeBannerInsertLegalUrls && (e.cookieConsent.ownerWebsitePrivacyPolicyUrl && e.cookieConsent.ownerWebsiteImpressumUrl ? a.isValidUrl(e.cookieConsent.ownerWebsitePrivacyPolicyUrl) && a.isValidUrl(e.cookieConsent.ownerWebsiteImpressumUrl) && (c.innerHTML = e.cookieConsent.i18n.$t("i18n", "privacy_policy", e.cookieConsent.ownerWebsitePrivacyPolicyUrl),
            l.innerHTML = e.cookieConsent.i18n.$t("i18n", "impressum", e.cookieConsent.ownerWebsiteImpressumUrl),
            a.appendChild(r, c),
            a.appendChild(c, p),
            a.appendChild(r, l)) : e.cookieConsent.ownerWebsitePrivacyPolicyUrl && a.isValidUrl(e.cookieConsent.ownerWebsitePrivacyPolicyUrl) ? (c.innerHTML = e.cookieConsent.i18n.$t("i18n", "privacy_policy", e.cookieConsent.ownerWebsitePrivacyPolicyUrl),
            a.appendChild(r, c)) : e.cookieConsent.ownerWebsiteImpressumUrl && a.isValidUrl(e.cookieConsent.ownerWebsiteImpressumUrl) && (l.innerHTML = e.cookieConsent.i18n.$t("i18n", "impressum", e.cookieConsent.ownerWebsiteImpressumUrl),
            a.appendChild(r, l)),
            a.appendChild(s, r)),
            a.appendChild(o, s);
            var d = document.createElement("div");
            d.classList.add("cc-nb-buttons-container");
            var u = document.createElement("button");
            u.classList.add("cc-nb-okagree"),
            u.setAttribute("role", "button"),
            "express" == e.cookieConsent.ownerConsentType ? u.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_agree") : u.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_ok"),
            u.addEventListener("click", (function() {
                document.dispatchEvent(e.cookieConsent.events.cc_noticeBannerOkOrAgreePressed)
            }
            )),
            a.appendChild(d, u);
            var _ = document.createElement("button");
            _.classList.add("cc-nb-reject"),
            _.setAttribute("role", "button"),
            _.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_reject"),
            _.addEventListener("click", (function() {
                document.dispatchEvent(e.cookieConsent.events.cc_noticeBannerRejectPressed)
            }
            )),
            "express" == e.cookieConsent.ownerConsentType && !1 === e.cookieConsent.ownerNoticeBannerRejectButtonHide && a.appendChild(d, _);
            var m = document.createElement("button");
            return m.classList.add("cc-nb-changep"),
            m.setAttribute("role", "button"),
            m.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_changep"),
            m.addEventListener("click", (function() {
                document.dispatchEvent(e.cookieConsent.events.cc_noticeBannerChangePreferencesPressed)
            }
            )),
            a.appendChild(d, m),
            a.appendChild(t, i),
            a.appendChild(t, o),
            a.appendChild(t, d),
            t
        }
        ,
        e
    }(), te = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.noticeBannerExtraCss.push("termsfeed-com---nb-simple"),
            i
        }
        return F(t, e),
        t
    }(ee), ie = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.noticeBannerExtraCss.push("termsfeed-com---nb-headline"),
            i
        }
        return F(t, e),
        t
    }(ee), ne = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.noticeBannerExtraCss.push("termsfeed-com---nb-interstitial"),
            i
        }
        return F(t, e),
        t
    }(ee), oe = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.noticeBannerExtraCss.push("termsfeed-com---nb-standalone"),
            i
        }
        return F(t, e),
        t
    }(ee), ae = function() {
        function e(e) {
            e.log("ConsentType main class initialized", "info")
        }
        return e.prototype.loadInitialCookiesForNewUser = function() {}
        ,
        e
    }(), se = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.cookieConsent = t,
            i
        }
        return F(t, e),
        t.prototype.loadInitialCookiesForNewUser = function() {
            var e = this;
            e.cookieConsent.log("consentImplied loadInitialCookiesForNewUser triggered", "info");
            var t = !1
              , i = !1
              , n = !1;
            if (null !== e.cookieConsent.ownerPageLoadConsentLevels)
                for (var o in e.cookieConsent.ownerPageLoadConsentLevels) {
                    var a = e.cookieConsent.ownerPageLoadConsentLevels[o];
                    "functionality" == a && (t = !0),
                    "tracking" == a && (i = !0),
                    "targeting" == a && (n = !0)
                }
            else
                t = !0,
                i = !0,
                n = !0;
            new Promise((function(o, a) {
                e.cookieConsent.javascriptItems.enableScriptsByLevel("strictly-necessary"),
                t ? (e.cookieConsent.userConsent.acceptLevel("functionality", !1),
                e.cookieConsent.javascriptItems.enableScriptsByLevel("functionality")) : e.cookieConsent.userConsent.rejectLevel("functionality", !1),
                i ? (e.cookieConsent.userConsent.acceptLevel("tracking", !1),
                e.cookieConsent.javascriptItems.enableScriptsByLevel("tracking")) : e.cookieConsent.userConsent.rejectLevel("tracking", !1),
                n ? (e.cookieConsent.userConsent.acceptLevel("targeting", !1),
                e.cookieConsent.javascriptItems.enableScriptsByLevel("targeting")) : e.cookieConsent.userConsent.rejectLevel("targeting", !1),
                o(!0)
            }
            )).then((function() {
                e.cookieConsent.userConsent.saveCookie(),
                e.cookieConsent.log("consentImplied loadInitialCookiesForNewUser: strictly-necessary (true), functionality (" + t + "), tracking (" + i + "), targeting (" + n + ")", "info")
            }
            ))
        }
        ,
        t
    }(ae), re = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.cookieConsent = t,
            i
        }
        return F(t, e),
        t.prototype.loadInitialCookiesForNewUser = function() {
            var e = this;
            e.cookieConsent.log("consentExpress loadInitialCookiesForNewUser triggered", "info");
            var t = !1
              , i = !1
              , n = !1;
            if (null !== e.cookieConsent.ownerPageLoadConsentLevels)
                for (var o in e.cookieConsent.ownerPageLoadConsentLevels) {
                    var a = e.cookieConsent.ownerPageLoadConsentLevels[o];
                    "functionality" == a && (t = !0),
                    "tracking" == a && (i = !0),
                    "targeting" == a && (n = !0)
                }
            else
                t = !1,
                i = !1,
                n = !1;
            new Promise((function(o, a) {
                e.cookieConsent.javascriptItems.enableScriptsByLevel("strictly-necessary"),
                t ? (e.cookieConsent.userConsent.acceptLevel("functionality", !1),
                e.cookieConsent.javascriptItems.enableScriptsByLevel("functionality")) : e.cookieConsent.userConsent.rejectLevel("functionality", !1),
                i ? (e.cookieConsent.userConsent.acceptLevel("tracking", !1),
                e.cookieConsent.javascriptItems.enableScriptsByLevel("tracking")) : e.cookieConsent.userConsent.rejectLevel("tracking", !1),
                n ? (e.cookieConsent.userConsent.acceptLevel("targeting", !1),
                e.cookieConsent.javascriptItems.enableScriptsByLevel("targeting")) : e.cookieConsent.userConsent.rejectLevel("targeting", !1),
                o(!0)
            }
            )).then((function() {
                e.cookieConsent.userConsent.saveCookie(),
                e.cookieConsent.log("consentExpress loadInitialCookiesForNewUser: strictly-necessary (true), functionality (" + t + "), tracking (" + i + "), targeting (" + n + ")", "info")
            }
            ))
        }
        ,
        t
    }(ae), ce = function() {
        function e(e) {
            this.cookieConsent = e
        }
        return e.prototype.getClass = function() {
            return "termsfeed-com---palette-light"
        }
        ,
        e
    }(), le = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.cookieConsent = t,
            i
        }
        return F(t, e),
        t.prototype.getClass = function() {
            return "termsfeed-com---palette-dark"
        }
        ,
        t
    }(ce), pe = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.cookieConsent = t,
            i
        }
        return F(t, e),
        t.prototype.getClass = function() {
            return "termsfeed-com---palette-light"
        }
        ,
        t
    }(ce), de = function() {
        function e(e) {
            this.USER_TOKEN_COOKIE_NAME = "cookie_consent_user_consent_token",
            this.cookieConsent = e,
            this.initUserConsentToken()
        }
        return e.prototype.initUserConsentToken = function() {
            var e = V("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
              , t = V("abcdefghijklmnopqrstuvwxyz")
              , i = V("0123456789")
              , n = V(e, i, t);
            this.cookieConsent.userConsentToken = a.getCookie(this.USER_TOKEN_COOKIE_NAME) || this.cookieConsent.configUserConsentToken || function(e, t) {
                return V(Array(t)).map((function(t) {
                    return e[Math.random() * e.length | 0]
                }
                )).join("")
            }(n, 12),
            a.setCookie(this.USER_TOKEN_COOKIE_NAME, this.cookieConsent.userConsentToken, this.cookieConsent.ownerDomain, this.cookieConsent.cookieSecure, this.cookieConsent.cookieDuration)
        }
        ,
        e
    }(), ue = function() {
        function e(e) {
            switch (this.forceCallbacksDispatching = !0,
            this.configUserConsentToken = void 0,
            this.userConsentToken = void 0,
            this.debug = !1,
            this.ownerConsentType = e.consent_type || "express",
            this.ownerWebsiteName = e.website_name || "",
            this.ownerWebsitePrivacyPolicyUrl = e.website_privacy_policy_url || null,
            this.ownerColorPalette = e.palette || "light",
            this.ownerSiteLanguage = e.language || "en",
            this.ownerDomain = e.cookie_domain || "",
            this.ownerWebsiteImpressumUrl = e.website_impressum_url || null,
            this.noticeBannerInsertLegalUrls = e.notice_banner_insert_legal_urls || !1,
            this.cookieSecure = e.cookie_secure || !1,
            this.ownerPageLoadConsentLevels = e.page_load_consent_levels || null,
            this.ownerNoticeBannerType = e.notice_banner_type || "headline",
            this.ownerNoticeBannerRejectButtonHide = e.notice_banner_reject_button_hide || !1,
            this.ownerNoticeBannerAppendContentPosition = e.notice_banner_append || "afterbegin",
            this.ownerOpenPreferencesCenterSelector = e.open_preferences_center_selector || "#open_preferences_center",
            this.ownerPreferencesCenterCloseButtonHide = e.preferences_center_close_button_hide || !1,
            this.pageRefreshConfirmationButtons = e.page_refresh_confirmation_buttons || !1,
            this.configUserConsentToken = e.user_consent_token || null,
            this.cookieDuration = parseInt(e.cookie_duration || 3650),
            this.userDefinedNonce = a.getNonceFromScriptTag(),
            this.isDemo = "true" == e.demo,
            this.debug = "true" == e.debug,
            this.ownerConsentType) {
            default:
            case "express":
                this.consentType = new re(this);
                break;
            case "implied":
                this.consentType = new se(this),
                this.userConsentTokenClass = new de(this)
            }
            switch (this.ownerColorPalette) {
            default:
            case "dark":
                this.colorPalette = new le(this);
                break;
            case "light":
                this.colorPalette = new pe(this)
            }
            switch (this.ownerNoticeBannerType) {
            default:
            case "simple":
                this.noticeBannerContainer = new te(this);
                break;
            case "headline":
                this.noticeBannerContainer = new ie(this);
                break;
            case "interstitial":
                this.noticeBannerContainer = new ne(this);
                break;
            case "standalone":
                this.noticeBannerContainer = new oe(this)
            }
            this.events = new H,
            this.eventsListeners = new Z(this),
            this.customerCallbacks = new Y(this,e.callbacks),
            this.forceCallbacksDispatching = e.callbacks_force || !1,
            this.i18n = new W(this),
            this.cookieLevels = new Q(this),
            this.userConsent = new $(this),
            this.javascriptItems = new G(this),
            this.preferencesCenterContainer = new X(this),
            null !== this.ownerOpenPreferencesCenterSelector && this.preferencesCenterContainer.listenToUserButtonToOpenPreferences(this.ownerOpenPreferencesCenterSelector),
            !0 === this.userConsent.userAccepted ? (this.userConsent.loadAcceptedCookies(),
            !0 === this.isDemo && this.noticeBannerContainer.initNoticeBanner()) : (this.noticeBannerContainer.initNoticeBanner(),
            this.consentType.loadInitialCookiesForNewUser())
        }
        return e.prototype.log = function(e, t, i) {
            if (void 0 === i && (i = "log"),
            !0 === this.debug) {
                var n = (new Date).toISOString();
                console.log("[" + n + "][" + t + "] " + e)
            }
        }
        ,
        e.prototype.openPreferencesCenter = function() {
            this.preferencesCenterContainer.showPreferencesCenter()
        }
        ,
        e
    }(), _e = function(e) {
        return o = new ue(e),
        window.cookieconsent.openPreferencesCenter = function() {
            o.openPreferencesCenter()
        }
        ,
        o
    }
}
])
