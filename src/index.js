module.exports = function check(str, bracketsConfig) {
  const stack = [];

  function isBrackets(ch) {
    return [')', '}', ']', '|'].indexOf(ch) > -1;
  }

  for (let i = 0; i < str.length; i += i) {
    const current = str[i];
    // проверка открывающиеся или закрывающаяся скобка
    if (isBrackets(current)) {
      if (bracketsConfig[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
};
