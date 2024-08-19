import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-themes-all";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { Tooltip } from "react-ui-essentials";
import { RoundedIcons } from "react-ui-essentials-icons";
import styles from "./SyntaxHighLighter.module.css";

const SyntaxHighLighter = ({
  code,
  language,
  lineNumbers = false,
  title,
  ...rest
}) => {
  const extensions = [loadLanguage(language)];
  const [buttonText, setButtonText] = useState("Copy");
  const [buttonIcon, setButtonIcon] = useState(
    <RoundedIcons.ContentCopy width="16px" height="16px" />
  );

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code?.trim() || "");
      setButtonIcon(
        <RoundedIcons.LibraryAddCheck width="16px" height="16px" />
      );
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonIcon(<RoundedIcons.ContentCopy width="16px" height="16px" />);
        setButtonText("Copy");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  }, [code]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.language}>{title ? title : language}</span>
        <Tooltip text={buttonText} position="left">
          <button className={styles.copyButton} onClick={handleCopy}>
            {buttonIcon}
          </button>
        </Tooltip>
      </div>
      <div className={styles.codeWrapper}>
        <CodeMirror
          value={code}
          height="auto"
          editable={false}
          theme={githubLight}
          extensions={extensions}
          basicSetup={{
            lineNumbers: lineNumbers,
            foldGutter: true,
            highlightActiveLineGutter: false,
            highlightActiveLine: false,
          }}
          indentWithTab={false}
          tabSize={2}
          className={styles.codeMirror}
          {...rest}
        />
      </div>
    </div>
  );
};

SyntaxHighLighter.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  lineNumbers: PropTypes.bool,
  title: PropTypes.string,
};

export default SyntaxHighLighter;
