const readlineSync = require('readline-sync');

// Visa: Starts with 4, followed by 12 or 15 digits
const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

// Verve: Starts with 506 followed by 10 digits
const verveRegex = /^506[0-9]{10}$/;

// Mastercard: Starts with 5, followed by a digit 1-5, followed by 14 digits
const mastercardRegex = /^5[1-5][0-9]{14}$/;

while (true) {
    console.log("Input card number");
    let cardNumber = readlineSync.questionInt();

    if (visaRegex.test(cardNumber)) {
        console.log("Credit Card Type: Visa");
        break;
    }
     else if (mastercardRegex.test(cardNumber)) {
        console.log("Credit Card Type: Mastercard");
        break;
    }
    else if (verveRegex.test(cardNumber)) {
       console.log("Credit Card Type: Verve");
       break;
   }
     else {
        console.log("Invalid Card");
    }
}