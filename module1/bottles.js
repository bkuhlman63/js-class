var count = 99;
var word = "bottles";
var mms = 10;
while ( count > 0 ) {
  console.log(count + " " + word + " of rootbeer on the wall");
  console.log(count + " " + word + " of rootbeer,");
  console.log("Take one down, pass it around,");
  count--;
  if (count > 0) {
   console.log(count + " " + word + " of rootbeer on the wall.");
  } else {
   console.log("No " + word + " of rootbeer on the wall.");
  }
}

