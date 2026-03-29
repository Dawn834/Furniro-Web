import React from "react";
import { comparisonSchema } from "../../data/productData";
import { useComparisonStore } from "../../store/useComparisonStore";
import { useCartStore } from "../../store/useCartStore";
import toast from "react-hot-toast";

function ComparisonTable() {
    const { comparedProducts } = useComparisonStore();
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <section className="comparison-table-section">
            <div className="container overflow-x-auto">
                <table className="comparison-table">
                    <tbody>
                        {comparisonSchema.map((section) => (
                            <React.Fragment key={section.id}>
                                {/* Section heading row */}
                                <tr className="comparison-section">
                                    <td className="comparison-section__label">{section.section}</td>
                                    {comparedProducts.map((p) => <td key={p.id}></td>)}
                                    {/* Fill empty columns if less than 4 products */}
                                    {[...Array(Math.max(0, 3 - comparedProducts.length))].map((_, i) => <td key={i}></td>)}
                                </tr>

                                {/* Spec rows */}
                                {section.fields.map((field) => (
                                    <tr key={field.key} className="comparison-row">
                                        <td className="comparison-row__label">{field.label}</td>
                                        {comparedProducts.map((product) => (
                                            <td key={product.id}>
                                                {product.specs?.[section.id]?.[field.key] || "N/A"}
                                            </td>
                                        ))}
                                        {/* Fill empty columns if less than 4 products */}
                                        {[...Array(Math.max(0, 3 - comparedProducts.length))].map((_, i) => <td key={i}></td>)}
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}

                        {/* Add to Cart row */}
                        <tr className="comparison-row comparison-row--actions">
                            <td></td>
                            {comparedProducts.map((product) => (
                                <td key={product.id}>
                                    <button
                                        className="btn btn--regular comparison-table__btn"
                                        onClick={() => {
                                            addToCart(product, 1);
                                            toast.success(`Đã thêm ${product.name} vào giỏ hàng!`);
                                        }}
                                    >
                                        Add To Cart
                                    </button>
                                </td>
                            ))}
                            {[...Array(Math.max(0, 3 - comparedProducts.length))].map((_, i) => <td key={i}></td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ComparisonTable;