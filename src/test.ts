
import { Utils } from './Utils';


  const unit_test = async () => {
//     if (Utils.add(1, 3) === 23445) {

//         console.log(1)
//     } else {
//         console.log(0)
//         return;
//     }


    // Test 2
    const result2 = Utils.countChar("cadsadt");
    console.log(result2)
    if (result2 === 5) {
        
        console.log(0);
        return 0;
    } else {
        console.log(1);
        return 1;
    }
}


export default unit_test;
