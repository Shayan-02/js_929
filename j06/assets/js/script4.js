let word = "salam chetori";

soundwords = ["a", "i", "u", "o", "w", "e"]

let soundword = 0;
for (let i= 0; i < word.length; i++){
    // if (word[i] === "a" || word[i] === "o" || word[i] === "i" || word[i] === "u" || word[i] === "w"){
    //     soundword++;
    // }
    if (soundwords.includes(word[i])){
        soundword++;
    }
}

console.log(soundword);
