// Print words of a string in reverse order.
// Let there be a string say “I AM A TESTER So, the output should be TESTER A AM I”

const words_in_reverse_order = (string) => {
  return string.split(" ").reverse().join(' ');
};

const input = "I AM A TESTER";
console.log("words_in_reverse_order", words_in_reverse_order(input));
