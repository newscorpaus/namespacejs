/**
 * Created by cahillr on 6/24/16.
 */
(function(namespace) {
    var http = namespace('SPP.Foundation.Http');

    http.getQuery = function ( field, url ) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    }
})(window.spp.namespace);