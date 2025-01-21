import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Typography,
  Button,
  Box,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataGrid } from "@mui/x-data-grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../Style/_table.scss";

const TableComponent = ({ columns, rows }) => {
  
  const [filterText, setFilterText] = useState("");
  const [sortedRows, setSortedRows] = useState(rows);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  // Filter rows based on input text
  const handleFilterChange = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterText(text);

    const filteredRows = rows.filter((row) =>
      columns.some((column) =>
        row[column.field]?.toString().toLowerCase().includes(text)
      )
    );

    setSortedRows(filteredRows);
  };


  const [sortField, setSortField] = useState(""); // Field to sort by
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog state

  // Open/Close Dialog
  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);


  // Handle sorting when clicking on a column header
  const handleSort = (field) => {
    const isAscending = sortField === field && sortOrder === "asc";
    const newSortOrder = isAscending ? "desc" : "asc";

    const sortedData = [...sortedRows].sort((a, b) => {
      if (a[field] < b[field]) return newSortOrder === "asc" ? -1 : 1;
      if (a[field] > b[field]) return newSortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setSortOrder(newSortOrder);
    setSortField(field);
    setSortedRows(sortedData);
  };

  return (
    <>
     <Box>
        <TableContainer component={Paper} className="reusable-table">
        <Box
          mb={2}
          className="filter-btn"
        >
          <TextField
            label="Filter"
            variant="outlined"
            size="small"
            value={filterText}
            onChange={handleFilterChange}
            className="filter-input"
          />
   
          <Box className="sort-btn" mx={2}>
        <Button className="btn" onClick={handleDialogOpen}>
          Sort Table
        </Button>
      </Box>
      </Box>

      {/* Sort Dialog */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Sort Table</DialogTitle>
        <DialogContent>
          <RadioGroup
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
             className="custom-radio"
          >
            {columns.map((column, index) => (
              <FormControlLabel
                key={index}
                value={column.field}
                control={<Radio />}
                label={`Sort by ${column.label}`}
              />
            ))}
          </RadioGroup>
          <RadioGroup
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="custom-radio"
            row
          >
            <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
            <FormControlLabel value="desc" control={<Radio />} label="Descending" />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} className="cancel-btn">Cancel</Button>
          <Button className="apply-btn" onClick={handleSort}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
          <Table className="tables">
            <TableHead>
              <TableRow>
                {columns?.map((column, index) => (
                  <TableCell
                  key={index}
                  align={column.align || "left"}
                  className="table-header-cell"
                >
                  {column.field === "age" ? ( // Add sorting for the "age" column
                    <TableSortLabel
                      active={sortField === column.field}
                      direction={sortOrder}
                      onClick={() => handleSort(column.field)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
               {sortedRows.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="table-row">
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} align={column.align || "left"} className="table-cell">
                    {row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default TableComponent;
