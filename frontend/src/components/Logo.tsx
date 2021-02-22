import React from "react";
import styled from "styled-components";

import svglogo from "../statics/svg/logo-upciti.svg";

const StyledLogo = styled.a`
  display: block;
  padding: 30px 20px;
`;

const Logo = () => {
  return (
    <StyledLogo href="/">
      <img width="100%" src={svglogo} />
    </StyledLogo>
  );
};

export default Logo;
