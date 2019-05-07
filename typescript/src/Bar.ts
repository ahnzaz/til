import Foo from "./Foo";

export default class Bar extends Foo{
    constructor(protected _name:string){
        super(_name);
    }

    public bar(){
    }
}