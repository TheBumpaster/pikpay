
/*
* Gateway & Authorization
* PikPay
* TheBumpaster
*/

/** @var {{TheBumpaster: {PikPay: {}}}} N*/

N._INIT_('TheBumpaster.PikPay');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }

    var HttpClient = require('httpclient');
    var Requests = N.TheBumpaster.PikPay.Requests;

    var Gateway = this.Gateway = (function() {
        function Gateway(endpoint, apiKey, secretKey) {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = false;
            this.endpoint = null;
            this.httpClient = null;
            this.apiKey = null;
            this.secretKey = null;
            if (__isInheritance == false) {
                this.__construct(endpoint, apiKey, secretKey);
            }
        }

        Gateway.prototype.__construct = function(endpoint, apiKey, secretKey) {
            this.endpoint = endpoint;
            this.setApiKey(apiKey);
            this.setSecretKey(secretKey);
            this.httpClient = this.createClient();
        };

        Gateway.prototype.authorize = function(params) {
            if (!isArray(params)) throw new Error('bad param type');
            return this.createRequest(Requests.AuthorizationRequest.class, params);
        };

        Gateway.prototype.authorizeWithInstallments = function(params, installments) {
            if (typeof installments == 'undefined') installments = null;
            if (!isArray(params)) throw new Error('bad param type');
            return this.createRequest(Requests.AuthorizationRequest.class, params, installments);
        };

        Gateway.prototype.purchase = function(params) {
            if (!isArray(params)) throw new Error('bad param type');
            return this.createRequest(Requests.PurchaseRequest.class, params);
        };

        Gateway.prototype.purchaseWithInstallments = function(params, installments) {
            if (typeof installments == 'undefined') installments = null;
            if (!isArray(params)) throw new Error('bad param type');
            return this.createRequest(Requests.PurchaseRequest.class, params, installments);
        };

        Gateway.prototype.capture = function(params) {
            if (!isArray(params)) throw new Error('bad param type');
            return this.createRequest(Requests.CaptureRequest.class, params);
        };

        Gateway.prototype.refund = function(params) {
            if (!isArray(params)) throw new Error('bad param type');
            return this.createRequest(Requests.RefundRequest.class, params);
        };

        Gateway.prototype.void = function(params) {
            if (!isArray(params)) throw new Error('bad param type');
            return this.createRequest(Requests.VoidRequest.class, params);
        };

        Gateway.prototype.createRequest = function(class, params, installments) {
            if (typeof installments == 'undefined') installments = null;
            if (!isArray(params)) throw new Error('bad param type');
            if (is_null(installments)) {
                var obj;
                obj = new(N._GET_(class))(this.httpClient, this, params);
            } else {
                obj = new(N._GET_(class))(this.httpClient, this, params, installments);
            }
            return obj.response();
        };

        Gateway.prototype.createClient = function() {
            return new HttpClient({
                "base_uri": this.endpoint,
                "verify": false
            });
        };

        Gateway.prototype.endpoint = function() {
            return this.endpoint;
        };

        Gateway.prototype.setApiKey = function(key) {
            this.apiKey = key;
        };

        Gateway.prototype.setSecretKey = function(key) {
            this.secretKey = key;
        };

        Gateway.prototype.apiKey = function() {
            return this.apiKey;
        };

        Gateway.prototype.secretKey = function() {
            return this.secretKey;
        };

        Gateway.prototype.httpClient = function() {
            return this.httpClient;
        };

        Gateway.class = 'TheBumpaster\\PikPay\\Gateway';

        
        return Gateway;
    })();
}).call(N.TheBumpaster.PikPay);
