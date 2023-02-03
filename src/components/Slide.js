import * as React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const Slide = ({ data }) => (
  <SContainer>
    <img alt="placeholder" src={data.image} />
  </SContainer>
);

export default Slide;
