import { Tabs } from "../layout.jsx";

type tabButtonStyle = "Overview" | "Benefit" | "Direction" | "Storage Medthod" | "Cautions" | "Q&A";
interface TabButtonProps {
  text: tabButtonStyle;
  currentTab: tabButtonStyle;
  setCurrentTab: React.Dispatch<React.SetStateAction<tabButtonStyle>>;
}

export function TabButton(props: TabButtonProps) {
  const { text, currentTab, setCurrentTab } = props;
  return (
    <button
      className={`btn${text === currentTab ? " clicked" : ""}`}
      onClick={() => setCurrentTab(text)}
    >
      {text}
    </button>
  );
}
