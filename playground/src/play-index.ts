class Foo {
    private _name!: string;
    constructor() {
    }

    public foo1(): number {
        return 10;
    }

    public foo2(): string {
        return this._name;
    }

    private _foo3(): void {
        return;
    }
}

const myFoo = new Foo();
console.log(myFoo.foo1());