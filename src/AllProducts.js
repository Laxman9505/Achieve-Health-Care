/** @format */

import { Image } from "antd"; // Import the image component from your image library
import React from "react";
import Layout from "./Layout";
import allProducts from "./products.json"; // Import your JSON data

const AllProducts = () => {
  return (
    <Layout>
      <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-50 pb-70---">
        <div className="container">
          {allProducts.categories.map((category) => (
            <div key={category.type}>
              <h1 className="text-center">{category.name}</h1>
              {category.subCategories.map((subCategory) => (
                <div key={subCategory.type}>
                  <h3>{subCategory.name}</h3>
                  <div className="row">
                    {subCategory.products.map((product, index) => (
                      <div
                        className="col-lg-3 col-md-4 col-sm-6 col-6"
                        key={index}
                      >
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <div>
                              <Image
                                style={{
                                  minHeight: "256px",
                                  maxHeight: "256px",
                                }}
                                src={product.image}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="product-info">
                            <h2 className="product-title">
                              <p>{product.name}</p>
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
