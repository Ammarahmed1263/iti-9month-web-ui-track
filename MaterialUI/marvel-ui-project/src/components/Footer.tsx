import React from "react";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "12px",
        backgroundColor: "var(--surface)",
        color: "var(--text)",
      }}
    >
      ©2026 Marvel - Built with using MUI.
    </Box>
  );
}
