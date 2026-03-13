import TabsImages from "./tabsImg";

function TabsContent({ tab }) {

  return (
    <div className="product-tabs__content">

      <div className="product-tabs__text">

        {tab.text?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

      </div>

      {tab.images && (
        <TabsImages images={tab.images} />
      )}

    </div>
  );
}

export default TabsContent;