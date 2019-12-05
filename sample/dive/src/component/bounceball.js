const defaultAccel = 9.8;

export default class BounceBall {
    constructor() {
        const el = document.createElement('div');

        this._el = el;

        el.className = 'ball';
        el.style.top = '0px';

        this._vel = 0;

        this._conflict = true;
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
        setTimeout(() => {
            this._el.style.top = '550px';
            this._end = true;
        }, 6500);

        const callback = () => {
            this._el.style.top = `${this._vel + Number.parseInt(this._el.style.top)}px`;
            this._vel += defaultAccel / 30;

            if(!this._end){
                window.requestAnimationFrame(callback);
            }
        }

        window.requestAnimationFrame(callback);
    }

    conflict(ground) {
        if (this._conflict && Number.parseInt(this._el.style.top) + 10 >= Number.parseInt(ground.element.style.top)) {
            this.vel *= -0.7;

            this._conflict = false;
            setTimeout(()=>{
                this._conflict = true;
            }, 500);
        }
    }
}