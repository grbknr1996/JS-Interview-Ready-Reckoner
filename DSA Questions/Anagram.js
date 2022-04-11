//String Anagram
//'hello' -> 'llheo'
//'ajay'->'aajy'

//condition
//length check (for both strings)
// {h:1,e:1,l:2,o:1}
//Now check in llheo whenever u get a alphabet decrement the value by 1
// {h:1,e:1,l:0,o:1}
// {h:0,e:1,l:0,o:1}
// {h:0,e:0,l:0,o:1}
// {h:0,e:0,l:0,o:0}

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let counter = {};

  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

console.log(isAnagram("hello", "llheo"));

//O(N)
