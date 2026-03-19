import comparisonData from "../../data/comparisonData";

function ComparisonTable() {
    return (
        <section className="comparison-table-section">
            <div className="container">
                <table className="comparison-table">
                    <tbody>
                        {comparisonData.map((section, index) => (
                            <>
                                {/* Section heading row */}
                                <tr className="comparison-section" key={`section-${index}`}>
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

                                {/* Add to Cart row at end of last section */}
                                {index === comparisonData.length - 1 && (
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
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ComparisonTable;