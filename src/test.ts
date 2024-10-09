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

const unit_test2 = async () => {
    if (Utils.add(1, 4) === 5) {

        console.log(0)
    } else {
        console.log(1)
        return;
    }
}


export const test= { unit_test,unit_test2}
