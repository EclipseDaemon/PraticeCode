function reverse(){
    const word = prompt('Enter a word: ');
    const reversed = word.split('').reverse().join('');
    alert(`Palidrome is ${reversed}`);
    console.log(word);
}

reverse();
