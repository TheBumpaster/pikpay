/** @var {{TheBumpaster: {PikPay: {Responses: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Responses');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var HttpResponse = require('response-handler');
    var Response = this.Response = (function() {
        function Response(httpResponse) {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = false;
            this.httpResponse = null;
            if (__isInheritance == false) {
                this.__construct(httpResponse);
            }
        }
        Response.prototype.__construct = function(httpResponse) {
            if (!httpResponse instanceof HttpResponse) throw new Error('bad param type');
            this.httpResponse = httpResponse;
        };
        Response.prototype.removeStatusCode = function(status) {
            return status = preg_replace("/[0-9]+/", "", status);
        };
        Response.class = 'TheBumpaster\\PikPay\\Responses\\Response';
        return Response;
    })();
}).call(N.TheBumpaster.PikPay.Responses);
