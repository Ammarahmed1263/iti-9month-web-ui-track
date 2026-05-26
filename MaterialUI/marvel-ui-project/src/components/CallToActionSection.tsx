import { Button, Stack, Typography } from "@mui/material";

export default function CallToActionSection() {
  return (
    <Stack
      direction='column'
      spacing={3}
      sx={{
        background:
          "linear-gradient(to right, var(--accent), var(--secondary))",
        p: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant='h5'
        sx={{
          color: "var(--text)",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Ready to build something awesome?
      </Typography>

      <Button
        variant='contained'
        sx={{
          bgcolor: "var(--bg)",
          color: "var(--text)",
          px: 6,
          py: 1,
          textTransform: "uppercase",
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        Join Now 🚀
      </Button>
    </Stack>
  );
}
