import { Box } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const Slide = ({ data }) => (
  <Box
    sx={{
      width: "320px",
    }}
  >
    <StyledImage alt="placeholder" src={data.image} width={"100%"} />
  </Box>
);

export default Slide;
