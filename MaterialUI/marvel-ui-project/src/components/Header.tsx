import { Box, Button } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "var(--accent)",
        padding: "10px 40px",
      }}
    >
      <Box
        component='img'
        src='/logo.png'
        alt='Marvel logo'
        sx={{
          height: 60,
          width: "auto",
          display: "block",
          bgcolor: "var(--bg)",
          px: 4,
          borderRadius: "4px",
        }}
      />
      <Button
        variant='contained'
        sx={{
          bgcolor: "var(--bg)",
          color: "var(--text)",
          px: 6,
          py: 1,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Login
      </Button>
    </Box>
  );
}
