module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig);
  const openBrackets = new Set(bracketsConfig.map((pair) => pair[0]));
  const sameBrackets = new Set(
    bracketsConfig.filter((pair) => pair[0] === pair[1]).map((pair) => pair[0])
  );

  for (let i = 0; i < str.length; i += 1) {
    const current = str[i];

    if (sameBrackets.has(current)) {
      // Если скобка одинаковая, проверяем стек
      if (stack.length && stack[stack.length - 1] === current) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else if (openBrackets.has(current)) {
      // ..Если это открывающая скобка, добавляем её в стек
      stack.push(current);
    } else {
      // Если это закрывающая скобка
      if (stack.length === 0) {
        return false;
      }
      const lastOpened = stack.pop();
      if (bracketsMap.get(lastOpened) !== current) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
