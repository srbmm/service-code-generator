export const makeName = (summary: string, method: string) => {
  let name = "";
  method = capitalizeFirstLetter(method);
  let isUpper = false;
  for (let char of summary) {
    if (char != " ") {
      if (isUpper) {
        name += char.toUpperCase();
        isUpper = false;
      } else {
        name += char;
      }
    } else {
      isUpper = true;
    }
  }
  return lowerFirstLetter(name + method);
};

function capitalizeFirstLetter(str: string) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

function lowerFirstLetter(str: string) {
  return String(str).charAt(0).toLocaleLowerCase() + String(str).slice(1);
}