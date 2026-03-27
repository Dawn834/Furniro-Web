import PageHero from "../components/PageHero";
import ComparisonHeader from "../components/ProductComparison/ComparisonHeader";
import ComparisonTable from "../components/ProductComparison/ComparisonTable";
import ServiceFeatures from "../components/ServiceFeatures";

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