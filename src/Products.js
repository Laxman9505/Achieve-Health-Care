/** @format */

import { pdf } from "@react-pdf/renderer";
import { Button, Image, message } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import productsData from "./products.json";
import ProductsPDF from "./ProductsPDF";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryType = queryParams.get("type");
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Find the sub-category
  const selectedSubCategory = productsData.categories
    .flatMap((category) => category.subCategories)
    .find((subCategory) => subCategory.type === subCategoryType);

  if (!selectedSubCategory) {
    return <div>Sub-category not found</div>;
  }

  const optimizeImageUrl = (url) => {
    // If using Cloudinary or similar service, add optimization parameters
    if (url.includes("cloudinary")) {
      return url.replace("/upload/", "/upload/q_auto,f_auto,w_300/");
    }
    // For local images, consider converting them to optimized versions
    return url;
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Create optimized product data with compressed image URLs
      const optimizedProducts = selectedSubCategory.products.map((product) => ({
        ...product,
        image: optimizeImageUrl(product.image),
      }));

      const optimizedSubCategory = {
        ...selectedSubCategory,
        products: optimizedProducts,
      };

      const blob = await pdf(
        <ProductsPDF subCategory={optimizedSubCategory} />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${selectedSubCategory.name.replace(
        /\s+/g,
        "_"
      )}_products.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the object URL to free memory
      setTimeout(() => URL.revokeObjectURL(url), 100);

      message.success("PDF exported successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      message.error("Failed to generate PDF");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <Layout>
      <div className="ltn__product-area ltn__product-gutter no-product-ratting pt-50 pb-70---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">{selectedSubCategory?.name}</h1>
              </div>
            </div>
          </div>

          {/* Your existing product grid */}
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
                      preview={false}
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
          <div style={{ marginBottom: "30px" }}>
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
