function specialNumbers(number) {

    let counter = 1;
    while (counter <= number) {
        let counterToString = counter.toString();
        let sum = 0;
        for (let i = 0; i < counterToString.length; i++) {
            let currentDigit = Number(counterToString[i]);
            sum += currentDigit;
        }
        if (sum % 5 === 0 || sum % 7 === 0 || sum % 11 === 0) {
            console.log(`${counter} -> True`);
        } else {
            console.log(`${counter} -> False`);
        }
        counter++;
    }

}
specialNumbers(20);