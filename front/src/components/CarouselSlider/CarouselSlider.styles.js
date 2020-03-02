import styled, { css } from "styled-components";

export const SlideImg = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 650px;
    background: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media ${theme.device.mobileM} {
      height: 300px;
    }

    @media ${theme.device.mobileL} {
      height: 300px;
    }

    @media ${theme.device.tablet} {
      height: 300px;
    }

    @media ${theme.device.laptop} {
      height: 300px;
    }
  `}
`;
