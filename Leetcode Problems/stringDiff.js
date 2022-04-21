// Find Difference Between Two String
function findDiff(str1, str2) {
  let diff = "";
  str2.split("").forEach(function (val, i) {
    if (val != str1.charAt(i)) diff += val;
  });
  return diff;
}

console.log(findDiff("abc", "abcc"));
console.log(findDiff("bacc", "abccd"));

function getDifference(a, b) {
  var i = 0;
  var j = 0;
  var result = "";

  while (j < b.length) {
    if (a[i] != b[j] || i == a.length) result += b[j];
    else i++;
    j++;
  }
  return result;
}

console.log(getDifference("bacc", "abccd"));
