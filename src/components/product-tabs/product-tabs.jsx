import { useState } from "react";
import { productTabs } from "../../data/productData";
import TabsNav from "./tabsNav";
import TabsContent from "./tabsContent";

function ProductTabs() {

    const [activeTab, setActiveTab] = useState(productTabs[0].id);

    const currentTab = productTabs.find(
        tab => tab.id === activeTab
    );

    return (
        <section className="product-tabs">

            <div className="container">

                <TabsNav
                    tabs={productTabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <TabsContent tab={currentTab} />

            </div>

        </section>
    );
}

export default ProductTabs;