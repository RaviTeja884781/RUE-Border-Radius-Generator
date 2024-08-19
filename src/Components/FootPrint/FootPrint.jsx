import PropTypes from "prop-types";
import React, { memo } from "react";
import styles from "./FootPrint.module.css";
import { Box, Paragraph } from "react-ui-essentials";

const FootPrint = ({ tag, name, flag, ...rest }) => {
  return (
    <Box className={styles.rue_footprint_wrapper} {...rest}>
      <Paragraph fontSize="14px" fontWeight="500">
        {tag}
      </Paragraph>
      {flag && <span className={styles.rue_india_svg}>{flag}</span>}
      <Paragraph fontSize="14px" style={{ marginLeft: "8px" }} fontWeight="500">
        {name}
      </Paragraph>
    </Box>
  );
};

FootPrint.propTypes = {
  flag: PropTypes.node,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

export default memo(FootPrint);
