interface TabContentProps {
  currentTab: string;
}

export function TabContent({ currentTab }: TabContentProps) {
  const arr = [
    {
      text: "Overview",
      isCompleted: true,
      detail : " Whey Protein** เป็นเพียงการประเมิณเพื่อสะท้อน สรรพคุณสินค้าเท่านั้น ไม่ได้เปรียนเทียบระหว่างสินค้า BAAM!! MY WHEY เป็นเวย์ที่มีส่วนผสมของ Whey protein Concentrate เป็นหลัก (95%+) ที่มีความคุ้มค่าด้านราคาสูง และสามารถให้ผลได้จริง ตอบโจทย์ได้ทุกเป้าหมาย ไม่ว่าจะเพิ่มกล้ามเนื้อ หรือลดไขมัน สามารถใช้ได้ทั้งผู้ชาย และผู้หญิง BAAM!! MY WHEY จึงเหมาะสำหรับเป็นเวย์ถุงแรกของทุกคน"
     
    },
    {
      text: "Benefit",
      isCompleted: true,
      detail : "This is Benefit detail"
    },
    {
      text: "Direction",
      isCompleted: true,
      detail : "This is Direction detail"
    },

    {
      text: "Storage Medthod",
      isCompleted: true,
      detail : "This is Storage Medthod detail"
    },

    {
      text: "Cautions",
      isCompleted: true,
      detail : "This is Cautions detail"

    },

    {
      text: "Q&A",
      isCompleted: true,
      detail : "This is Q&A detail"

    },
  ];

  const createContent = (name: string) => {
    const content: JSX.Element[] = [];
    arr.forEach((item) => {
      const { text, isCompleted,detail} = item;
      if (text === name) {
        content.push(<span key={text}>{text}</span>);
        content.push(<span key={detail}>{detail}</span>);
      }
    });

    return content;
  };

  let content: JSX.Element[] = [];
  switch (currentTab) {
    case "Overview":
      content = createContent(currentTab);
      break;
    case "Benefit":
      content = createContent(currentTab);
      break;
    case "Direction":
      content = createContent(currentTab);
      break;
    case "Storage Medthod":
      content = createContent(currentTab);
      break;
    case "Cautions":
      content = createContent(currentTab);
      break;
    case "Q&A":
      content = createContent(currentTab);
      break;
    default:
      break;
  }

  return <div>{content}</div>;
}
