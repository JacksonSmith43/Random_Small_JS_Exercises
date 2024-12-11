addEventListener("DOMContentLoaded", () => {

    /* Remove whitespace stuff. */
    /* Prompt: https://www.reacterry.com/portal/challenges/remove-all-whitespaces */
    const userInputWhitespace = document.getElementById("user-input-whitespace");
    const submitButtton = document.getElementById("submit-button-whitespace");
    const originalWordOutput = document.getElementById("original-word");
    const whitespacedRemovedWordOutput = document.getElementById("whitespace-removed-word");

    submitButtton.addEventListener("click", () => {
        if (userInputWhitespace.value !== "") {
            removeWhitespaces(userInputWhitespace.value);
            userInputWhitespace.value = "";

        } else {
            console.log("No input detected.");
        }
    })

    const removeWhitespaces = (string) => {
        let trimedString = string.replace(/\s/g, ''); // The RegEx trims the string. 
        console.log("trimedString: ", trimedString);
        originalWordOutput.innerHTML = `Original word: ${string}`;
        whitespacedRemovedWordOutput.innerHTML = `Whitespace remover: ${trimedString}`;
        return trimedString;
    }



    /* Reverse array stuff. */
    /* Prompt: https://www.reacterry.com/portal/challenges/array-reverse */
    const arrayOutput = document.getElementById("array-output");
    const reverseArrayOutput = document.getElementById("reverse-array-output");
    const arrayObjectOutput = document.getElementById("array-object-output");
    const reverseArrayObjectOutput = document.getElementById("reverse-array-object-output");

    const array = ["1", "2", "4", "8"];
    const objectArray = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]

    const reverseArray = (array) => {
        const reversesArray = [];

        for (let i = array.length - 1; i >= 0; i--) { // The culprit behind a problem was i >= 0;. Originally there was i = 0;.            reversesArray.push(array[i]);
            if (typeof array[0] === 'string') {
                reversesArray.push(array[i]);
            }
        }
        arrayOutput.innerHTML = array;
        reverseArrayOutput.innerHTML = reversesArray;

        return reversesArray;
    }


    const reverseObjectArray = (objectArray) => {
        const reversesObjectArray = [];

        for (let j = objectArray.length - 1; j >= 0; j--) {
            reversesObjectArray.push(objectArray[j]);
        }

        arrayObjectOutput.innerHTML = JSON.stringify(objectArray);
        reverseArrayObjectOutput.innerHTML = JSON.stringify(reversesObjectArray);

        return reversesObjectArray;
    }

    console.log("reverseArray: ", reverseArray(array));
    console.log("reversesObjectArray: ", JSON.stringify(reverseObjectArray(objectArray)));

});



