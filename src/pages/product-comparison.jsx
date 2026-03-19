import PageHero from "../components/pageHero";
import ComparisonHeader from "../components/productComparison/comparisonHeader";
import ComparisonTable from "../components/productComparison/comparisonTable";
import ServiceFeatures from "../components/serviceFeatures";

function ProductComparison() {
    return (
        <>
            <PageHero title="Product Comparison" currentPage="Comparison" />
            <ComparisonHeader />
            <ComparisonTable />
            <ServiceFeatures />
        </>
    );
}

export default ProductComparison;