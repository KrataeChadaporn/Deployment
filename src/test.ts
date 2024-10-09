
import { Utils } from './Utils';


  const unit_test = async () => {
//     if (Utils.add(1, 3) === 23445) {

//         console.log(1)
//     } else {
//         console.log(0)
//         return;
//     }





    const result2 = Utils.countChar("cadsadt");
    console.log(result2); // แสดงผลลัพธ์ใน console

    // ตรวจสอบว่าผลลัพธ์ตรงตามที่คาดหวังหรือไม่
    if (result2 === 5) {
        console.log(0); // แสดงผล 0 ถ้าผลลัพธ์ตรง
        process.exit(0); // ออกจากโปรแกรมด้วยรหัส 0 สำหรับความสำเร็จ
    } else {
        console.log(1); // แสดงผล 1 ถ้าผลลัพธ์ไม่ตรง
        process.exit(1); // ออกจากโปรแกรมด้วยรหัส 1 สำหรับความล้มเหลว
    }
};

export default unit_test;


