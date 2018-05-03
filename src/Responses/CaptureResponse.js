/** @var {{TheBumpaster: {PikPay: {Responses: {}}}}} N*/
N._INIT_('TheBumpaster.PikPay.Responses');
(function() {
    for (var __ClassName in this) {
        if (__ClassName === 'class') continue;
        eval("var " + __ClassName + " = this." + __ClassName + ";");
    }
    var CaptureResponse = this.CaptureResponse = (function(parent) {
        function CaptureResponse() {
            var __isInheritance = __IS_INHERITANCE__;
            window.__IS_INHERITANCE__ = true;
            parent.call(this);
            if (__isInheritance == false) {
                if (parent.prototype.__construct) {
                    parent.prototype.__construct.apply(this, arguments);
                }
            }
        }
        __extends(CaptureResponse, parent);
        CaptureResponse.prototype.isSuccessfull = function() {
            return this.httpResponse.getStatusCode() == 200;
        };
        CaptureResponse.class = 'TheBumpaster\\PikPay\\Responses\\CaptureResponse';
        return CaptureResponse;
    })(Response);
}).call(N.TheBumpaster.PikPay.Responses);
