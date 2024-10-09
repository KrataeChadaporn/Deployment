"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
// const unit_test = async () => {
//     // test1
//     const result1 = Utils.countChar("hello");
//     if (result1 === 5) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// Test 2
const result2 = Utils_1.Utils.countChar("cat");
if (result2 === 4) {
    console.log(0);
}
else {
    console.log(1);
}
exports.default = unit_test;
