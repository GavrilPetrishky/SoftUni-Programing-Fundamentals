function triplesOfLatinLetters(counterString) {

    let lettersCount = Number(counterString);
    let result = '';
    for(let i = 0; i < lettersCount; i++) {
        let firstLetter = String.fromCharCode(97 + i);
        for(let y = 0; y < lettersCount; y++) {
            let secondLetter = String.fromCharCode(97 + y);
            for(let z = 0; z < lettersCount; z++) {
                let thirdLetter = String.fromCharCode(97 + z)
                result = (`${firstLetter}${secondLetter}${thirdLetter}`);
                console.log(result);
            }
        }
    }

}
triplesOfLatinLetters('2');