import { Tabs } from "../App";

interface TabButtonProps {
  text: Tabs;
  currentTab: Tabs;
  setCurrentTab: React.Dispatch<React.SetStateAction<Tabs>>;
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
