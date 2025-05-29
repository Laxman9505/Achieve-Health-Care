/** @format */
import {
  Document,
  Font,
  Page,
  Image as PDFImage,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhs.ttf",
      fontWeight: 600,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  document: {
    fontFamily: "Open Sans",
  },
  page: {
    padding: 20,
    backgroundColor: "#f0f9f8", // Light medical-themed teal background
  },
  header: {
    marginBottom: 15,
    textAlign: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3a7d78",
    borderBottomStyle: "solid",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 4px rgba(58,125,120,0.1)",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a5a57",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#4a6b69",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a5a57",
    marginTop: 15,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#d0e8e6",
    borderBottomStyle: "solid",
    backgroundColor: "#e6f5f3",
    padding: 8,
    borderRadius: 4,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  productCard: {
    width: "48%",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#d6f0ed",
    boxShadow: "0 2px 4px rgba(58,125,120,0.1)",
    minHeight: 220, // Fixed height for consistent cards
  },
  productImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    marginBottom: 8,
    padding: 8,
    backgroundColor: "#f8fdfc",
    borderWidth: 1,
    borderColor: "#e0f2f0",
    borderRadius: 4,
  },
  productImage: {
    maxWidth: "90%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  productName: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a5a57",
    marginTop: 6,
    lineHeight: 1.3,
    minHeight: 30, // Ensure consistent name box height
  },
  productCode: {
    fontSize: 9,
    color: "#5a7a78",
    textAlign: "center",
    marginTop: 4,
    fontStyle: "italic",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 9,
    color: "#5a7a78",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#d0e8e6",
    backgroundColor: "#ffffff",
    padding: 8,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  pageNumber: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 9,
    color: "#5a7a78",
  },
  watermark: {
    position: "absolute",
    opacity: 0.08,
    fontSize: 72,
    color: "#3a7d78",
    transform: "rotate(-30deg)",
    left: "15%",
    top: "40%",
    fontWeight: "bold",
  },
  medicalBadge: {
    position: "absolute",
    top: 15,
    right: 20,
    backgroundColor: "#3a7d78",
    color: "white",
    padding: "3px 8px",
    borderRadius: 10,
    fontSize: 8,
    fontWeight: "bold",
  },
});

const ProductCard = ({ product }) => (
  <View style={styles.productCard} wrap={false}>
    <View style={styles.productImageContainer}>
      <PDFImage
        style={styles.productImage}
        src={product.image}
        minWidth={100}
        minHeight={100}
      />
    </View>
    <Text style={styles.productName}>{product.name}</Text>
    {product.code && (
      <Text style={styles.productCode}>Product Code: {product.code}</Text>
    )}
  </View>
);

const ProductsPDF = ({ content, isCategory, title }) => {
  const productsPerPage = 6; // 3 rows x 2 columns

  return (
    <Document>
      {isCategory
        ? // Render all sub-categories for a category
          content.map((subCategory) => {
            const productChunks = [];
            for (
              let i = 0;
              i < subCategory.products.length;
              i += productsPerPage
            ) {
              productChunks.push(
                subCategory.products.slice(i, i + productsPerPage)
              );
            }

            return productChunks.map((chunk, chunkIndex) => (
              <Page
                key={`${subCategory.type}-${chunkIndex}`}
                size="A4"
                style={styles.page}
              >
                {/* <Text style={styles.medicalBadge}>MEDICAL EQUIPMENT</Text> */}
                {chunkIndex === 0 && (
                  <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    {/* <Text style={styles.subtitle}>
                      Professional Medical Product Catalog
                    </Text> */}
                    <Text style={styles.sectionTitle}>{subCategory.name}</Text>
                  </View>
                )}
                {chunkIndex > 0 && (
                  <View style={styles.header}>
                    <Text style={styles.sectionTitle}>
                      {subCategory.name} (continued)
                    </Text>
                  </View>
                )}

                <View style={styles.productsContainer}>
                  {chunk.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </View>

                <Text style={styles.watermark}>Achieve Health Care</Text>
                <View style={styles.footer}>
                  <Text>
                    For inquiries: achievehealthcare@gmail.com | + 977
                    9851073526
                  </Text>
                </View>
                <Text
                  style={styles.pageNumber}
                  render={({ pageNumber, totalPages }) =>
                    `Page ${pageNumber} of ${totalPages}`
                  }
                  fixed
                />
              </Page>
            ));
          })
        : // Render single sub-category
          (() => {
            const productChunks = [];
            for (let i = 0; i < content.products.length; i += productsPerPage) {
              productChunks.push(
                content.products.slice(i, i + productsPerPage)
              );
            }

            return productChunks.map((chunk, chunkIndex) => (
              <Page key={`page-${chunkIndex}`} size="A4" style={styles.page}>
                {/* <Text style={styles.medicalBadge}>MEDICAL EQUIPMENT</Text> */}
                {chunkIndex === 0 && (
                  <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    {/* <Text style={styles.subtitle}>
                      Professional Medical Product Catalog
                    </Text> */}
                  </View>
                )}

                <View style={styles.productsContainer}>
                  {chunk.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </View>

                <Text style={styles.watermark}>Achieve Health Care</Text>
                <View style={styles.footer}>
                  <Text>
                    For inquiries: achievehealthcare@gmail.com | +977 9851073526
                  </Text>
                </View>
                <Text
                  style={styles.pageNumber}
                  render={({ pageNumber, totalPages }) =>
                    `Page ${pageNumber} of ${totalPages}`
                  }
                  fixed
                />
              </Page>
            ));
          })()}
    </Document>
  );
};

export default ProductsPDF;
