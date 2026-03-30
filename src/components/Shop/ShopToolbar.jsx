import icon1 from "../../assets/img/icon/system-uicons_filtering.svg";
import icon2 from "../../assets/img/icon/filter2.svg";
import icon3 from "../../assets/img/icon/filter3.svg";


function ShopToolbar({ viewMode, setViewMode }) {
    return (
        <section className="shop-toolbar">
            <div className="container shop-toolbar__inner">

                {/* LEFT */}
                <div className="shop-toolbar__left">

                    <button className="shop-toolbar__filter">
                        <span className="icon"><img src={icon1} alt="" /></span>
                        <p>Filter</p>
                    </button>

                    <div className="shop-toolbar__view">
                        <button className={`shop-toolbar__view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
                            <span className="icon"><img src={icon2} alt="" /></span>
                        </button>
                        <button className={`shop-toolbar__view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
                            <span className="icon"><img src={icon3} alt="" /></span>
                        </button>
                    </div>


                    <p className="shop-toolbar__result">
                        Showing 1–16 of 32 results
                    </p>

                </div>

                {/* RIGHT */}
                <div className="shop-toolbar__right">

                    <div className="shop-toolbar__show">
                        <span>Show</span>
                        <input type="text" value="16" readOnly />
                    </div>

                    <div className="shop-toolbar__sort">
                        <span>Short by</span>
                        <select>
                            <option>Default</option>
                        </select>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ShopToolbar;