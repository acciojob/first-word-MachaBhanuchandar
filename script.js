function firstWord(s) {
  // your code here
	if(typeof s!=='string'||s.length===0){
		return "";
	}
	s=s.trim();
	const firstSpace=s.indexOf(' ');
	if(firstSpace===-1){
		return s;
	}
	return s.substring(0,firstSpace);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
