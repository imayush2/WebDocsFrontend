interface SideBarRightProps {
  topics: string[];
}

const SideBarRight: React.FC<SideBarRightProps> = ({ topics }) => {
  const handleScroll = (topic: string) => {
    const targetId = topic.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="w-70 h-[calc(100vh-5rem)] p-4 flex flex-col text-xl space-y-4 overflow-y-auto">
      <h2 className="font-bold text-gray-700">On this page</h2>
      <ul className="flex flex-col gap-2">
        {topics.map((topic, idx) => (
          <li
            key={idx}
            onClick={() => handleScroll(topic)}
            className="text-sm text-gray-700 cursor-pointer"
          >
            {topic}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBarRight;
