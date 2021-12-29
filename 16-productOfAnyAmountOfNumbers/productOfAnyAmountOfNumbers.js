function productOfAnyAmountOfNumbers(...args) {
  var sum = 1;
  for (var i = 0; i < args.length; i++) {
    sum = sum * args[i];
  }
  return sum;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;