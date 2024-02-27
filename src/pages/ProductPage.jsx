import React from "react";
import ProductList from "../components/product/ProductList";
import SideBar from "../components/product/SideBar";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "300px", flex: "none" }}>
        <SideBar />
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
