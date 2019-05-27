function foo(arg1, arg2, arg3){
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    debugger;
}

const bar = foo.bind(this, null, null, 2);
bar(10, 20);