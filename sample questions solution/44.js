/**
 * Given a string, sort it in descending order.
 *  Input : mupursingh Output : uusrpnmihg
 */

const sortString = (str) => {
  return [...str].sort().reverse().join("");
};

console.log(sortString("mupursingh"));
