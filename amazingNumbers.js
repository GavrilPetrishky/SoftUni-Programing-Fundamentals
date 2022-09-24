function amazingNumbers(number) {

    let numToString = number.toString();
    let sum = 0;
    let isAmazing = false;
    for(let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }
    let sumString = sum.toString();
    for(let y = 0; y < sumString.length; y++) {
        let currentDigit = Number(sumString[y]);
        if(currentDigit === 9) {
            isAmazing = true;
            break;
        }
    }
    if (isAmazing == true) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }

}
amazingNumbers(999);