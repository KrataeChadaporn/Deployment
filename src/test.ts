import { Utils } from './Utils'; // เปลี่ยนเส้นทางให้ถูกต้องตามโครงสร้างโปรเจคของคุณ

const unit_test = async () => {
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

// เรียกใช้ฟังก์ชันทดสอบ
export default unit_test();
