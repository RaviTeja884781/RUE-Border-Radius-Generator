import React, { useState } from "react";
import styles from "./BorderRadiusGenerator.module.css";
import { Box, Form, Heading, Range } from "react-ui-essentials";
import SyntaxHighLighter from "../SyntaxHighLighter/SyntaxHighLighter";

const BorderRadiusGenerator = () => {
  const [radii, setRadii] = useState({
    topLeft: 10,
    topRight: 10,
    bottomRight: 10,
    bottomLeft: 10,
  });

  const [size, setSize] = useState({
    width: 250,
    height: 250,
  });

  const handleRadiusChange = (corner, value) => {
    setRadii((prev) => ({ ...prev, [corner]: value }));
  };

  const handleSizeChange = (dimension, value) => {
    setSize((prev) => ({ ...prev, [dimension]: value }));
  };

  const generateCSS = () => {
    return `
      width: ${size.width}px;
      height: ${size.height}px;
      border-radius: ${radii.topLeft}px ${radii.topRight}px ${radii.bottomRight}px ${radii.bottomLeft}px;
    `;
  };

  return (
    <Box width="95%" margin="2rem" padding="2rem" outlined rounded>
      <Box className={styles.mainContent}>
        <Box className={styles.previewContainer}>
          <Box
            width={`${size.width}px`}
            height={`${size.height}px`}
            className={styles.preview}
            style={{
              borderTopLeftRadius: `${radii.topLeft}px`,
              borderTopRightRadius: `${radii.topRight}px`,
              borderBottomRightRadius: `${radii.bottomRight}px`,
              borderBottomLeftRadius: `${radii.bottomLeft}px`,
            }}
          >
            <span>Preview</span>
          </Box>
          <Box margin="30px 0 0 0" style={{ display: "flex", gap: "10px" }}>
            <Form.Input
              label="Width:"
              type="number"
              id="width"
              value={size.width}
              onChange={(e) =>
                handleSizeChange("width", parseInt(e.target.value))
              }
            />
            <Form.Input
              label="Height:"
              type="number"
              id="height"
              value={size.height}
              onChange={(e) =>
                handleSizeChange("height", parseInt(e.target.value))
              }
            />
          </Box>
        </Box>
        <Box className={styles.controls}>
          {Object.entries(radii).map(([corner, value]) => (
            <Box key={corner} className={styles.control}>
              <Range
                id={corner}
                title={corner.replace(/([A-Z])/g, " $1").trim()}
                value={value}
                min={0}
                max={100}
                step={1}
                handleChange={(e) =>
                  handleRadiusChange(corner, parseInt(e.target.value))
                }
              />
              <Form.Input
                type="number"
                value={value}
                onChange={(e) =>
                  handleRadiusChange(corner, parseInt(e.target.value))
                }
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box margin="50px 0">
        <SyntaxHighLighter
          code={generateCSS()}
          language="css"
          title="Generated Code"
        />
      </Box>
    </Box>
  );
};

export default BorderRadiusGenerator;
