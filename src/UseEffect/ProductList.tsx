import React, { useEffect, useState } from "react";

// Defining inline prop category
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  //   useEffcet will reRender on the basis of change in second argument which is category
  useEffect(() => {
    console.log("Fetching Products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
