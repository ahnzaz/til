class Foo{
    constructor(){
        
    }

    public foo1(){
        
    }

    public foo2(){

    }
}

class Bar{
    constructor(){
        
    }

    public bar1(){

    }

    public bar2(){

    }
}

const myFoo = ((new Bar() as unknown) as Foo);