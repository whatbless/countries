import React, { useEffect, useState } from "react";
import image from "./../../images/portugal/slider-image1.jpg";
import LineBlock from "./LineBlock";

const blocks = [
  {
    title: "הכנת מסמכים ובדיקת כשירות משפטית",
    desc: "עורך הדין שלנו יעזור לכם באיסוף כל מכלול המסמכים, תרגום לשפה הפורטוגזית והוספת אפוסטיל. המשקיע יעבור את בדיקת Due Diligence מקדימה, במסגרתה יספק מידע אודות אישיותו, עיסוקיו ומקורות ההכנסה. זה יאפשר הכנה מוקדמת לבדיקה הראשית ויפחית את הסיכוי לסירוב.",
    image: image,
  },
  {
    title: "הגשת המסמכים ובחירת הנכס",
    desc: "ניתן לבחור את הנכס מרחוק, מתוך בסיס הנתונים של נכסים בדוקים. טרם הנסיעה ניתן להכין מראש את רשימת הנכסים המועדפים ולבצע סקירה מקדימה אונליין. המשקיע יגיע לפורטוגל כדי לראות את הנכסים. המומחה שלנו ילווה אתכם בכל שלב ויסייע בהגשת המסמכים. במהלך הביקור ניתן ללמוד על עורך החיים, התרבות ומסורת המדינה.",
    image: image,
  },
  {
    title: "מספר תיק מיסוי וחשבון בנק",
    desc: `לשם ביצוע עסקת הנדל"ן יש לקבל NIF – מס' תיק מיסוי (Número de Identificação Fiscal). עורך הדין יבצע זאת עבור המשקיע בלשכת המיסים האזורית, בהתאם למיקום הנכס. יש גם צורך בפתיחת חשבון בנק אליו יזרמו כספי ההשקעה וממנו ישולמו כל האגרות הממשלתיות. רכישת נדל"ן אפשרית רק באמצעות תשלום שלא מערב מזומן.`,
    image: image,
  },
  {
    title: "חתימה על זיכרון דברים והעברת מקדמה",
    desc: "זיכרון הדברים מאשר את התחייבות המוכר והקונה לבצע עסקה וקובע את המחיר. הקונה מעביר מקדמה, כדי לשמור את הזכות על הנכס, לרוב בין 10 ל30% מסך המחיר, בהתאם לתנאי המוכר. במידה והקונה יסרב לחתום על ההסכם הסופי, המקדמה תוותר בידי המוכר. במידה ויסרב המוכר – הקונה יקבל את המקדמה הכפולה.",
    image: image,
  },
  {
    title: "הכנת העסקה",
    desc: "עורך הדין שלנו בפורטוגל יערוך את הבדיקות הנחוצות, יבדוק את מסמכי הנכס, יוודא שלא קיימים שעבודים או חובות  מיסים ותשלומים שוטפים. במידה ויימצאו חוסרים המוכר מתחייב לסלקם תוך תקופת זמן הקבועה בזיכרון דברים.",
    image: image,
  },
  {
    title: "העסקה הסופית",
    desc: `עד שלושה ימים טרם החתימה על ההסכם הסופי יש לשלם אגרה ממשלתית (Imposto de Selo) ומס העברת זכויות הבעלות (Imposto Municipal Sobre as Transaccoes, IMT). זה מתבצע בלשכת המיסים האזורית, בהתאם למיקום הנכס. סך האגרה הממשלתית הנו 0,8% מעלות הנכס כפי שמצוין בהסכם המכירה וסך מס הIMT תלוי בעלות וסוג הנכס. עבור נכסם מסחריים המס מסתכם ב6,5% ועבור דיור נקבע על פי מדרג עולה. הלקוח יגיע למעמד חתימת ההסכם הסופי אודות העסקה בליווי עורך הדין שלנו. החתימה תתרחש בפורטוגל, במשרד נוטריון מורשה. הכספים יוזרמו לחשבון נאמנות ייעודי ומשם יועברו אל הקונה.  החשבון יפתח בבנק אשר יתפקד כנאמן. הכספים יירשמו בחשבון וינוכו ממנו בהתאם לצורך כתשלום עבור נכס הנדל"ן.את אישור הרכישה הבנקאי על שם הקונה יש להציג בפני שרות ההגירה כאישור השקעה.`,
    image: image,
  },
  {
    title: "רישום הבעלות על הנכס. ",
    desc: `אנו מבצעים רישום של הבעלים החדש בשרות המיסים ולשכת המקרקעין (Conservatoria do Registo Predial).  תקבלו תעודת רישום חדשה (Certidão de Teor) וכן את פנקס דיירי הבית.  אנו נחדש את כל הסכמי שרותי הדיור. ניתן להשאיר את הספקים השוטפים או לבחור ספקי שרות אחרים. אין צורך להיבהל מההליכים המפורטים לעיל. אנו לוקחים על עצמנו את כל הפעולות הכרוכות ברכישת נדל"ן בפורטוגל משלב הבחירה ועד לרישום ושרות שלאחר המכירה.`,
    image: image,
  },
];

