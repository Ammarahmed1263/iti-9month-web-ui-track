import { Box, Button, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        padding: "60px 0",
        textAlign: "center",
        background: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
          url('/infinity-war.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant='h1'
        sx={{
          fontSize: "42px",
          fontWeight: "bold",
          mb: 2,
          color: "var(--text)",
          textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
        }}
      >
        Avengers Assemble!
      </Typography>

      <Button
        variant='contained'
        sx={{
          bgcolor: "var(--accent)",
          color: "var(--text)",
          padding: "8px 20px",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Get Started
      </Button>
    </Box>
  );
}
