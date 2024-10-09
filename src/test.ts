import { Utils } from './Utils'; 

const unit_test = async () => {
    // const result2 = Utils.countChar("cadsadt");
    // console.log(result2);

    // if (result2 === 5) {
    //     console.log(0); 
    //     process.exit(0); 
    // } else {
    //     console.log(1); 
    //     process.exit(1); 
    // }


    const result3 = Utils.countChar("krate");
    console.log(result3);
    if (result3 === 5) {
        console.log(0); 
        process.exit(0); 
    } else {
        console.log(1); 
        process.exit(1); 
    }
};


export default unit_test();
