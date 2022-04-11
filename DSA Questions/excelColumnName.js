/*MS Excel columns have a pattern like A, B, C, …, Z, AA, AB, AC, …., 
AZ, BA, BB, … ZZ, AAA, AAB ….. etc. In other words, column 1 is named as “A”, column 2 as “B”, column 27 as “AA”.
Given a column number, find its corresponding Excel column name. The following are more examples.

Input          Output
 26             Z
 51             AY
 52             AZ
 80             CB
 676            YZ
 702            ZZ
 705            AAC
 */
function printString(columnNumber) {
  // To store result (Excel column name)
  let columnName = [];

  while (columnNumber > 0) {
    // Find remainder
    let rem = columnNumber % 26;

    // If remainder is 0, then a
    // 'Z' must be there in output
    if (rem == 0) {
      columnName.push("Z");
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } // If remainder is non-zero
    else {
      columnName.push(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
      columnNumber = Math.floor(columnNumber / 26);
    }
  }

  // Reverse the string and print result
  return columnName.reverse().join("");
}
console.log("A".charCodeAt(0));
console.log(printString(27)); //AA
