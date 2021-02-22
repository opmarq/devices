import React from "react";
import styled from "styled-components";

import svglogo from "../statics/svg/logo-upciti.svg";

const StyledLogo = styled.div`
  padding: 30px 20px;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img width="100%" src={svglogo} />
    </StyledLogo>
  );
};

export default Logo;
