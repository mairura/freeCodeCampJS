//Converts a numeric number to Roman Number in Uppercase
function convertToRoman(num) {
  let roman = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let numeric = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let result = "";
  while (num >= 4000) {
    result += "M";
    num -= 1000;
  }
  for (let i = numeric.length - 1; num > 0; i--) {
    while (num >= numeric[i]) {
      result += roman[i];
      num -= numeric[i];
    }
  }
  return result;
}

convertToRoman(36);
