// Code your solutions in this file
function writeCards(nameArray, event) {
    let arr = [];
    for (let i = 0; i < nameArray.length; i++) {
        arr.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

// function countDown(num) {
//     for (let i = 0; i <= num; i++ ) {
//         console.log(num - i)
//     }
// }

function countDown(num) {
    let i = 0;
    while (i <= 10) {
        console.log(num - i);
        i++;
    }
}