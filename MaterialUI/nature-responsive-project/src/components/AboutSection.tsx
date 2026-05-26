import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const AboutSection = () => {
  return (
    <Box
      component='section'
      sx={{
        width: "100%",
        bgcolor: "var(--btn-primary)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component='img'
              id='about'
              src='https://prestashop.coderplace.in/PRS05/PRS05109/demo/modules/cp_imageslider/views/images/sample-3.webp'
              alt='About Us Illustration'
              sx={{
                width: "100%",
                maxHeight: { xs: "300px", md: "400px" },
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                display: "block",
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ textAlign: { xs: "left", md: "left" } }}>
              <Typography
                variant='h4'
                component='h2'
                sx={{
                  fontWeight: "bold",
                  color: "var(--btn-accent)",
                  mb: 2,
                }}
              >
                About Us
              </Typography>

              <Typography
                variant='body1'
                sx={{
                  color: "var(--text-light)",
                  lineHeight: 1.7,
                  opacity: 0.9,
                }}
              >
                We are a family-owned restaurant dedicated to serving delicious,
                high-quality meals made from fresh, locally sourced ingredients.
                Our mission is to provide an unforgettable dining experience for
                every guest.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
