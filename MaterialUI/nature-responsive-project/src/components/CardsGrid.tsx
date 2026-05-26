import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import type { FC } from "react";

export type CardItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  beforePrice: string;
  afterPrice: string;
};

type CardsGridProps = {
  items: CardItem[];
};

export const CardsGrid: FC<CardsGridProps> = ({ items }) => {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Typography
        id='plants'
        variant='h4'
        align='center'
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "var(--text-main)",
          scrollMarginTop: "96px",
        }}
      >
        Trending Plants
      </Typography>
      <Typography
        variant='body1'
        align='center'
        color='text.secondary'
        sx={{ mb: 4, color: "var(--text-muted)" }}
      >
        Discover our most popular plants that are thriving in homes around the
        world.
      </Typography>

      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                backgroundColor: "var(--bg)",
                color: "var(--text)",
                // borderRadius: "16px",
                boxShadow: "none",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                // border: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              <CardMedia
                component='img'
                height='340'
                image={item.image}
                alt={item.alt}
                sx={{ objectFit: "cover" }}
              />

              <CardContent
                sx={{
                  padding: "20px 24px 24px 24px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant='h6'
                  component='div'
                  align='left'
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "var(--text-main)",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    minHeight: "3.2em",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  align='left'
                  variant='body2'
                  sx={{
                    color: "var(--text-muted)",
                    opacity: 0.8,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    minHeight: "4em",
                  }}
                >
                  {item.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1.5,
                    mt: "auto",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant='body2'
                    sx={{
                      color: "var(--text-muted)",
                      textDecoration: "line-through",
                      opacity: 0.7,
                    }}
                  >
                    {item.beforePrice}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: "bold", color: "var(--text-main)" }}
                  >
                    {item.afterPrice}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
