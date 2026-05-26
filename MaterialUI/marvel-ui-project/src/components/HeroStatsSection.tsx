import type { FC } from "react";
import { Paper, Stack, Typography } from "@mui/material";

export type HeroStat = {
  title: string;
  description: string;
};

type HeroStatsSectionProps = {
  items: HeroStat[];
};

const HeroStatsSection: FC<HeroStatsSectionProps> = ({ items }) => {
  return (
    <Stack
      direction='row'
      spacing={3}
      sx={{
        background: "var(--surface)",
        padding: "40px",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {items.map((stat) => (
        <Paper
          key={stat.title}
          elevation={16}
          sx={{
            flex: 1,
            padding: "24px",
            textAlign: "center",
            color: "var(--text)",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant='h5'>{stat.title}</Typography>
          <Typography sx={{ color: "var(--text)" }}>
            {stat.description}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
};

export default HeroStatsSection;
