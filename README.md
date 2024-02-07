# Credit Card Validator Program

This JavaScript program validates credit card numbers entered by the user and identifies the card type (Visa, Mastercard, or Verve). It utilizes regular expressions to match the patterns of valid credit card numbers for each card type.

## Regular Expressions

### Visa Regex
- Pattern: `const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;`
  - Starts with `4`, followed by 12 digits, optionally followed by 3 more digits.
  
### Verve Regex
- Pattern: `const verveRegex = /^506[0-9]{10}$/;`
  - Starts with `506`, followed by 10 digits.

### Mastercard Regex
- Pattern: `const mastercardRegex = /^5[1-5][0-9]{14}$/;`
  - Starts with `5`, followed by a digit from 1 to 5, followed by 14 digits.

## Program Flow
- The program continuously prompts the user to input a credit card number until a valid one is entered.
- It checks the input against each regex pattern for Visa, Mastercard, and Verve cards.
- If a match is found, it prints the corresponding card type and exits the loop.
- If no match is found, it prints "Invalid Card" and continues to prompt for input.

## Usage
1. Run the program in a JavaScript environment.
2. Input a credit card number when prompted.
3. The program will identify the card type or indicate if the input is invalid.
