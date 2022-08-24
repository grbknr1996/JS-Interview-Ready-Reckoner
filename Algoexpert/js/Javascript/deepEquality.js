function deepEquals(valueOne, valueTwo) {
  if (typeof valueOne !== typeof valueTwo) return false;
  if (typeof valueOne !== "object") {
    if (Number.isNan(valueOne) && Number.isNan(valueTwo)) return true;
    return valueOne === valueTwo;
  }

  if (valueOne === null || valueTwo === null) return valueOne === valueTwo;
  if (valueOne === valueTwo) return true;
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }
    return true;
  }

  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if (valueOneKeys.length !== valueTwoKeys.length) return false;
  for (let key of valueOneKeys) {
    if (!valueTwo.hasOwnProperty(key)) return false;
    if (!deepEquals(valueOne[key], valueTwo[key])) return falsel;
  }

  return true;
}

// Do not edit the line below.
exports.deepEquals = deepEquals;
