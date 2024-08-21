import React from "react";
import { Box, Tab, Tabs, Tooltip } from "react-ui-essentials";
import Poster from "./Components/Poster/Poster";
import BorderRadiusGenerator from "./Components/BorderRadiusGenerator/BorderRadiusGenerator";
import FootPrint from "./Components/FootPrint/FootPrint";
import IndianFlag from "./Components/FootPrint/IndianFlag";
import { products } from "./data/products";
import ProductList from "./Components/ProductList/ProductList";
import BorderRadiusExamples from "./Components/BorderRadiusExamples/BorderRadiusExamples";

const App = () => {
  return (
    <Box>
      <Poster title="Border Radiue Generator" width="100%" height="350px" />
      <Tabs>
        <Tab label="Playground" value="playground">
          <BorderRadiusGenerator />
        </Tab>
        <Tab label="Examples" value="examples">
          <BorderRadiusExamples />
        </Tab>
      </Tabs>
      <Box padding="10px" backgroundColor="#24d3b2">
        <ProductList title="OTHER PRODUCTS" products={products} />
      </Box>
      <Box
        padding="5px"
        margin="5px 20px"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <FootPrint
          tag="Made In"
          flag={
            <Tooltip text="India" variant="info" position="right">
              <IndianFlag
                width="20px"
                height="20px"
                style={{ margin: "0px 4px -4px 4px" }}
              />
            </Tooltip>
          }
        />
        <FootPrint tag="Developed by" name="Ravi Teja Ladi" />
      </Box>
    </Box>
  );
};

export default App;
