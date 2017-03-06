console.log("*** Welcome to Fizz Buzz Game ***");
for (fb = 1; fb <= 20; fb++){
  if ( (fb % 3) === 0 && (fb % 5) === 0 ){
    console.log("fizzbuzz (" + fb +")");
  } else if ( (fb % 3) === 0) {
    console.log("fizz (" + fb +")");
  } else if ( (fb % 5) === 0 ) {
    console.log("buzz (" + fb +")");
  }else {
    console.log(fb);
  }
};
