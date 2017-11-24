import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { shadows } from '@atomix-ui/shadow'
import { ifProp } from '@atomix-ui/theming'


export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all .23s ease-in-out;
  cursor: pointer;
  user-select: none;
  color: black;
  box-sizing: border-box;

  border-radius: 2px;
  font-size: 14px;
  letter-spacing: 0.56px;
  height: 36px;
  margin: 6px 8px;
  min-width: 64px;
  padding: 0 16px;
  font-weight: 500;

  background-color: rgba(0,0,0,.05);
  box-shadow: ${shadows[1]};

  &:hover {
    background-color: rgba(0,0,0,.07);
    box-shadow: ${shadows[2]};
  }
  &:active {
    box-shadow: ${shadows[6]};
  }
  &[disabled] {
    box-shadow: none;
    background-color: rgba(0,0,0,.05);
    opacity: 88%;
    color: rgba(0,0,0,.26);
  }

  ${ifProp('elegant', css`
    padding: 30px 35px;
    border-radius: 50px;
    color: #fff;
    background-color: #f6397a;
    box-shadow: ${shadows[10]};

    &:hover {
      background-color: #f6397a;
      box-shadow: ${shadows[12]};
    }
    &:active {
      box-shadow: ${shadows[18]};
    }
  `)}
`

Button.propTypes = {
  disabled: PropTypes.bool,
  elegant: PropTypes.bool
}

Button.defaultProps = {
  disabled: false,
  elegant: false
}

