'use client'
export default function DescriptionNav({setCurrentTab, currentTab}) {
  return (
    <div className="flex flex-row">
      <button
        className={`text-white border-r border-neutral-50/20 w-1/2 p-3 ${
          currentTab === 0 ? "bg-black " : "border-b bg-[#1e1e1e]"
        }`}
        onClick={() => setCurrentTab(0)}
      >
        Description
      </button>
      <button
        className={`text-white border-neutral-50/20 w-1/2 p-3 ${
          currentTab === 1 ? "bg-black " : "border-b bg-[#1e1e1e]"
        }`}
        onClick={() => setCurrentTab(1)}
      >
        Solution
      </button>
    </div>
  );
}
