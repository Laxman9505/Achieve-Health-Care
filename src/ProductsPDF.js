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

// Create responsive styles
const styles = StyleSheet.create({
  document: {
    fontFamily: "Open Sans",
  },
  page: {
    padding: 15,
    backgroundColor: "#f5fbfa",
  },
  header: {
    marginBottom: 10,
    textAlign: "center",
    padding: "12 20",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderBottom: "2px solid #2a7d76",
    boxShadow: "0 2px 4px rgba(42,125,118,0.1)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a5a57",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    color: "#5a7a78",
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a5a57",
    margin: "10 0 8 0",
    padding: "6 10",
    backgroundColor: "#e6f5f3",
    borderRadius: 4,
    borderLeft: "4px solid #2a7d76",
  },
  productsGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "0 -5",
  },
  productColumn: {
    width: "48%",
    marginBottom: 10,
  },
  productCard: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    border: "1px solid #d0e8e6",
    marginBottom: 15,
    height: 200, // Fixed height for all cards
    display: "flex",
    flexDirection: "column",
  },
  productImageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#f8fdfc",
    border: "1px solid #e0f2f0",
    borderRadius: 3,
    marginBottom: 8,
    minHeight: 120,
  },
  productImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  productTextContainer: {
    flex: 0,
    minHeight: 50,
  },
  productName: {
    fontSize: 10.5,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a5a57",
    lineHeight: 1.3,
    marginBottom: 3,
  },
  productCode: {
    fontSize: 8.5,
    color: "#5a7a78",
    textAlign: "center",
    fontStyle: "italic",
  },
  footer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    textAlign: "center",
    fontSize: 9,
    color: "#5a7a78",
    padding: "8 0",
    borderTop: "1px solid #d0e8e6",
    backgroundColor: "#ffffff",
    borderRadius: 4,
  },
  pageNumber: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 9,
    color: "#5a7a78",
  },
  watermark: {
    position: "absolute",
    opacity: 0.06,
    fontSize: 70,
    color: "#2a7d76",
    transform: "rotate(-30deg)",
    left: "15%",
    top: "40%",
    fontWeight: "bold",
  },
  medicalBadge: {
    position: "absolute",
    top: 12,
    right: 15,
    backgroundColor: "#2a7d76",
    color: "white",
    padding: "2 8",
    borderRadius: 10,
    fontSize: 7.5,
    fontWeight: "bold",
  },
});

const ProductCard = ({ product }) => (
  <View style={styles.productCard}>
    <View style={styles.productImageContainer}>
      <PDFImage
        style={styles.productImage}
        src={product.image}
        minWidth={90}
        minHeight={90}
      />
    </View>
    <View style={styles.productTextContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      {product.code && (
        <Text style={styles.productCode}>Ref: {product.code}</Text>
      )}
    </View>
  </View>
);

const ProductsPDF = ({ content, isCategory, title }) => {
  const productsPerPage = 6; // 3 rows × 2 columns

  return (
    <Document>
      {isCategory
        ? content.map((subCategory) => {
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
                {/* <Text style={styles.medicalBadge}></Text> */}

                <View style={styles.header}>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.subtitle}>
                    {/* Professional Healthcare Solutions */}
                  </Text>
                  {chunkIndex === 0 ? (
                    <Text style={styles.sectionTitle}>{subCategory.name}</Text>
                  ) : (
                    <Text style={styles.sectionTitle}>
                      {subCategory.name} (continued)
                    </Text>
                  )}
                </View>

                <View style={styles.productsGrid}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <View key={index} style={styles.productColumn}>
                      {chunk[index] ? (
                        <ProductCard product={chunk[index]} />
                      ) : (
                        <View style={{ height: 200 }} />
                      )}
                    </View>
                  ))}
                </View>

                <Text style={styles.watermark}>ACHIEVE HEALTHCARE</Text>
                <View style={styles.footer}>
                  <Text>
                    Contact: achievehealthcare@gmail.com | Phone: +977
                    9851073526
                  </Text>
                </View>
                <Text
                  style={styles.pageNumber}
                  render={({ pageNumber, totalPages }) =>
                    `${pageNumber} / ${totalPages}`
                  }
                  fixed
                />
              </Page>
            ));
          })
        : (() => {
            const productChunks = [];
            for (let i = 0; i < content.products.length; i += productsPerPage) {
              productChunks.push(
                content.products.slice(i, i + productsPerPage)
              );
            }

            return productChunks.map((chunk, chunkIndex) => (
              <Page key={`page-${chunkIndex}`} size="A4" style={styles.page}>
                {/* <Text style={styles.medicalBadge}>MEDICAL CATALOG</Text> */}

                <View style={styles.header}>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.subtitle}>
                    {/* Professional Healthcare Solutions */}
                  </Text>
                </View>

                <View style={styles.productsGrid}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <View key={index} style={styles.productColumn}>
                      {chunk[index] ? (
                        <ProductCard product={chunk[index]} />
                      ) : (
                        <View style={{ height: 200 }} />
                      )}
                    </View>
                  ))}
                </View>

                <Text style={styles.watermark}>ACHIEVE HEALTHCARE</Text>
                <View style={styles.footer}>
                  <Text>
                    Contact: achievehealthcare@gmail.com | Phone: +977
                    9851073526
                  </Text>
                </View>
                <Text
                  style={styles.pageNumber}
                  render={({ pageNumber, totalPages }) =>
                    `${pageNumber} / ${totalPages}`
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
