import { useParams } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ProductTabs from "../components/ProductTabs/ProductTabs";
import RelatedProducts from "../components/RelatedProduct";
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