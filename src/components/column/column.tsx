import { styled } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, color, ColorProps, border, BorderProps } from 'styled-system';

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderProps;

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  ${layout}
  ${space}
  ${color}
  ${border}
`;
