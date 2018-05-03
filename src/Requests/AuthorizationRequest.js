/** @var {{TheBumpaster: {PikPay: {Requests: {}}}}} N*/

N._INIT_('TheBumpaster.PikPay.Requests');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }

    var HttpClient = require('httpclient');
    var Gateway = N.TheBumpaster.PikPay.Gateway;
    var AuthorizationResponse = N.TheBumpaster.PikPay.Responses.AuthorizationResponse;
    var AuthorizationRequest = this.AuthorizationRequest = (function(parent) {
        function AuthorizationRequest(httpClient, gateway, params, installments) {
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
        __extends(AuthorizationRequest, parent);
        AuthorizationRequest.prototype.__construct = function(httpClient, gateway, params, installments) {
            if (typeof installments == 'undefined') installments = null;
            if (!httpClient instanceof HttpClient) throw new Error('bad param type');
            if (!gateway instanceof Gateway) throw new Error('bad param type');
            if (!isArray(params)) throw new Error('bad param type');
            this.setInstallments(params, installments);
            parent.prototype.__construct.call(this, httpClient, gateway, "authorize", this.params);
            this.uri = "/api";
            this.httpClient = httpClient;
            this.send();
        };
        AuthorizationRequest.prototype.response = function() {
            return new AuthorizationResponse(this.response);
        };
        AuthorizationRequest.class = 'TheBumpaster\\PikPay\\Requests\\AuthorizationRequest';
        return AuthorizationRequest;
        
    })(Request);
}).call(N.TheBumpaster.PikPay.Requests);
