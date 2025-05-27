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

// Register fonts (optional - for better typography)
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
  page: {
    padding: 30,
    fontFamily: "Open Sans",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    borderBottomStyle: "solid",
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 15,
    backgroundColor: "#fff",
  },
  productImageContainer: {
    alignItems: "center",
    marginBottom: 10,
    height: 150,
    justifyContent: "center",
  },
  productImage: {
    maxWidth: "80%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  productName: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 10,
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 10,
    color: "#999",
  },
});

const ProductsPDF = ({ subCategory }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{subCategory.name}</Text>
        <Text style={styles.subtitle}>
          Product Catalog - {new Date().toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.productsContainer}>
        {subCategory.products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <View style={styles.productImageContainer}>
              <PDFImage
                style={styles.productImage}
                src={product.image}
                // Optimize image by reducing quality (adjust as needed)
                minWidth={120}
                minHeight={120}
              />
            </View>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text>
          © {new Date().getFullYear()} Achieve Health Care. All rights reserved.
        </Text>
      </View>
    </Page>
  </Document>
);

export default ProductsPDF;
