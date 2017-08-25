$(document).on("click", "#submit", function translateEnigma(str) {
  // Create variables to be used
  $("#input").empty();
  var enigma = '';
  var vowels = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(vowels)) {
    enigma = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(vowels)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    enigma = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return enigma;
});

// translateEnigma();
