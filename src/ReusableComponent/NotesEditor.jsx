import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  ArrowDropDown,
  Fullscreen,
  FullscreenExit,
} from "@mui/icons-material";
import "../Style/_noteseditor.scss";

const NotesEditor = () => {
  const editorRef = useRef(null);
  const containerRef = useRef(null);
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    bullet: false,
  });


  const [content, setContent] = useState("");

  // Apply formatting to the selected text
  const applyFormat = (command) => {
    document.execCommand(command, false, null);
    updateActiveStyles();
    editorRef.current.focus();
  };

  // Update button active states based on selection
  const updateActiveStyles = () => {
    const bold = document.queryCommandState("bold");
    const italic = document.queryCommandState("italic");
    const bullet = document.queryCommandState("insertUnorderedList");
    setActiveStyles({ bold, italic, bullet });
  };

  
   // Wrap selected text with a tag
   const wrapSelectionWithTag = (tag) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    if (selectedText) {
      const newNode = document.createElement(tag);
      newNode.textContent = selectedText;
      range.deleteContents();
      range.insertNode(newNode);
      setContent(editorRef.current.innerHTML);
    }
  };

  // Update content on input
  const handleInput = () => {
    setContent(editorRef.current.innerHTML);
    updateActiveStyles();
  };

  return (
    <Box  className="notes-editor" ref={containerRef}>
      {/* Toolbar */}
      <Box className="toolbar">
        <ButtonGroup variant="none">
          <Button
            onClick={() => applyFormat("bold")}
            className={activeStyles.bold ? "active" : ""}
            style={{ color: "black" }}
          >
            <FormatBold />
          </Button>
          <Button
            onClick={() => applyFormat("italic")}
            className={activeStyles.italic ? "active" : ""}
            style={{ color: "black" }}
          >
            <FormatItalic />
          </Button>
          <Button
            onClick={() => applyFormat("insertUnorderedList")}
            className={activeStyles.bullet ? "active" : ""}
            style={{ color: "black" }}
          >
            <FormatListBulleted />
          </Button>
        </ButtonGroup>
      </Box>

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        className="editor"
        placeholder="Enter your notes here..."
        onInput={handleInput}
        // onInput={updateActiveStyles}
        onFocus={updateActiveStyles}
        onBlur={updateActiveStyles}
      ></div>
      {/* Display HTML Content */}
      <Box className="html-preview">
        <strong>Text Output:</strong>
        <div>{content}</div>
      </Box>
    </Box>
  );
};

export default NotesEditor;

