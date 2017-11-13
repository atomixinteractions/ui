import styled from 'styled-components'
import PropTypes from 'prop-types'

import { shadows } from '@atomix-ui/shadow'
// import { ifProp } from '@atomix-ui/theming'


export const Toolbar = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  align-content: center;
  justify-content: space-between;
  user-select: none;
  box-sizing: border-box;

  height: 60px;
  padding: 0 16px;
  box-shadow: ${shadows[5]};
`

Toolbar.propTypes = {
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
}

Toolbar.defaultProps = {
  dense: false,
  disabled: false,
  flat: false,
}

