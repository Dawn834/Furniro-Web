function TabsNav({ tabs, activeTab, setActiveTab }) {

  return (
    <div className="product-tabs__nav">

      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`product-tabs__nav-item ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}

    </div>
  );
}

export default TabsNav;