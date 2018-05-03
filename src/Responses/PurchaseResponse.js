/** @var {{TheBumpaster: {PikPay: {Responses: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Responses');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var PurchaseResponse = this.PurchaseResponse = (function(parent) {
        function PurchaseResponse() {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = true;
            parent.call(this);
            if (__isInheritance == false) {
                if (parent.prototype.__construct) {
                    parent.prototype.__construct.apply(this, arguments);
                }
            }
        }
        __extends(PurchaseResponse, parent);
        PurchaseResponse.prototype.isSuccessfull = function() {
            return this.httpResponse.getStatusCode() == 201;
        };
        PurchaseResponse.prototype.transactionId = function() {
            return parseInt(preg_replace("/[^0-9]/", "", this.location()));
        };
        PurchaseResponse.prototype.location = function() {
            return this.httpResponse.getHeaderLine("location");
        };
        PurchaseResponse.class = 'TheBumpaster\\PikPay\\Responses\\PurchaseResponse';
        return PurchaseResponse;
    })(Response);
}).call(N.TheBumpaster.PikPay.Responses);
