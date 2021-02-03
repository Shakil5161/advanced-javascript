const arr = [1, 2, -2, -6, 5, 48, -1, -10, 4, 7, 6, 4, 9];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (arr[i] > 9) {
//         break;
//     }
//     console.log(element);
// }

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i] < 0) {
        continue;
    }
    console.log(element)
}