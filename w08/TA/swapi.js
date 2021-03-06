var swapiModule = function () {
    var s = "https://swapi.co/api/";

    function i(e, t) {
        return fetch(e).then(function (e) {
            return e.json()
        }).then(function (e) {
            return "function" == typeof t && t(e), e
        }).catch(function (e) {
            console.log(e)
        })
    }

    function e(n) {
        return function (e, t) {
            return i(s + n + "/" + e + "/", t)
        }
    }

    function t(n) {
        return function () {
            var e = arguments[0],
                t = arguments[1];
            return i(0 < e ? s + n + "/?page=" + e : s + n + "/", t)
        }
    }
    return {
        getResources: function (e) {
            return i(s, e)
        },
        getPerson: e("people"),
        getPeople: t("people"),
        getFilm: e("films"),
        getFilms: t("films"),
        getPlanet: e("planets"),
        getPlanets: t("planets"),
        getSpecies: e("species"),
        getAllSpecies: t("species"),
        getStarship: e("starships"),
        getStarships: t("starships"),
        getVehicle: e("vehicles"),
        getVehicles: t("vehicles")
    }
}();