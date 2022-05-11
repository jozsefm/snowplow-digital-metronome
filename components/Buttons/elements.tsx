import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  typography,
  TypographyProps
} from 'styled-system'

export const Buttons = styled.div`
  display: grid;
  width: 300px;
  height: 81px;
  margin: 49px 0 32px 0;
  grid-template-columns: 86px 84px 86px;
  grid-template-rows: 35px 35px;
  column-gap: 22px;
  row-gap: 11px;
`

export const Button = styled.button<ColorProps & BorderProps & TypographyProps & { current: boolean }>`
  ${color}
  ${border}
  ${typography}
  background: ${({ theme, current }) => `${current ? theme.colors.buttonActive : theme.colors.button}`};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  letter-spacing: 0.78px;
  border: 0;
  padding: 0;
  color: ${({ theme, current }) => `${current ? theme.colors.dark : 'inherit'}`};;
  transition: background ease-out 0.2s, color ease-out 0.2s;
  user-select: none;

  &:hover {
    cursor: pointer;
    background: ${({ theme, current }) => `${current ? theme.colors.buttonActiveLight : theme.colors.buttonLight}`};
  }
`