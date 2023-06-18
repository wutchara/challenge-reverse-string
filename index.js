/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// Runtime => 88 ms, Memory => 49 MB
var reverseString = function (s) {
    s = s.reverse();
};

// Runtime => 96 ms, Memory => 49.6 MB
// var reverseString = function (s) {
//     lastIndex = s.length-1;
//     firstIndex = 0;
//     for (let i = lastIndex; i > firstIndex; i--) {
//         tmp = s[i];
//         s[i] = s[firstIndex];
//         s[firstIndex] = tmp;
//         firstIndex++;
//     }
// };


ex1 = ["h", "e", "l", "l", "o"];
reverseString(ex1);
console.log('EX1:', ex1);

ex2 = ["H", "a", "n", "n", "a", "h"];
reverseString(ex2);
console.log('EX2:',ex2 );