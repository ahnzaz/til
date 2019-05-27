var Foo = /** @class */ (function () {
    function Foo(_name) {
        this._name = _name;
    }
    Foo.prototype.foo = function () {
        console.log('foo');
    };
    return Foo;
}());
export default Foo;
