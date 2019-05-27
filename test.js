
class PlayerEvent extends CustomEvent{
    constructor(target, ...args){
        super(...args);
        // this.target = target;
    }
}

let customEvent = new PlayerEvent(window, 'asdfasdf');
