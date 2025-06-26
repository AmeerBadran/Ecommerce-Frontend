"use client";
import React from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 200 }}>
      <Select
        labelId="sort-label"
        value={value}
        onChange={handleChange}
        disableUnderline
        MenuProps={{
          disableScrollLock: true,
          disablePortal: true,
        }}
        sx={{
          fontSize: 16,
          color: "#333",
          "& .MuiSelect-select": {
            padding: "8px 12px",
            backgroundColor: "#fff",
          },
        }}
      >
        <MenuItem value="featured">Featured</MenuItem>
        <MenuItem value="best-selling">Best selling</MenuItem>
        <MenuItem value="az">Alphabetically, A-Z</MenuItem>
        <MenuItem value="za">Alphabetically, Z-A</MenuItem>
        <MenuItem value="price-low-high">Price, low to high</MenuItem>
        <MenuItem value="price-high-low">Price, high to low</MenuItem>
        <MenuItem value="date-old-new">Date, old to new</MenuItem>
        <MenuItem value="date-new-old">Date, new to old</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
