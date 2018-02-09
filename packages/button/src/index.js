/* eslint-disable no-magic-numbers */
import styled from 'styled-components'
import { palette } from '@atomix-ui/theming'


/**
 * Define basic button for all cases.
 * Button don't have any custom properties.
*/
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: all .23s ease-in-out; */
  cursor: pointer;
  user-select: none;
  color: ${palette('gray', 'text')};
  box-sizing: border-box;

  border: none;
  border-radius: 3px;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  line-height: 4rem;
  margin: 0;
  padding: 0 1rem;
  font-weight: 500;

  background-color: ${palette('gray')};

  &:hover {
    background-color: ${palette('gray', 600)};
  }
  &:active, &:focus {
    outline: none;
  }
  &:focus:not(:active) {
    outline: none;
    /* box-shadow: 0 0 0 2px rgba(1, 82, 204, .3); */
  }
  &[disabled] {
    cursor: default;
    background-color: ${palette('gray')};
    opacity: 88%;
    color: ${palette('gray', 300)};
  }
`


/**
 * Component define main action in form/page/modal.
 * Don't have custom properties too.
 */
Button.Primary = Button.extend`
  background-color: ${palette('primary')};
  color: ${palette('primary', 'text')};

  &:hover:not(:disabled) {
    background-color: ${palette('primary', 600)};
  }
  &:active:not(:disabled) {
    background-color: ${palette('primary', 400)};
  }
`

Button.Danger = Button.extend`
  background-color: ${palette('danger')};
  color: ${palette('danger', 'text')};

  &:hover:not(:disabled) {
    background-color: ${palette('danger', 600)};
  }
  &:active:not(:disabled) {
    background-color: ${palette('danger', 400)};
  }
`

Button.Warning = Button.extend`
  background-color: ${palette('warning')};
  color: ${palette('warning', 'text')};

  &:hover:not(:disabled) {
    background-color: ${palette('warning', 600)};
  }
  &:active:not(:disabled) {
    background-color: ${palette('warning', 400)};
  }
`

