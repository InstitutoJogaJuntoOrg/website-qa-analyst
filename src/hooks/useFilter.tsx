import { useContext } from "react";
import { ContextProducts, ProductsType } from "../context/products";

export const useFilter = (name: keyof ProductsType, type: string) => {
  const { products } = useContext(ContextProducts);
  const filteredItems = products.filter((item: ProductsType) => item[name] === type);
  return filteredItems;
}
