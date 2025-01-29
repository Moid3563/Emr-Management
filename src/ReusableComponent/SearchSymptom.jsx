import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Autocomplete,
  Box,
  Paper,
} from "@mui/material";
import "../Style/_symptoms.scss";


function SearchSymptom() {

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false); // State to control the dropdown

  const symptoms = [
    "chest pain",
    "Cold",
    "headache",
    "Cold cough",
    "Vomiting",
    "dry cough",
    "Fever",
  ];

  const handleInputChange = (event, newInputValue, reason) => {
    setSearchTerm(newInputValue); // Update search term

    // Open dropdown when Backspace is pressed or input is not empty
    if (reason === "input" || event?.nativeEvent?.inputType === "deleteContentBackward") {
      setOpen(true);
    } else if (!newInputValue) {
      setOpen(false); // Close dropdown if input is empty and Backspace is not pressed
    }
  };


  return (
    <>
     <Box className="symptoms-container">
        <Typography variant="h6" className="title">
          Symptoms
        </Typography>
        <Autocomplete
          multiple
          options={symptoms}
          value={selectedSymptoms}
          onChange={(event, newValue) => setSelectedSymptoms(newValue)}
          open={open} // Controlled open state
          onOpen={() => setOpen(true)} // Open dropdown when input is focused
          onClose={() => setOpen(false)} // Close dropdown
          inputValue={searchTerm}
          onInputChange={handleInputChange} // Custom input change handler
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search typing Symptoms/Chief Complaints"
              className="search-input"
            />
          )}
          fullWidth
        />
      </Box>


    </>
  )
}

export default SearchSymptom