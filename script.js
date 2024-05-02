function firstWord(s) {
  // your code here
	if(s.length == 0) return s;
	if (!s.includes(' ')) {
        return s;
    }
    return s.substring(0, s.indexOf(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
