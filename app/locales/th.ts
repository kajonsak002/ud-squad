import { Dictionary } from "./en";

export const th: Dictionary = {
    nav: {
        features: "ฟีเจอร์",
        pricing: "ราคา",
        docs: "คู่มือ",
        contact: "ติดต่อเรา",
        getStarted: "เริ่มต้นใช้งาน"
    },
    hero: {
        badge: "🚀 แพลตฟอร์มวิเคราะห์โค้ดด้วย AI",
        title1: "ยกระดับการจัดการโค้ด",
        title2: "ล้ำหน้าด้วย AI",
        desc: "วิเคราะห์ ตรวจหาปัญหา และยกระดับโค้ดแอปพลิเคชันของคุณอัตโนมัติ รวดเร็วกว่า แม่นยำกว่า เจาะจงสำหรับนักพัฒนาซอฟต์แวร์โดยเฉพาะ",
        startBtn: "เริ่มต้นใช้งาน",
        demoBtn: "ดูตัวอย่าง",
        registerBtn: "ลงทะเบียน",
        stat1: "กลยุทธ์แห่งอนาคต",
        stat2: "สนับสนุนลูกค้า 24/7"
    },
    features: {
        f1: {
            title: "รีวิวโค้ดด้วย AI อัตโนมัติ",
            desc: "ตรวจสอบโค้ดของคุณเพื่อหาบัค รูปแบบที่ไม่เหมาะสม และปัญหาแฝงต่างๆ ได้อย่างแม่นยำระดับมืออาชีพ",
            tag: "วิเคราะห์อัตโนมัติ"
        },
        f2: {
            title: "ข้อเสนอปรับปรุงโค้ดอัจฉริยะ",
            desc: "ปรับโครงสร้างโค้ดอย่างปลอดภัยพร้อมคำแนะนำจาก AI และเข้าใจผลกระทบด้วยภาพรวมก่อนนำไปใช้จริง",
            tag: "แก้ไขอย่างชาญฉลาด"
        },
        f3: {
            title: "วิเคราะห์ผลกระทบเชิงลึก",
            desc: "ดูแผนผังโครงข่ายของระบบที่ได้รับผลกระทบจากการแก้ไขโค้ดของคุณแบบเรียลไทม์ ทำให้ทุกอัปเดตปลอดภัยไร้รอยต่อ",
            tag: "ทำแผนที่ระบบทั้งหมด"
        }
    },
    pricing: {
        title: "แพ็กเกจของเรา",
        desc: "เลือกแพ็กเกจที่เหมาะสมกับการทำงานของคุณที่สุด",
        getStarted: "เริ่มต้นใช้งาน",
        starter: {
            name: "เริ่มต้น",
            desc: "สำหรับผู้เริ่มต้นทำงานส่วนตัว",
            features: ["รีวิวโค้ด AI ขั้นพื้นฐาน", "ความสามารถวิเคราะห์จำกัด", "ซัพพอร์ตจากคอมมูนิตี้"]
        },
        pro: {
            name: "โปร (ยอดนิยม)",
            desc: "สำหรับนักพัฒนา & ทีมขนาดเล็ก",
            features: ["รีวิวโค้ด AI ระดับสูง", "ข้อเสนอแนะ Refactor", "วิเคราะห์ผลกระทบรวม", "สิทธิ์ซัพพอร์ตระดับ Priority"]
        },
        enterprise: {
            name: "ระดับองค์กร",
            price: "ตกลงราคา",
            desc: "สำหรับทีมและองค์กรขนาดใหญ่",
            features: ["ใช้งานเครื่องมือ AI ทั้งหมด", "รองรับบัญชีทีม", "ปรับแต่ง API ส่วนตัว", "ทีมซัพพอร์ตส่วนตัว"]
        }
    },
    footer: {
        brandDesc: "สร้างซอฟต์แวร์ที่ดีกว่าเดิมด้วยเครื่องมือวิเคราะห์และจัดระเบียบโค้ดขับเคลื่อนโดย AI",
        product: "ผลิตภัณฑ์",
        company: "บริษัท",
        support: "ช่วยเหลือ",
        rights: "สงวนลิขสิทธิ์",
        links: {
            features: "ฟีเจอร์", pricing: "แพ็กเกจ", docs: "คู่มือ",
            about: "เกี่ยวกับเรา", blog: "บทความ", careers: "ร่วมงานกับเรา",
            contact: "ติดต่อเรา", help: "ศูนย์ช่วยเหลือ", privacy: "นโยบายความเป็นส่วนตัว"
        }
    },
    docs: {
        title: "คู่มือการใช้งาน",
        desc: "ทุกสิ่งที่คุณต้องรู้ในการเชื่อมต่อ UD-Squad เข้า with ระบบของคุณ",
        getStarted: "เริ่มต้นด่วน",
        introduction: "บทนำ",
        install: "การติดตั้ง",
        auth: "การยืนยันตัวตน (Auth)",
        usage: "การใช้งาน",
        commands: "คำสั่ง CLI",
        cicd: "การเชื่อมต่อ CI/CD",
        api: "API Reference",
        installCode: "npm install -g @udsquad/cli",
        installDesc: "ติดตั้ง CLI เพื่อเริ่มวิเคราะห์โค้ดของคุณในไม่กี่วินาที",
        authDesc: "ในการใช้ UD-Squad ใน CI/CD pipeline คุณต้องมี API key ซึ่งคุณสามารถสร้างได้จากหน้าแดชบอร์ดผู้ใช้ในส่วน Settings -> API Keys",
        usageTitle: "วิธีเริ่มสแกนโค้ด",
        usageDesc: "เมื่อติดตั้งแล้ว ให้ไปที่โฟลเดอร์หลักของโปรเจกต์ของคุณแล้วรันคำสั่งต่อไปนี้เพื่อเริ่มการวิเคราะห์:",
        usageCode: "ud-squad scan",
        cicdTitle: "ระบบ CI/CD (Continuous Integration)",
        cicdDesc: "เชื่อมต่อ UD-Squad เข้ากับ GitHub Actions หรือ GitLab CI เพื่อตรวจหาบัคก่อนที่โค้ดจะถูกรวมเข้ากับสาขาหลัก",
        cicdCode: "- name: Run UD-Squad Scan\n  run: ud-squad scan --api-key=${{ secrets.UD_SQUAD_API_KEY }}"
    },
    contact: {
        title: "ติดต่อสอบถาม",
        desc: "มีคำถามเกี่ยวกับแพลตฟอร์ม AI ของเราใช่ไหม? พูดคุยกับเราได้เลย",
        name: "ชื่อ-นามสกุล",
        email: "อีเมล",
        subject: "หัวข้อขี้เเจง",
        message: "ข้อความของคุณ",
        send: "ส่งข้อความ",
        success: "ส่งข้อความสำเร็จแล้ว!",
        contactInfo: "ข้อมูลติดต่อ",
        address: "123 Innovation Drive, Tech City, TC 10100",
        emailStr: "support@udsquad.ai",
        phone: "+1 (555) 123-4567"
    },
    dashboard: {
        menu: {
            main: "เมนูหลัก",
            modernization: "การปรับปรุงระบบ",
            moreTools: "เครื่องมือเพิ่มเติม",
            dashboard: "แดชบอร์ด",
            codeInterpreter: "ตัวแปลโค้ด",
            securityGuard: "ระบบรักษาความปลอดภัย",
            refactoringPlanner: "วางแผนปรับโครงสร้าง",
            microservicesSplitter: "แยกไมโครเซอร์วิส",
            onboardingTimeMachine: "ไทม์แมชชีนแนะนํา",
            databaseBridge: "สะพานข้อมูล",
            apiAdapter: "ตัวแปลง API",
            assessmentReport: "รายงานการประเมิน",
            dependencyVisualizer: "แผนผังความเชื่อมโยง"
        },
        overview: {
            welcome: "ยินดีต้อนรับกลับมา",
            stats: {
                totalAnalyses: "วิเคราะห์ทั้งหมด",
                criticalIssues: "ปัญหาเร่งด่วน",
                uptime: "เวลาทำงานระบบ",
                efficiency: "ประสิทธิภาพโค้ด"
            }
        }
    },
    auth: {
        login: {
            title: "ยินดีต้อนรับกลับมา",
            subtitle: "กรุณาเข้าสู่ระบบเพื่อเข้าถึงแดชบอร์ดของคุณ",
            email: "ที่อยู่อีเมล",
            password: "รหัสผ่าน",
            forgotPassword: "ลืมรหัสผ่าน?",
            signIn: "เข้าสู่ระบบ",
            signingIn: "กำลังเข้าสู่ระบบ...",
            noAccount: "ยังไม่มีบัญชีใช่ไหม?",
            register: "สมัครสมาชิกที่นี่"
        },
        register: {
            title: "สร้างบัญชีใหม่",
            subtitle: "เข้าร่วมรุ่นต่อไปของระบบอัจฉริยะด้านโค้ด",
            name: "ชื่อ-นามสกุล",
            email: "ที่อยู่อีเมล",
            password: "รหัสผ่าน",
            confirmPassword: "ยืนยันรหัสผ่าน",
            signUp: "สร้างบัญชี",
            signingUp: "กำลังสร้างบัญชี...",
            hasAccount: "มีบัญชีอยู่แล้วใช่ไหม?",
            login: "เข้าสู่ระบบที่นี่"
        }
    }
}
