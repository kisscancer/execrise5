function Base() {
    this.events = {};
}

var p = Base.prototype;

p.on = function (event, fn) {
    (this.events[event] = this.events[event] || [])
        .push(fn);
};

p.trigger = function (event, value) {
    var me = this;
    this.events[event].forEach(function (fn) {
         fn.call(me, value);
    });
}

function merge(a, b) {
    if (!b) {
        return a;
    }

    for (var key in b) {
        a[key] = b[key];
    }

    return a;
}

Base.extend = function (prototype, static) {
    var Super = this;
    function S() { }
    S.prototype = Super.prototype;
    function Klass() {
        Super.call(this);
    }
    Klass.prototype = merge(new S(), prototype);

    return merge(merge(Klass, Base), static);
}

module.exports = Base