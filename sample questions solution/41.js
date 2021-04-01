// Given a string and a delimiter character.
// Split the string based on the delimiter and print the list of resulting sub strings.

const split_string_deli = (str, dlch) => {
  let temp = "";
  let sub_list = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== dlch) {
      temp += str[i];
    } else {
      if (temp !== "") {
        sub_list.push(temp);
      }
      temp = "";
    }
  }
  if (temp !== "") sub_list.push(temp);

  return sub_list;
};

const str = "geeks;for;geeks";
const dl = ";";
console.log("split_string_deli", split_string_deli(str, dl));
