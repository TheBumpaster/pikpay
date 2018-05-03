/** @var {{TheBumpaster: {PikPay: {Requests: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Requests');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var HttpClient = require('httpclient');
    var HttpRequest = require('request');
    var Gateway = N.TheBumpaster.PikPay.Gateway;
    var Request = this.Request = (function() {
        function Request(httpClient, gateway, root, params) {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = false;
            this.httpClient = null;
            this.httpRequest = null;
            this.gateway = null;
            this.xml = null;
            this.response = null;
            if (__isInheritance == false) {
                this.__construct(httpClient, gateway, root, params);
            }
        }
        Request.prototype.__construct = function(httpClient, gateway, root, params) {
            if (!httpClient instanceof HttpClient) throw new Error('bad param type');
            if (!gateway instanceof Gateway) throw new Error('bad param type');
            if (!isArray(params)) throw new Error('bad param type');
            this.httpClient = httpClient;
            this.gateway = gateway;
            this.xml = this.parse(params, root);
        };
        Request.prototype.digest = function(params) {
            if (!isArray(params)) throw new Error('bad param type');
            var paramString;
            paramString = params["order-number"].params["amount"].params["currency"];
            return sha1(this.gateway.secretKey().paramString);
        };
        Request.prototype.send = function() {
            var path;
            path = this.httpClient.getConfig("base_uri").this.uri;
            this.httpRequest = new HttpRequest("POST", path, this.headers(), this.xml);
            try {
                var response;
                response = this.httpClient.send(this.httpRequest);
                this.response = response;
            } catch (__e__) {
                var e;
                if (__e__ instanceof N.GuzzleHttp.Exception.RequestException) {
                    e = __e__;
                    var e;
                    this.response = e.getResponse();
                } else {
                    throw __e__;
                }
            }
        };
        Request.prototype.setInstallments = function(params, installments) {
            if (installments !== null) {
                params["number-of-installments"] = installments;
            }
            return this.params = params;
        };
        Request.prototype.parse = function(params, root) {
            if (!isArray(params)) throw new Error('bad param type');
            var xml;
            xml = new SimpleXMLElement("<" + "transaction" + "/>");
            xml.addChild("transaction-type", root);
            xml.addChild("authenticity-token", this.gateway.apiKey());
            xml.addChild("digest", this.digest(params));
            var key;
            __loop1:
                for (key in params) {
                    var value;
                    value = params[key];
                    xml.addChild(key, value);
                }
            return xml.asXML();
        };
        Request.prototype.headers = function() {
            return {
                "Accept": "application/xml",
                "Content-Type": "application/xml; charset=UTF8"
            };
        };
        Request.class = 'TheBumpaster\\PikPay\\Requests\\Request';
        return Request;
    })();
}).call(N.TheBumpaster.PikPay.Requests);
