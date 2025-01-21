import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Paper,
  IconButton,
  Autocomplete,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import '../Style/_symptoms.scss'

function SearchSymptom() {

    const [search, setSearch] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  
    const symptoms = [
      "chest pain",
      "Cold",
      "headache",
      "Cold cough",
      "Vomiting",
      "dry cough",
      "Fever",
    ];
  
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

export default SearchSymptom;