import system from "./component/system"
import BounceBall from "./component/bounceball";
import StaticBall from "./component/staticball";
import AccelBall from "./component/accelball";

window.onload = () => {
    const systems = [system(StaticBall), system(AccelBall), system(BounceBall),]

    const container = document.querySelector('.container');

    systems.forEach((system, idx) => {
        container.append(system.element);
        window[`system${idx}`] = system;
    });
}