const Line = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [scroll, setScroll] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <section className="px-10 relative py-20 overflow-hidden" dir="rtl">
      <div className="container mx-auto w-full relative">
        <div className="absolute top-0 h-full w-full flex justify-center overflow-y-hidden">
          <div className="w-3 rounded-full bg-pastel-grey border h-full relative flex justify-center">
            {blocks.map((block, index: number) => (
              <div
                className={
                  width >= 1536 && scroll < 3400 + index * 480
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 1536 > width &&
                      width >= 1280 &&
                      scroll < 3460 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 1280 > width &&
                      width >= 1024 &&
                      scroll < 3660 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 1024 > width &&
                      width >= 768 &&
                      scroll < 4000 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 768 > width && width >= 640 && scroll < 4355 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : width < 640 && scroll < 4400 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : "absolute px-7 py-5 bg-regal-red  text-white rounded-full duration-200 font-bold"
                }
                style={{ top: `${(index + 1) * 200 + index * 295}px` }}
              >
                {index + 1}
              </div>
            ))}
            <div
              className="w-full rounded-full bg-regal-red"
              style={{
                height: `${
                  scroll -
                  (width >= 1536
                    ? 3200
                    : 1536 > width && width >= 1280
                    ? 3260
                    : 1280 > width && width >= 1024
                    ? 3460
                    : 1024 > width && width >= 768
                    ? 3800
                    : 768 >= width && width > 640
                    ? 4155
                    : 4200)
                }px`,
              }}
            ></div>
          </div>
        </div>
        <div className="space-y-10">
          {blocks.map((block, index: number) => (
            <div
              className={
                index % 2 === 0
                  ? width >= 1536 && scroll < 3400 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96"
                    : 1536 > width &&
                      width >= 1280 &&
                      scroll < 3460 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96"
                    : 1280 > width &&
                      width >= 1024 &&
                      scroll < 3660 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96"
                    : 1024 > width &&
                      width >= 768 &&
                      scroll < 4000 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96"
                    : 768 > width && width >= 640 && scroll < 4355 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96"
                    : width < 640 && scroll < 4400 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96"
                    : "flex justify-start w-full duration-500"
                  : width >= 1536 && scroll < 3400 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96"
                  : 1536 > width && width >= 1280 && scroll < 3460 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96"
                  : 1280 > width && width >= 1024 && scroll < 3660 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96"
                  : 1024 > width && width >= 768 && scroll < 4000 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96"
                  : 768 > width && width >= 640 && scroll < 4355 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96"
                  : width < 640 && scroll < 4400 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96"
                  : "flex justify-end w-full duration-500"
              }
            >
              <div className="w-[40%] h-[455px]">
                <LineBlock
                  title={block.title}
                  desc={block.desc}
                  image={block.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Line;
