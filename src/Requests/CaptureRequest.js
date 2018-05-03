/** @var {{TheBumpaster: {PikPay: {Requests: {}}}}} N*/


N._INIT_('TheBumpaster.PikPay.Requests');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var HttpClient = require('httpclient');
    var Gateway = N.TheBumpaster.PikPay.Gateway;
    var CaptureResponse = N.TheBumpaster.PikPay.Responses.CaptureResponse;
    var CaptureRequest = this.CaptureRequest = (function(parent) {
        function CaptureRequest(httpClient, gateway, params) {
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
        __extends(CaptureRequest, parent);
        CaptureRequest.prototype.__construct = function(httpClient, gateway, params) {
            if (!httpClient instanceof HttpClient) throw new Error('bad param type');
            if (!gateway instanceof Gateway) throw new Error('bad param type');
            if (!isArray(params)) throw new Error('bad param type');
            parent.prototype.__construct.call(this, httpClient, gateway, "capture", params);
            this.uri = "/transactions/" + params["order-number"] + "/capture.xml";
            this.httpClient = httpClient;
            this.params = params;
            this.send();
        };
        CaptureRequest.prototype.response = function() {
            return new CaptureResponse(this.response);
        };
        CaptureRequest.class = 'TheBumpaster\\PikPay\\Requests\\CaptureRequest';
        return CaptureRequest;
    })(Request);
}).call(N.TheBumpaster.PikPay.Requests);
