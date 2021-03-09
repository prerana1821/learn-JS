// const birthday = (obj) => {
// //     return { ...obj, age: obj.age + 1 };
// // }

// const birthday = obj => ({ ...obj, age: obj.age + 1 });

// const prerana = { name: 'Prerana', age: 20 };

// console.log(birthday(prerana));


// // function lessThan10(num) {
// //     return num < 10;
// // }

// const lessThan10 = (num) => num < 10;

// const numArr = [1, 2, 5, 78, 10, 10, 22, 3];
// const numArr2 = [1, 2, 5];

// console.log(lessThan10(2));

// console.log(numArr.filter(lessThan10));

// const arrayOfObj = (arr) => {
//     return arr.map(ele => {
//         return ({ num: ele });
//     });
// }
// console.log(arrayOfObj(numArr));

// const itemToObj = ele => ({ num: ele });
// const itemToObj2 = ele => ({ ele });
// const itemToObj3 = ele => ({ [ele]: ele });
// // const itemToObj4 = ele => ({ [ele] }); // error
// const itemToObj5 = ele => ({ [`${ele}-${ele}`]: ele });
// console.log(numArr2.map(itemToObj5));

// const sum = (arr) => {
//     return arr.reduce(ele => {
//         return;
//     });
// }

// console.log(sum(numArr2));

// polyfill the array methods


// // const willThanosKillMe = (name, success, failure) => name.length % 2 === 0 ? success() : failure();
// // console.log(willThanosKillMe('Prerana', () => console.log('Alive'), () => console.log('Dead')));

// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldReject) {
//                 reject(`error from server: ${msg}`);
//             }
//             resolve(`from server: ${msg}`);
//         }, 3000);
//     });
// }

// console.log(fakeFetch('Prerana'));


// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldReject) {
//                 reject(`error from server: ${msg}`);
//             }
//             resolve(`from server: ${msg}`);
//         }, 3000);
//     });
// }

// undefined
// fakeFetch('Prerama')
// Promise {
//     <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//     fakeFetch('Prerama',true)
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//     VM45:5 Uncaught (in promise) error from server: Prerama
//     (anonymous) @ VM45:5
//     setTimeout (async)
//     (anonymous) @ VM45:3
//     fakeFetch @ VM45:2
//     (anonymous) @ VM190:1
//     fakeFetch('Prerama').then(data => console.log(data));
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//         VM414:1 from server: Prerama
//         fakeFetch('Prerama',true).then(data => console.error(data));
// Promise { <pending>}
//             new-tab-page/:1 Uncaught (in promise) error from server: Prerama
//             Promise.then (async)
//             (anonymous) @ VM499:1
//             fakeFetch('Prerama',true).then(data => console.log(data));
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//                 new-tab-page/:1 Uncaught (in promise) error from server: Prerama
//                 Promise.then (async)
//                 (anonymous) @ VM563:1
// function getServer(msg) {
//     return fakeFetch(msg).then(data => console.log(data.length));
// }
// undefined
// getServer('Prerana');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
//                     VM1083:2 20
// function twice(msg1,msg2){
//     return fakeFetch(msg1).then(data => data).then(data => fakeFetch(msg2).then(data => data));
// }
// undefined
// twice('Prerana','Nawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "from server: Nawar"
//                         twice('Prerana','Nawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//                             twice('Prerana','Nawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// function twice(msg1,msg2){
//     return fakeFetch(msg1).then(data => console.log(data)).then( fakeFetch(msg2).then(data => console.log(data)));
// }
// undefined
// function twice2(msg1,msg2){
//     return fakeFetch(msg1).then(data => console.log(data)).then( fakeFetch(msg2).then(data => console.log(data)));
// }
// undefined
// twice2('Prerana','Nawar');
// Promise { <pending>}
//                                     VM3393:2 from server: Prerana
//                                     VM3393:2 from server: Nawar
// const awaitFetch = async (msg1,msg2) => {
//     const data = await fakeFetch(msg1);
//     const data1 = await fakeFetch(data + msg2);
//     console.log(data);
//     console.log(data1);
// }
// undefined
// awaitFetch('Prerana','Mawar');
// Promise { <pending>}
//                                         VM4957:4 from server: Prerana
// VM4957:5 from server: from server: PreranaMawar


// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldReject) {
//                 reject(`error from server: ${msg}`);
//             }
//             resolve(`from server: ${msg}`);
//         }, 3000);
//     });
// }

// undefined
// fakeFetch('Prerama')
// Promise {
//     <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//     fakeFetch('Prerama',true)
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//     VM45:5 Uncaught (in promise) error from server: Prerama
//     (anonymous) @ VM45:5
//     setTimeout (async)
//     (anonymous) @ VM45:3
//     fakeFetch @ VM45:2
//     (anonymous) @ VM190:1
//     fakeFetch('Prerama').then(data => console.log(data));
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//         VM414:1 from server: Prerama
//         fakeFetch('Prerama',true).then(data => console.error(data));
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: "error from server: Prerama"
//             new-tab-page/:1 Uncaught (in promise) error from server: Prerama
//             Promise.then (async)
//             (anonymous) @ VM499:1
//             fakeFetch('Prerama',true).then(data => console.log(data));
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//                 new-tab-page/:1 Uncaught (in promise) error from server: Prerama
//                 Promise.then (async)
//                 (anonymous) @ VM563:1
// function getServer(msg) {
//     return fakeFetch(msg).then(data => console.log(data.length));
// }
// undefined
// getServer('Prerana');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
//                     VM1083:2 20
// function twice(msg1,msg2){
//     return fakeFetch(msg1).then(data => data).then(data => fakeFetch(msg2).then(data => data));
// }
// undefined
// twice('Prerana','Nawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "from server: Nawar"
//                         twice('Prerana','Nawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
//                             twice('Prerana','Nawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// function twice(msg1,msg2){
//     return fakeFetch(msg1).then(data => console.log(data)).then( fakeFetch(msg2).then(data => console.log(data)));
// }
// undefined
// function twice2(msg1,msg2){
//     return fakeFetch(msg1).then(data => console.log(data)).then( fakeFetch(msg2).then(data => console.log(data)));
// }
// undefined
// twice2('Prerana','Nawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
//                                     VM3393:2 from server: Prerana
//                                     VM3393:2 from server: Nawar
// const awaitFetch = async (msg1,msg2) => {
//     const data = await fakeFetch(msg1);
//     const data1 = await fakeFetch(data + msg2);
//     console.log(data);
//     console.log(data1);
// }
// undefined
// awaitFetch('Prerana','Mawar');
// Promise { <pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
//                                         VM4957:4 from server: Prerana
// VM4957:5 from server: from server: PreranaMawar
