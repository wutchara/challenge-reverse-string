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

// Runtime => 107 ms, Memory => 53.9 MB
// var reverseString = function (s, start = 0, end) {
//     if (start > end) {
//         return
//     }

//     if (!end) {
//         // first round
//         end = s.length - 1;
//     }

//     tmp = s[start];
//     s[start] = s[end];
//     s[end] = tmp;
//     reverseString(s, start + 1, end - 1);
// };


ex1 = ["h", "e", "l", "l", "o"];
reverseString(ex1);
console.log('EX1:', ex1);

ex2 = ["H", "a", "n", "n", "a", "h"];
reverseString(ex2);
console.log('EX2:', ex2);