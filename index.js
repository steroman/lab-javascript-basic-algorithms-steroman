// Iteration 1: Names and Input

/* This part defines one variable for each hacker and prints a message including their name to the console */

const hackerOne = 'Stefano';

console.log(`The driver's name is ${hackerOne}`);

const hackerTwo = 'Laura';

console.log(`The navigator's name is ${hackerTwo}`);

// Iteration 2: Conditionals

/* This part uses else if to compare the length of the 2 names and outputs a message to the console about which name is longer */

if (hackerOne.length > hackerTwo.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
} else if (hackerOne.length === hackerTwo.length) {
   console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
}

// Iteration 3: Loops

/* This part spells the driver's name in capital letters and with spaces between each characters. It converts the name of the driver to uppercase, then creates an empty container for the letters. After that, it uses a for loop to iterate through the characters of the new uppercase variable. The if statement adds empty spaces to the spaced name, except for the last character. Finally, the spaced name is output to the console log. */

const mayuscDriver = hackerOne.toUpperCase();

let spacedMayuscDriver = "";

for (let i = 0; i < hackerOne.length; i++) {
    spacedMayuscDriver += mayuscDriver[i];
    if (i !== hackerOne.length - 1) {
        spacedMayuscDriver += " ";
    }
}

console.log(`${spacedMayuscDriver}`);

/* This part spells the navigator's name backwards. It creates an empty variable to contain the reverse name, then it iterates backwards through the letters of the navigataor until it reaches the last one. Finally, the reverse name is output to the console log. */

let reverseNavigator = "";

for (let i = hackerTwo.length - 1; i >= 0; i--) {
    reverseNavigator += hackerTwo[i];
}

console.log(`${reverseNavigator}`);

/* This part combines various if else statements to compare the initial character of each driver's name and outputs to the console a message about which name comes first in lexicographical order */

if (hackerOne > hackerTwo) {
    console.log(`The driver's name goes first.`);
} else if (hackerOne < hackerTwo) {
    console.log(`Yo, the navigator goes first, definitely.`); 
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1

let sourceText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor sit amet nunc egestas semper. Nullam odio dui, efficitur non pretium eget, aliquet sed nibh. In mattis enim vitae orci mattis luctus. Nulla enim dolor, vestibulum aliquet lacinia sit amet, ornare eget neque. Donec auctor accumsan urna id lacinia. Quisque libero eros, consectetur nec diam quis, rhoncus consectetur lorem. Sed et elementum quam, quis imperdiet odio. Etiam quis feugiat neque. Integer faucibus tristique tortor eget volutpat. Nunc aliquam consectetur velit vel posuere. Nullam finibus convallis turpis, aliquam semper erat. Maecenas metus erat, condimentum at pretium vitae, tempor id lacus. In eget leo enim. Morbi sed tempor magna.

Nulla ut tempor tellus. Sed pretium leo lectus, vitae semper erat euismod vel. Pellentesque vitae purus lectus. Mauris ut aliquam justo. Morbi ullamcorper, metus et placerat mollis, nisl velit dictum est, non sagittis nibh nunc at turpis. Vestibulum ullamcorper libero id metus pretium fermentum. Etiam consequat metus sagittis neque efficitur, at molestie quam auctor. Proin quis ultrices neque. Nam rhoncus a sem ut finibus. Pellentesque facilisis tempor odio, vel vestibulum mauris porttitor sit amet.

Duis consequat consectetur ligula. Suspendisse tortor elit, condimentum et eros sed, pretium rhoncus erat. Aenean eget turpis in nisi porttitor rhoncus. Donec sed mi erat. Donec eget lectus ipsum. Quisque eget luctus enim. Nulla facilisi. Cras id lacus neque. Praesent lacinia, sem non ultrices lacinia, libero justo scelerisque metus, vel sagittis sapien arcu ac metus. Proin tincidunt auctor sollicitudin. Morbi mattis viverra turpis non bibendum. Vivamus finibus quam et ex efficitur, non convallis eros porta. Phasellus laoreet enim ac mollis finibus. Etiam venenatis, lacus vel semper pulvinar, sem sapien vulputate augue, sit amet aliquam quam ipsum eget dolor. Nulla auctor et lorem ut consequat. Donec facilisis volutpat turpis, at iaculis erat vestibulum ac.`

let wordCount = 0;
let isNewWord = true;

for (let i = 0; i < sourceText.length; i++) {
    if (sourceText[i] === " " || sourceText[i] === ", " || sourceText[i] === ". " || sourceText[i] === ".") {
        isNewWord = true;
    } else {
        if (isNewWord) {
            wordCount++;
            isNewWord = false;
        }
    }
}

console.log(`The lorem ipsum text has ${wordCount} words.`);

let etCount = 0;

for (let i = 0; i < sourceText.length; i++) {
        if (sourceText[i] === " " && sourceText[i + 1] === "e" && sourceText[i + 2] === "t" && sourceText[i + 3] === " ") {
            etCount++;
          }
}

console.log(`The word 'et' appears ${etCount} times in the lorem ipsum text.`);