function naiveSearch(string, substr) {
  const letters = string.split('');
  const subLetters = substr.split('');

  let count = 0;

  for (let i = 0; i < letters.length; i++) {
    let isMatch = true;

    for (let j = 0; j < subLetters.length; j++) {
      if (letters[i + j] !== subLetters[j]) isMatch = false;
    };

    if (isMatch) count++;
  };

  return count;
}

console.log(naiveSearch('hahahasidvviovsihvobsklvbhaa', 'ha'));
