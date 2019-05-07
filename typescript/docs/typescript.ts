
interface Crab{

}

interface Bird{
    fly();
    egg():Crab;
}

interface Animal{
    egg():Animal;
    cantFly();
}

function foo():Bird|Animal{
    const returnValue:Bird = null;

    return returnValue;
}

const value = foo();
const son = value.egg();
