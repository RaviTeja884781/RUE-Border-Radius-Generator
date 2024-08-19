import React from "react";
import styles from "./ProductList.module.css";
import { Box, Heading, Link } from "react-ui-essentials";

const ProductLogo = ({ name, logo,link }) => (
  <Box className={styles.productLogo}>
    {logo && <img src={logo} alt={`${name} logo`} className={styles.logo} />}
    <span className={styles.productName}>
        <Link to={link}>
        {name}
        </Link>
        </span>
  </Box>
);

const ProductList = ({ title, products }) => {
  return (
    <Box padding="20px" className={styles.productListContainer}>
      <Heading type="h2" className={styles.title}>
        {title}
      </Heading>
      <Box className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductLogo key={index} name={product.name} logo={product.logo} link={product.link} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
