function reverse(){
    const word = prompt('Enter a word: ');
    const reversed = word.split('').reverse().join('');
    alert(`Your Palidrome is ${reversed}`);
}

reverse();