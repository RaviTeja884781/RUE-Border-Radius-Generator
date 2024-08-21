import React, { useCallback } from "react";
import styles from "./BorderRadiusExamples.module.css";
import { examples } from "../../data/examples";
import { Box, Paragraph } from "react-ui-essentials";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const BorderRadiusExamples = () => {
  const handleCopy = useCallback((html, css) => {
    const htmlCode = html;
    const cssCode = css;
    copyToClipboard(`${htmlCode}\n\n${cssCode}`);
  }, []);

  return (
    <Box padding="20px" className={styles.container}>
      {examples.map((ex, index) => (
        <Box
          width="160px"
          height="fit-content"
          key={index}
          padding="10px"
          backgroundColor="#fff"
          className={styles.card}
          onClick={() => handleCopy(ex.html, ex.css)}
          rounded
        >
          <Box className={styles.example} elevation={1} style={ex.styles}>
            <Paragraph fontSize="8px" fontWeight="600" color="#fff">
              Click To <br />
              Copy code
            </Paragraph>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BorderRadiusExamples;
