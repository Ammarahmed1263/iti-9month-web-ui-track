import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { FC } from "react";

export type CardItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

type CardsGridProps = {
  items: CardItem[];
};

const CardsGrid: FC<CardsGridProps> = ({ items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        margin: "60px auto",
        justifyContent: "center",
        maxWidth: "1200px",
      }}
    >
      {items.map((item) => (
        <Card
          key={item.id}
          sx={{
            width: "380px",
            backgroundColor: "var(--surface)",
            color: "var(--text)",
            borderRadius: "16px",
            boxShadow: "none",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component='img'
            height='400'
            image={item.image}
            alt={item.alt}
            sx={{ objectFit: "cover" }}
          />

          <CardContent sx={{ padding: "20px 24px 10px 24px" }}>
            <Typography
              variant='h6'
              component='div'
              align='left'
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              {item.title}
            </Typography>
            <Typography
              align='left'
              variant='body2'
              sx={{ color: "var(--text-secondary)" }}
            >
              {item.description}
            </Typography>
          </CardContent>

          <CardActions sx={{ padding: "0 24px 24px 24px" }}>
            <Button
              variant='contained'
              fullWidth
              sx={{
                background:
                  "linear-gradient(to right, var(--accent), var(--secondary))",
                color: "var(--text)",
                fontWeight: "bold",
                textTransform: "uppercase",
                py: 1,
                boxShadow: "none",
              }}
            >
              Explore
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default CardsGrid;
