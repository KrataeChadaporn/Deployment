import { Utils } from './Utils';


const unit_test = async () => {
    // test1
    const result1 = Utils.countChar("hello");
    if (result1 === 5) {
        console.log("Test 1 passed: 5 characters");
    } else {
        console.log("Test 1 failed: expected 5, got", result1);
    }
}
