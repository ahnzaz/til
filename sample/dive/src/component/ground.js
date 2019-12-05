export default class Ground{
    constructor(){
        const el = document.createElement('div');

        el.className = 'ground';

        this._el = el;
        this._el.style.top = '550px'
    }

    get element(){
        return this._el
    }
}