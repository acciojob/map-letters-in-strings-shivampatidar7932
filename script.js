//your JS code here. If required.
function mapLetters(word) {
  const letterMap = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!letterMap.hasOwnProperty(letter)) {
      letterMap[letter] = [i];
    } else {
      letterMap[letter].push(i);
    }
  }

  return letterMap;
}

// Take user input using prompt
const userInput = prompt("Enter a word (all lowercase):");

// Check if the user entered something
if (userInput !== null && userInput !== "") {
  // Call the mapLetters function with the user input
  const result = mapLetters(userInput);

  // Display the result using alert
  alert(JSON.stringify(result, null, 2));
} else {
  // Alert the user if they didn't enter anything
  alert("You didn't enter a word. Please try again.");
}
