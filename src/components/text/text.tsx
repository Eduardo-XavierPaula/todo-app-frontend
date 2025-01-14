import styled from 'styled-components';
import { space, SpaceProps, typography, TypographyProps } from 'styled-system';

type TextProps = TypographyProps & SpaceProps;

export const Text = styled.p<TextProps>`
  font-size: 14px;
  color: #fff;
  ${typography}
  ${space}
`;
