import { useParams } from "react-router-dom"
import Breadcrumb from "../components/breadcrum.jsx";
import ProductDetail from "../components/product-detail/product-detail.jsx";
import ProductTabs from "../components/product-tabs/product-tabs.jsx";
import RelatedProducts from "../components/related-product.jsx";
import { Products } from "../data/productData.js";

function ProductPage() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === Number(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", link: "/" },
        { label: "Shop", link: "/shop" },
        { label: product.name }
      ]} />
      <ProductDetail product={product} />
      <ProductTabs product={product} />
      <RelatedProducts />
    </>
  );
}

export default ProductPage;