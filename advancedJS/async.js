//Async returns Promise
async function f() {
    return 1;
}


async function f1() {
    return Promise.resolve(1);
}

f().then((val) => console.log(val)); // Annonymous function
f().then(getPromiseValue);

f1().then(getPromiseValue);
f1().then(getPromiseValue);
function getPromiseValue(val) {
    console.log(val);
    // console.log(arguments[0]);
}


async function useAwait() {
    var promise = new Promise(function (resolve,reject){
        setTimeout(() => {
            resolve('done!')
        }, 1000);
    });

    let result  =  await promise; //wait until result is read
    console.log("running syncrhonous stsatement" + result);
    return result;
}

console.log("running syncrhonous stsatement");
console.log("running syncrhonous stsatement");

useAwait();

