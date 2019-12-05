import BounceBall from "./bounceball";
import Ground from "./ground";

export default function (BallCls) {
    const el = document.createElement('div');

    el.className = 'system';

    const ball = new BallCls();
    const ground = new Ground();

    el.append(ball.element);
    el.append(ground.element);

    const confliction = () => {
        ball.conflict(ground);
        window.requestAnimationFrame(confliction)
    }

    const callback = () => {
        ball.start();
        window.requestAnimationFrame(confliction);
    };

    callback.element = el;


    const btn = document.createElement('button');

    btn.innerText = 'start';

    btn.addEventListener('click', () => {
        callback();
    });

    const btnContainer = document.createElement('div');

    btnContainer.className = 'start';

    btnContainer.append(btn);

    el.append(btnContainer);

    return callback;
}