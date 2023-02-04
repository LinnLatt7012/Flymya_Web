import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function TextSection() {
  return (
    <Container maxWidth="lg">
      <Typography
        sx={{
          width: "100%",
          fontSize: { xs: "50px", md: "60px" },
          fontWeight: 800,
          textAlign: "center",
          color: "#1FB8F1",
          my: 4,
        }}
      >
        Travel is Easy with Us
      </Typography>
    </Container>
  );
}
