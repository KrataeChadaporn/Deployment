"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const Utils_1 = require("./Utils");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    // const result2 = Utils.countChar("cadsadt");
    // console.log(result2);
    // if (result2 === 5) {
    //     console.log(0); 
    //     process.exit(0); 
    // } else {
    //     console.log(1); 
    //     process.exit(1); 
    // }
    const result3 = Utils_1.Utils.countChar("krate");
    console.log(result3);
    if (result3 === 5) {
        console.log(0);
        process.exit(0);
    }
    else {
        console.log(1);
        process.exit(1);
    }
});
const unit_test2 = () => __awaiter(void 0, void 0, void 0, function* () {
    if (Utils_1.Utils.add(1, 4) === 5) {
        console.log(0);
    }
    else {
        console.log(1);
        return;
    }
});
const unit_test3 = () => __awaiter(void 0, void 0, void 0, function* () {
    const unit_test3 = () => __awaiter(void 0, void 0, void 0, function* () {
        if (Utils_1.Utils.minut(3, 2) === 1) {
            console.log(0);
            process.exit(0);
        }
        else {
            console.log(1);
            process.exit(0);
        }
    });
});
const unit_test4 = () => __awaiter(void 0, void 0, void 0, function* () {
    if (Utils_1.Utils.multi(1, 4) === 4) {
        console.log(0);
        process.exit(0);
    }
    else {
        console.log(1);
        process.exit(1);
        return;
    }
});
exports.test = { unit_test, unit_test2, unit_test3, unit_test4 };
