
function ComparisonTable() {

    return (
        <section className="comparison-table-section">

            <div className="container">

                <table className="comparison-table">

                    <tbody>

                        {comparisonData.map((section, index) => (

                            <>

                                <tr className="comparison-section" key={index}>
                                    <td>{section.section}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                {section.specs.map((spec, i) => (

                                    <tr key={i}>

                                        <td>{spec.label}</td>

                                        <td>{spec.values[0]}</td>

                                        <td>{spec.values[1]}</td>

                                        <td></td>

                                    </tr>

                                ))}

                            </>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>
    );
}

export default ComparisonTable;