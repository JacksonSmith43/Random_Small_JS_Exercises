addEventListener("DOMContentLoaded", () => {

    /* Whitespace stuff. */
    /* Prompt: https://www.reacterry.com/portal/challenges/remove-all-whitespaces */
    const userInputWhitespace = document.getElementById("user-input-whitespace");
    const submitButtton = document.getElementById("submit-button-whitespace");

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
        return trimedString;
    }
  
});



