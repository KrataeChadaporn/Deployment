
import { Utils } from './Utils';


const unit_test = async () => {
    // test1
    const result1 = Utils.countChar("hello");
    if (result1 === 5) {
        console.log(0);
    } else {
        console.log(1);
    }
}

export default unit_test;
