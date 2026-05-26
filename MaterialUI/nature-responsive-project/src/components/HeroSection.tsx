import { Box, Button, Typography, Container } from "@mui/material";

export const HeroSection = () => {
  return (
    <Box
      id='home'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "80px 24px",
        textAlign: "center",
        background: `
          linear-gradient(
            to bottom,
            rgba(8, 58, 45, 0.4) 0%,
            rgba(8, 58, 45, 0.75) 100%
          ),
          url('/hero-image.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Container maxWidth='md'>
        <Typography
          variant='h1'
          sx={{
            fontSize: { xs: "36px", md: "52px" },
            fontWeight: "bold",
            mb: 3,
            color: "var(--text-light)",
            letterSpacing: "-0.02em",
            textShadow: "0px 4px 12px rgba(0,0,0,0.4)",
          }}
        >
          Welcome to Garden Shop
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            mb: 5,
            color: "rgba(255, 255, 255, 0.9)",
            lineHeight: 1.6,
            maxWidth: "700px",
            mx: "auto",
            textShadow: "0px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Our environment, the world in which we live and work, is a mirror of
          our attitudes and expectations.
        </Typography>
        <Button
          variant='contained'
          size='large'
          sx={{
            bgcolor: "var(--btn-accent)",
            color: "var(--text-main)",
            padding: "12px 32px",
            fontSize: "1.1rem",
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "var(--btn-primary)",
              color: "var(--text-light)",
            },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};
