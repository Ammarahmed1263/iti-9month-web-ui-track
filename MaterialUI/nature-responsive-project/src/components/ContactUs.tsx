import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { FormEvent } from "react";

export const ContactUs = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Inquiry submitted to our botanists!");
  };

  const customTextFieldStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(8, 58, 45, 0.2)",
      },
      "&:hover fieldset": {
        borderColor: "var(--btn-primary)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--btn-primary)",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "var(--btn-primary)",
    },
  };

  return (
    <Box
      component='section'
      id='contact'
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        bgcolor: "var(--bg)",
      }}
    >
      <Container maxWidth='sm'>
        <Box
          sx={{
            padding: { xs: "32px", sm: "48px" },
            bgcolor: { md: "var(--surface)" },
            borderRadius: "16px",
            boxShadow: { md: "var(--shadow)" },
            border: { md: "1px solid rgba(0, 0, 0, 0.03)" },
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontWeight: "bold",
              color: "var(--text-main)",
              mb: 1,
              textAlign: "center",
            }}
          >
            Grower's Consultation
          </Typography>

          <Typography
            variant='body2'
            sx={{
              color: "var(--text-muted)",
              mb: 4,
              textAlign: "center",
            }}
          >
            Have a sick leaf or need rare lighting tips? Drop our team a line.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label='Name'
                variant='outlined'
                fullWidth
                required
                size='small'
                sx={customTextFieldStyle}
              />

              <TextField
                label='Email Address'
                type='email'
                variant='outlined'
                fullWidth
                required
                size='small'
                sx={customTextFieldStyle}
              />

              <TextField
                label='Message'
                variant='outlined'
                fullWidth
                multiline
                rows={4}
                required
                size='small'
                sx={customTextFieldStyle}
              />

              <Button
                variant='contained'
                type='submit'
                sx={{
                  bgcolor: "var(--btn-primary)",
                  padding: "12px 0",
                  fontWeight: "bold",
                  textTransform: "none",
                  width: "100%",
                  mt: 1,
                  "&:hover": {
                    bgcolor: "var(--btn-accent)",
                    color: "var(--text-main)",
                  },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
