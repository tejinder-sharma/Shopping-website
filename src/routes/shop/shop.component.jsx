import SHOP_DATA from "../../shop-data.json";

import { ProductsContext } from "../../context/product.context";
import { useContext } from "react";
import ProductCard from "../../Components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="flex flex-wrap container mx-auto mt-24">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
