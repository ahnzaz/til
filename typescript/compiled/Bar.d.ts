import Foo from "./Foo";
export default class Bar extends Foo {
    protected _name: string;
    constructor(_name: string);
    bar(): void;
}
