/** @var {{TheBumpaster: {PikPay: {Responses: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Responses');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var VoidResponse = this.VoidResponse = (function(parent) {
        function VoidResponse() {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = true;
            parent.call(this);
            if (__isInheritance == false) {
                if (parent.prototype.__construct) {
                    parent.prototype.__construct.apply(this, arguments);
                }
            }
        }
        __extends(VoidResponse, parent);
        VoidResponse.prototype.isSuccessfull = function() {
            return this.httpResponse.getStatusCode() == 200;
        };
        VoidResponse.class = 'TheBumpaster\\PikPay\\Responses\\VoidResponse';
        return VoidResponse;
    })(Response);
}).call(N.TheBumpaster.PikPay.Responses);
