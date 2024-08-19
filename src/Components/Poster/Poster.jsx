import * as React from "react";
import PropTypes from "prop-types";
import { Box, Heading } from "react-ui-essentials";
import styles from "./Poster.module.css";
import Rue from "../../assets/Rue";

const Poster = React.forwardRef(
  ({ width, height, padding, title, links, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        width={width}
        height={height}
        padding={padding}
        className={styles.poster_container}
        {...rest}
        style={{ backgroundColor: "#007bffdf" }}
      >
        <Box className={styles.poster_left_container}>
          <Rue width="200px" height="200px" className={styles.logo} />
        </Box>
        <Box className={styles.poster_right_container}>
          <Heading type="h1" fontWeight="600" color="#fff" italic>
            {title}
          </Heading>
        </Box>
      </Box>
    );
  }
);

Poster.propTypes = {
  height: PropTypes.string,
  links: PropTypes.shape({
    map: PropTypes.func,
  }),
  padding: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
};

Poster.displayName = "Poster";
export default Poster;
