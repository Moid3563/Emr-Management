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
} from "@mui/icons-material";
import "../Style/_noteseditor.scss";

const NotesEditor = () => {
  const editorRef = useRef(null);
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    bullet: false,
  });

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

  return (
    <Box className="notes-editor">
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
          <Button>
            <ArrowDropDown style={{ color: "black" }} />
          </Button>
        </ButtonGroup>
        <IconButton>
          <Fullscreen />
        </IconButton>
      </Box>

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        className="editor"
        placeholder="Enter your notes here..."
        onInput={updateActiveStyles}
        onFocus={updateActiveStyles}
        onBlur={updateActiveStyles}
      ></div>

      {/* Checkboxes */}
      <div className="advices-action">
        <FormControlLabel
          control={<Checkbox />}
          label="Advised Home isolation and treatment as of now."
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Streaming gargling"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Dr WhatsApp number +91 9771221270"
        />
      </div>
    </Box>
  );
};

export default NotesEditor;

