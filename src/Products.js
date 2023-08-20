/** @format */

import { Image } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import productsData from "./products.json"; // Assuming products.json is in the same directory

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryType = queryParams.get("type");

  // Find the sub-category based on the type in the query parameter
  const selectedSubCategory = productsData.categories
    .flatMap((category) => category.subCategories)
    .find((subCategory) => subCategory.type === subCategoryType);

  if (!selectedSubCategory) {
    return <div>Sub-category not found</div>;
  }
  console.log("selected sub", selectedSubCategory);
  return (
    <Layout>
      <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-50 pb-70---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">{selectedSubCategory?.name}</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            {/* ltn__product-item */}

            {selectedSubCategory?.products?.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
                  <div className="ltn__product-item ltn__product-item-3 text-center">
                    <div className="product-img">
                      <div>
                        <Image
                          style={{ minHeight: "256px", maxHeight: "256px" }}
                          src={item.image}
                          alt="#"
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <h2 className="product-title">
                        <p>{item.name}</p>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}

            {/*  */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
