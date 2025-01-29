import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import "../Style/_medication.scss";

function Medication() {

    const frequentlyPrescribed = [
            { label: "Zifi 200 Tablet", subtitle: "CEFIXIME (200MG)" },
            { label: "Dolo", subtitle: "CEFIXIME (200MG)" },
            { label: "Calpol", subtitle: "CEFIXIME (200MG)" },
            { label: "Omez", subtitle: "CEFIXIME (200MG)" },
            { label: "Pantop", subtitle: "CEFIXIME (200MG)" },
            { label: "Prolomet", subtitle: "CEFIXIME (200MG)" },
            { label: "Aciloc", subtitle: "CEFIXIME (200MG)" },
            { label: "Rozawel", subtitle: "CEFIXIME (200MG)" },
            { label: "Ciploc", subtitle: "CEFIXIME (200MG)" },
          ];
        
          const suggestedMedications = [
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Sofromycin", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Paracetemol", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Dulcoflex", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Volini Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Azithromycin", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Betadin", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
            { label: "Nitrocin Spray", subtitle: "NITROGLYCERIN (25MG)" },
          ];
      
          const [searchTerm, setSearchTerm] = useState("");
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const dropdownRef = useRef(null);
          
            useEffect(() => {
              const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                  setIsDropdownOpen(false);
                }
              };
          
              document.addEventListener("mousedown", handleClickOutside);
              return () => {
                document.removeEventListener("mousedown", handleClickOutside);
              };
            }, []);
          
            const handleInputChange = (e) => {
              const value = e.target.value;
              setSearchTerm(value);
            //   setIsDropdownOpen(value.trim().length > 0);
            };
          
            const handleSelectMedication = (medication) => {
              setSearchTerm(medication.label);
              setIsDropdownOpen(false);
            };
          
            const filteredFrequently = frequentlyPrescribed.filter((med) =>
              med.label.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const filteredSuggested = suggestedMedications.filter((med) =>
              med.label.toLowerCase().includes(searchTerm.toLowerCase())
            );
          

            const handleKeyDown = (e) => {
                if (e.key.length === 1 || e.key === "Backspace") {
                  setIsDropdownOpen(true);
                }
              };
    
  return (
    <>
     <Box className="medications-container" ref={dropdownRef}>
      <Typography variant="h6" className="header">
        Medications
      </Typography>
      <Box className="search-container">
        <TextField
          variant="outlined"
          placeholder="Search typing Medicines"
          fullWidth
          value={searchTerm}
          onChange={handleInputChange}
        //   onFocus={() => setIsDropdownOpen(true)}
          onKeyDown={handleKeyDown}
        />
      </Box>
      {isDropdownOpen && (
        <Box className="dropdown-container" style={{ display: "flex" }}>
          {/* Frequently Section */}
          <Box className="dropdown-section" style={{ flex: 1, marginRight: "10px" }}>
            <Typography className="section-title">FREQUENTLY</Typography>
            <List className="medication-list">
              {filteredFrequently.map((med, index) => (
                <ListItem
                  key={index}
                  className="list-item"
                  onClick={() => handleSelectMedication(med)}
                  style={{ cursor: "pointer" }}
                >
                  <Box className="pill-icon">Rx</Box>
                  <ListItemText primary={med.label} secondary={med.subtitle} />
                </ListItem>
              ))}
            </List>
          </Box>
          {/* Suggested Section */}
          <Box className="dropdown-section" style={{ flex: 1 }}>
            <Typography className="section-title">SUGGESTED</Typography>
            <List className="medication-list">
              {filteredSuggested.map((med, index) => (
                <ListItem
                  key={index}
                  className="list-item"
                  onClick={() => handleSelectMedication(med)}
                  style={{ cursor: "pointer" }}
                >
                  <Box className="pill-icon">Rx</Box>
                  <ListItemText primary={med.label} secondary={med.subtitle} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </Box>
    </>
  )
}

export default Medication