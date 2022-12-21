import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: block; */
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  /*; */

  ${props => props.theme.breakpoints.tab} {
    width: 335px;

    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 392px;
  }

`;

export const Strip = styled.div`
  display: block;
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 40px;

  ${props => props.theme.breakpoints.tab} {
    width: 280px;
    height: 8px;
    margin-top: 0px;
  }

  ${props => props.theme.breakpoints.desc} {
    width: 340px;
    height: 8px;
  }
`;

export const Title = styled.h3`
  margin-top: 4px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.main};
  letter-spacing: -0.01em;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Content = styled.div`
  margin-top: ${props => props.theme.space[3]}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.secondary};

  color: ${props => props.theme.colors.background.content};

  ${props => props.theme.breakpoints.tab} {
    margin-top: ${props => props.theme.space[0]}px;
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.space[4]}px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Data = styled.div`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props => props.theme.colors.background.backdrop};
  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Link = styled.a`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  text-align: right;
  text-decoration-line: underline;
  color: ${props => props.theme.colors.accent};
  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

