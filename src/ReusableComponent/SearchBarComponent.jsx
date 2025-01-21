import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import PropTypes from "prop-types";
import "../Style/_searchBar.scss";

const SearchBarComponent = ({ placeholder, onSearchClick, onFilterClick, className, onChange }) => {
  return (
    <div className={`search-bar-container ${className}`}>
      <TextField
        className="search-bar"
        placeholder={placeholder}
        onClick={onSearchClick}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onFilterClick}>
                <TuneIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className="search-bars">
      <TextField
        variant="outlined"
        placeholder={placeholder}
        fullWidth
        InputProps={{
          startAdornment: (
            <span className="search-icon">
              <i className="material-icons">search</i>
            </span>
          ),
        }}
        onChange={onChange}
      />
    </div>
    </div>
    
  );
};


export default SearchBarComponent;



