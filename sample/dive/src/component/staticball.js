export default class StaticBall {
    constructor() {
        const el = document.createElement('div');

        this._el = el;

        el.className = 'ball';
        el.style.top = '0px';
        this._conflict = true;

        this._vel = 4;
    }

    get vel() {
        return this._vel;
    }

    set vel(newValue) {
        this._vel = newValue;
    }

    shift(parent) {
        // do something.
    }

    get element() {
        return this._el;
    }

    start() {
        const callback = () => {
            if (this._vel !== 0 && this._conflict) {
                this._el.style.top = `${this._vel + Number.parseInt(this._el.style.top)}px`;

                window.requestAnimationFrame(callback);
            }
        }

        window.requestAnimationFrame(callback);
    }

    conflict(ground) {
        if (this._conflict && Number.parseInt(this._el.style.top) >= Number.parseInt(ground.element.style.top)) {
            this.vel = 0;
            this._conflict = false;
        }
    }
}