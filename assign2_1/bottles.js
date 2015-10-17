var count = 99;
var word = "bottles";
while ( count > 0 ) {
  if (count > 1) {
	console.log(count + " " + word + " of beer on the wall");
	console.log(count + " " + word + " of beer,");
  } else {
	// remove plural from word
	console.log(count + " " + word.substring(0,word.length-1) + " of beer on the wall");
	console.log(count + " " + word.substring(0,word.length-1) + " of beer,");
  }
  console.log("Take one down, pass it around,");
  count--;
  if (count > 1) {
	console.log(count + " " + word + " of beer on the wall.");
  } else if (count == 1) {
	// remove plural from word
	console.log(count + " " + word.substring(0,word.length-1) + " of beer on the wall.");
  } else
  {
	console.log("No " + word + " of beer on the wall.");
  }
  console.log("");

}

