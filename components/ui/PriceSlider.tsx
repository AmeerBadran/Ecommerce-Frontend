import React from "react";
import { Box, Slider, Stack } from "@mui/material";

interface PriceFilterProps {
  value: number[];
  onChange: (event: Event, newValue: number | number[]) => void;
  min?: number;
  max?: number;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  value,
  onChange,
  min = 0,
  max = 260,
}) => {

  return (
    <Box sx={{ width: "100%", maxWidth: 350, p: "0 12px 0 12px", borderRadius: 3 }}>
      <Slider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        valueLabelDisplay="on"
        sx={{
          color: "#b27941",
          height: 6,
          padding: "18px 0",
          "& .MuiSlider-thumb": {
            width: 20,
            height: 20,
            backgroundColor: "#fff",
            border: "3px solid #b27941",
            boxShadow: "0 2px 8px rgba(178,121,65,0.10)",
            "&:hover": {
              boxShadow: "0 0 0 10px rgba(178, 121, 65, 0.13)",
            },
          },
          "& .MuiSlider-rail": {
            height: 4,
            borderRadius: 3,
            backgroundColor: "#b27941",
          },
          "& .MuiSlider-track": {
            height: 4,
            borderRadius: 3,
            backgroundColor: "#b27941",
          },
        }}
        slotProps={{
          valueLabel: {
            style: {
              position: "absolute",
              top: -42,
              transform: "translateX(-50%)",
              backgroundColor: "#b27941",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 6,
              padding: "6px 10px",
              boxShadow: "0 2px 8px rgba(178,121,65,0.10)",
            },
          },
        }}
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            backgroundColor: "#fff7e6",
            borderRadius: 1,
            px: 2,
            py: 0.5,
            fontSize: 13,
            fontWeight: 600,
            border: "2px solid #ffe0b2",
            position: "relative",
            right: "7%",
            color: "#b27941",
          }}
        >
          ${min}
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff7e6",
            borderRadius: 1,
            px: 2,
            py: 0.5,
            fontSize: 13,
            fontWeight: 600,
            border: "2px solid #ffe0b2",
            position: "relative",
            left: "7%",
            color: "#b27941",
          }}
        >
          ${max}
        </Box>
      </Stack>
    </Box>
  );
};

export default PriceFilter;
