import React from "react";
import { comparisonData } from "../../data/productData";

function ComparisonTable() {
    return (
        <section className="comparison-table-section">
            <div className="container overflow-x-auto">
                <table className="comparison-table">
                    <tbody>
                        {comparisonData.map((section, index) => (
                            <React.Fragment key={`section-${index}`}>
                                {/* Section heading row */}
                                <tr className="comparison-section">
                                    <td className="comparison-section__label">{section.section}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                {/* Spec rows */}
                                {section.specs.map((spec, i) => (
                                    <tr key={`spec-${index}-${i}`} className="comparison-row">
                                        <td className="comparison-row__label">{spec.label}</td>
                                        <td>{spec.values[0]}</td>
                                        <td>{spec.values[1]}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}

                        {/* Add to Cart row at the very end */}
                        <tr className="comparison-row comparison-row--actions">
                            <td></td>
                            <td>
                                <button className="btn btn--regular comparison-table__btn">
                                    Add To Cart
                                </button>
                            </td>
                            <td>
                                <button className="btn btn--regular comparison-table__btn">
                                    Add To Cart
                                </button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ComparisonTable;