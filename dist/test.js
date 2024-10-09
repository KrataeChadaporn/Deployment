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
const Utils_1 = require("./Utils"); // เปลี่ยนเส้นทางให้ถูกต้องตามโครงสร้างโปรเจคของคุณ
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
exports.default = unit_test();
