function addToSentence(sentence, word) {
    if (sentence.length > 0) {
        sentence += " ";
    }
    sentence += word;
    return sentence;
}

let words = ["The", "red", "fox", "jumped", "over", "the", "dog"];
let sentence = "";
let index = 0;

while (index < words.length) {
    let word = words[index];
    sentence = addToSentence(sentence, word);
    index++
}
sentence += ".";

console.log(sentence);