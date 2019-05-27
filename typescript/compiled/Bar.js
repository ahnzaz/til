var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Foo from "./Foo";
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(_name) {
        var _this = _super.call(this, _name) || this;
        _this._name = _name;
        return _this;
    }
    Bar.prototype.bar = function () {
    };
    return Bar;
}(Foo));
export default Bar;
