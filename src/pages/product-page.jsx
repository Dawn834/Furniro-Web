
import { Link } from "react-router-dom"
import Breadcrumb from "../components/breadcrum.jsx";
import ProductDetail from "../components/product-detail/product-detail.jsx";
import ProductTabs from "../components/product-tabs/product-tabs.jsx";
import RelatedProducts from "../components/related-product.jsx";
function ProductPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", link: "/" },
        { label: "Shop", link: "/shop" },
        { label: "Asgaard sofa" }
      ]} />
      <ProductDetail />
      <ProductTabs />
      <RelatedProducts />
    </>
  );
}


export default ProductPage;