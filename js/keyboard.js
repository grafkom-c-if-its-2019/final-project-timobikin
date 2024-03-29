window.addEventListener('keyup', function (event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function (event) { Key.onKeydown(event); }, false);

var Key = {
    _pressed: {},
    A: 65,
    W: 87,
    D: 68,
    S: 83,
    Z: 90,
    C: 67,
    B: 66,
    M: 77,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
    ENTER: 13,

    isDown: function (keyCode) {
        return this._pressed[keyCode];
    },

    onKeydown: function (event) {
        this._pressed[event.keyCode] = true;
    },

    onKeyup: function (event) {
        delete this._pressed[event.keyCode];
    }
};

