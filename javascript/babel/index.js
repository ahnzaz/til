async function foo(){
    console.log(await Promise.resolve(10));
}

foo();