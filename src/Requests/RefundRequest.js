/** @var {{TheBumpaster: {PikPay: {Requests: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Requests');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var HttpClient = require('httpclient');
    var Gateway = N.TheBumpaster.PikPay.Gateway;
    var RefundResponse = N.TheBumpaster.PikPay.Responses.RefundResponse;
    var RefundRequest = this.RefundRequest = (function(parent) {
        function RefundRequest(httpClient, gateway, params) {
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
        __extends(RefundRequest, parent);
        RefundRequest.prototype.__construct = function(httpClient, gateway, params) {
            if (!httpClient instanceof HttpClient) throw new Error('bad param type');
            if (!gateway instanceof Gateway) throw new Error('bad param type');
            if (!isArray(params)) throw new Error('bad param type');
            parent.prototype.__construct.call(this, httpClient, gateway, "refund", params);
            this.uri = "/transactions/" + params["order-number"] + "/refund.xml";
            this.httpClient = httpClient;
            this.params = params;
            this.send();
        };
        RefundRequest.prototype.response = function() {
            return new RefundResponse(this.response);
        };
        RefundRequest.class = 'TheBumpaster\\PikPay\\Requests\\RefundRequest';
        return RefundRequest;
    })(Request);
}).call(N.TheBumpaster.PikPay.Requests);
