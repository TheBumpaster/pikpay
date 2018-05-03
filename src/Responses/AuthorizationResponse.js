/** @var {{TheBumpaster: {PikPay: {Responses: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Responses');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var AuthorizationResponse = this.AuthorizationResponse = (function(parent) {
        function AuthorizationResponse() {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = true;
            parent.call(this);
            if (__isInheritance == false) {
                if (parent.prototype.__construct) {
                    parent.prototype.__construct.apply(this, arguments);
                }
            }
        }
        __extends(AuthorizationResponse, parent);
        AuthorizationResponse.prototype.isSuccessfull = function() {
            return this.httpResponse.getStatusCode() == 201;
        };
        AuthorizationResponse.prototype.transactionId = function() {
            return parseInt(preg_replace("/[^0-9]/", "", this.location()));
        };
        AuthorizationResponse.prototype.location = function() {
            return this.httpResponse.getHeaderLine("location");
        };
        AuthorizationResponse.class = 'TheBumpaster\\PikPay\\Responses\\AuthorizationResponse';
        return AuthorizationResponse;
    })(Response);
}).call(N.TheBumpaster.PikPay.Responses);
