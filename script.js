function firstWord(s) {
  // your code here
	if (!s.includes(' ')) {
        return s;
    }
    return s.substring(0, s.indexOf(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
