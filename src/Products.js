/** @format */

import { pdf } from "@react-pdf/renderer";
import { Button, Image, message, Typography } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import productsData from "./products.json";
import ProductsPDF from "./ProductsPDF";

const { Title } = Typography;

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get("type");
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Find if the type is a category or sub-category
  const selectedCategory = productsData.categories.find(
    (category) => category.type === typeParam
  );
  const selectedSubCategory = productsData.categories
    .flatMap((category) => category.subCategories)
    .find((subCategory) => subCategory.type === typeParam);

  const optimizeImageUrl = (url) => {
    if (url.includes("cloudinary")) {
      return url.replace("/upload/", "/upload/q_auto,f_auto,w_300/");
    }
    return url;
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      let content;
      if (selectedCategory) {
        // For category PDF, include all sub-categories and their products
        content = selectedCategory.subCategories.map((subCategory) => ({
          ...subCategory,
          products: subCategory.products.map((product) => ({
            ...product,
            image: optimizeImageUrl(product.image),
          })),
        }));
      } else if (selectedSubCategory) {
        // For sub-category PDF, just include that sub-category
        content = {
          ...selectedSubCategory,
          products: selectedSubCategory.products.map((product) => ({
            ...product,
            image: optimizeImageUrl(product.image),
          })),
        };
      }

      const blob = await pdf(
        <ProductsPDF
          content={content}
          isCategory={!!selectedCategory}
          title={selectedCategory?.name || selectedSubCategory?.name}
        />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${(
        selectedCategory?.name || selectedSubCategory?.name
      ).replace(/\s+/g, "_")}_products.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 100);
      message.success("PDF exported successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      message.error("Failed to generate PDF");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (!selectedCategory && !selectedSubCategory) {
    return <div>Category/Sub-category not found</div>;
  }

  return (
    <Layout>
      <div className="ltn__product-area ltn__product-gutter no-product-ratting pt-50 pb-70---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">
                  {selectedCategory?.name || selectedSubCategory?.name}
                </h1>
              </div>
            </div>
          </div>

          {selectedCategory ? (
            // Display all sub-categories and their products for a category
            selectedCategory.subCategories.map((subCategory) => (
              <div key={subCategory.type} style={{ marginBottom: "40px" }}>
                <Title
                  level={2}
                  style={{ textAlign: "center", margin: "20px 0" }}
                >
                  {subCategory.name}
                </Title>
                <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                  {subCategory.products?.map((item, index) => (
                    <div
                      className="col-lg-3 col-md-4 col-sm-6 col-6"
                      key={index}
                    >
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <Image
                            style={{
                              minHeight: "256px",
                              maxHeight: "256px",
                              objectFit: "contain",
                            }}
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <div className="product-info">
                          <h2 className="product-title">
                            <p>{item.name}</p>
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Display products for a single sub-category
            <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
              {selectedSubCategory?.products?.map((item, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
                  <div className="ltn__product-item ltn__product-item-3 text-center">
                    <div className="product-img">
                      <Image
                        style={{
                          minHeight: "256px",
                          maxHeight: "256px",
                          objectFit: "contain",
                        }}
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="product-info">
                      <h2 className="product-title">
                        <p>{item.name}</p>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <Button
              type="primary"
              onClick={handleDownloadPDF}
              loading={isGeneratingPDF}
              size="large"
              style={{ background: "#3aa79e" }}
            >
              {isGeneratingPDF ? "Generating PDF..." : "Export to PDF"}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
