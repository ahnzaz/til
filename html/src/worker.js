onmessage = e=>{
    console.log('worker-thread');
    // const param = e.data;

    // let value = 1;
    // setInterval(()=>{
    //     console.log(param);
    // }, 1000);
    // close();
    importScripts('./another.js');
    console.log('after import');
}