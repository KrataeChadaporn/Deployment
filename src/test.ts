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

const unit_test3 = async () => {

    const unit_test3 = async () => {
        if (Utils.minut(3, 2) === 1) {

            console.log(0)
            process.exit(0);
        } else {
            console.log(1)
            process.exit(0);
            
        }
    }
};
const unit_test4 = async () => {
    if (Utils.multi(1, 4) === 4) {

        console.log(0)
        process.exit(0);
    } else {
        console.log(1)
        process.exit(1);
        return;
    }
}
export const test ={unit_test,unit_test2,unit_test3,unit_test4}
