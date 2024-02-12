const array = [1, 2, 3, 4, 5];

function printWithDelay(element, index) {

    setTimeout(() => {
        console.log(element[index]);
    }, 3000 * (index + 1));

}
for (let i = 0; i < array.length; i++) {
    printWithDelay(array, i);
}
