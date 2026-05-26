import { Box, Button, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "12px",
        backgroundColor: "var(--btn-primary)",
      }}
    >
      <Typography
        variant='body2'
        sx={{
          color: "var(--text-light)",
          marginTop: "8px",
        }}
      >
        ©2026 Garden Shop - Built with using MUI.
      </Typography>

      <Button
        variant='text'
        sx={{
          color: "var(--btn-accent)",
          textTransform: "capitalize",
          transition: "color 0.2s ease, transform 0.2s ease",
          "&:hover": {
            color: "var(--text-light)",
            transform: "translateY(-1px)",
            backgroundColor: "transparent",
          },
          "&:focus-visible": {
            color: "var(--text-light)",
          },
        }}
      >
        Facebook
      </Button>
      <Button
        variant='text'
        sx={{
          color: "var(--btn-accent)",
          textTransform: "capitalize",
          transition: "color 0.2s ease, transform 0.2s ease",
          "&:hover": {
            color: "var(--text-light)",
            transform: "translateY(-1px)",
            backgroundColor: "transparent",
          },
          "&:focus-visible": {
            color: "var(--text-light)",
          },
        }}
      >
        Twitter
      </Button>
      <Button
        variant='text'
        sx={{
          color: "var(--btn-accent)",
          textTransform: "capitalize",
          transition: "color 0.2s ease, transform 0.2s ease",
          "&:hover": {
            color: "var(--text-light)",
            transform: "translateY(-1px)",
            backgroundColor: "transparent",
          },
          "&:focus-visible": {
            color: "var(--text-light)",
          },
        }}
      >
        Instagram
      </Button>
    </Box>
  );
};
