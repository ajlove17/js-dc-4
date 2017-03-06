console.log("*** 99 Bottles of Beer Song ***");

var drank = 0
for (beer = 99; beer >= 0; beer--){
  drank = beer;
  drank --;
  if (beer === 1){
    console.log( beer +" bottle of beer on the wall, "+ beer + " bottle of beer. \n Take one down and pass it around, "+ drank + " bottles of beer on the wall. \n");
  }
   else if (beer === 0){
      console.log( "No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
  else {
    console.log( beer +" bottles of beer on the wall, "+ beer + " bottles of beer. \n Take one down and pass it around, "+ drank + " bottles of beer on the wall. \n" );
  };
};
