export const idToName = (id: string) => {
  let name = "";
  let isUpper = false;
  for (let char of id) {
    if (char != "_") {
      if (isUpper) {
        name += char.toLocaleUpperCase();
        isUpper = false;
      } else {
        name += char;
      }
    }
    if (char === "_") {
      isUpper = true;
    }
  }
  return name;
};
