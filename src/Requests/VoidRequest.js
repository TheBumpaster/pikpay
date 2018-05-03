/** @var {{TheBumpaster: {PikPay: {Requests: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Requests');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var HttpClient = require('httpclient');
    var Gateway = N.TheBumpaster.PikPay.Gateway;
    var VoidResponse = N.TheBumpaster.PikPay.Responses.VoidResponse;
    var VoidRequest = this.VoidRequest = (function(parent) {
        function VoidRequest(httpClient, gateway, params) {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = true;
            parent.call(this);
            this.uri = null;
            this.params = null;
            this.httpClient = null;
            this.httpRequest = null;
            this.response = null;
            if (__isInheritance == false) {
                this.__construct(httpClient, gateway, params);
            }
        }
        __extends(VoidRequest, parent);
        VoidRequest.prototype.__construct = function(httpClient, gateway, params) {
            if (!httpClient instanceof HttpClient) throw new Error('bad param type');
            if (!gateway instanceof Gateway) throw new Error('bad param type');
            if (!isArray(params)) throw new Error('bad param type');
            parent.prototype.__construct.call(this, httpClient, gateway, "void", params);
            this.uri = "/transactions/" + params["order-number"] + "/void.xml";
            this.httpClient = httpClient;
            this.params = params;
            this.send();
        };
        VoidRequest.prototype.response = function() {
            return new VoidResponse(this.response);
        };
        VoidRequest.class = 'TheBumpaster\\PikPay\\Requests\\VoidRequest';
        return VoidRequest;
    })(Request);
}).call(N.TheBumpaster.PikPay.Requests);
