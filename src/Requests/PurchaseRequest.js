/** @var {{TheBumpaster: {PikPay: {Requests: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Requests');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var HttpClient = require('httpclient');
    var Gateway = N.TheBumpaster.PikPay.Gateway;
    var Request = N.TheBumpaster.PikPay.Requests.Request;
    var PurchaseResponse = N.TheBumpaster.PikPay.Responses.PurchaseResponse;
    var PurchaseRequest = this.PurchaseRequest = (function(parent) {
        function PurchaseRequest(httpClient, gateway, params, installments) {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = true;
            parent.call(this);
            this.uri = null;
            this.params = null;
            this.httpClient = null;
            this.httpRequest = null;
            this.response = null;
            if (__isInheritance == false) {
                this.__construct(httpClient, gateway, params, installments);
            }
        }
        __extends(PurchaseRequest, parent);
        PurchaseRequest.prototype.__construct = function(httpClient, gateway, params, installments) {
            if (typeof installments == 'undefined') installments = null;
            if (!httpClient instanceof HttpClient) throw new Error('bad param type');
            if (!gateway instanceof Gateway) throw new Error('bad param type');
            if (!isArray(params)) throw new Error('bad param type');
            this.setInstallments(params, installments);
            parent.prototype.__construct.call(this, httpClient, gateway, "purchase", this.params);
            this.uri = "/api";
            this.httpClient = httpClient;
            this.send();
        };
        PurchaseRequest.prototype.response = function() {
            return new PurchaseResponse(this.response);
        };
        PurchaseRequest.class = 'TheBumpaster\\PikPay\\Requests\\PurchaseRequest';
        return PurchaseRequest;
    })(Request);
}).call(N.TheBumpaster.PikPay.Requests);
