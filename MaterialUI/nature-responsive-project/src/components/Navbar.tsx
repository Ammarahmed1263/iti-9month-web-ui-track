import React, { useState, type MouseEvent } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "Plants", href: "#plants" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component='nav'
      sx={{
        width: "100%",
        bgcolor: "var(--btn-primary)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography
          variant='h6'
          component='a'
          href='#home'
          sx={{
            fontWeight: "bold",
            color: "var(--text-light)",
            textDecoration: "none",
            fontSize: "1.4rem",
          }}
        >
          Botanical Oasis
        </Typography>

        <Stack
          direction='row'
          spacing={4}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {navigationLinks.map((link) => (
            <Typography
              key={link.label}
              component='a'
              href={link.href}
              sx={{
                color: "var(--text-light)",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                opacity: 0.85,
                transition: "opacity 0.2s",
                "&:hover": {
                  opacity: 1,
                  color: "var(--btn-accent)",
                },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Stack>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={handleOpenMenu}
            sx={{ color: "var(--text-light)" }}
            edge='end'
          >
            <svg
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              focusable='false'
              style={{ display: "block" }}
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {" "}
                <path
                  d='M4 7L7 7M20 7L11 7'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>{" "}
                <path
                  d='M20 17H17M4 17L13 17'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>{" "}
                <path
                  d='M4 12H7L20 12'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>{" "}
              </g>
            </svg>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleCloseMenu}
            keepMounted
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            slotProps={{
              paper: {
                sx: {
                  bgcolor: "var(--btn-primary)",
                  border: "2px solid var(--btn-accent)",
                  minWidth: "180px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  mt: 1,
                },
              },
            }}
          >
            {navigationLinks.map((link) => (
              <MenuItem
                key={link.label}
                onClick={handleCloseMenu}
                component='a'
                href={link.href}
                sx={{
                  color: "var(--text-light)",
                  fontWeight: 500,
                  py: 1.2,
                }}
              >
                {link.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};
